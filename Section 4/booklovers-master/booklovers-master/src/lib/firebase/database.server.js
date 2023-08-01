import { PAGE_SIZE } from '$env/static/private';
import { db } from '$lib/firebase/firebase.server';
import admin from 'firebase-admin';
import { saveFileToBucket } from './firestorage.server';


export async function addBook(book, userId) {

    // save to the firestore database without picture information
    const bookCollection = db.collection('books');

    const bookRef = await bookCollection.add({
        title: book.title,
        short_description: book.short_description,
        description: book.description,
        author: book.author,
        user_id: userId,
        created_at: admin.firestore.Timestamp.now().seconds,
        likes: 0
    });

    // save the pictures 

    const smallPictureUrl = await saveFileToBucket(book.small_picture,
        `${userId}/${bookRef.id}/small_picture`);

    const mainPictureUrl = await saveFileToBucket(book.main_picture,
        `${userId}/${bookRef.id}/main_picture`);

    // update the doc in firestore database with the picture urls

    await bookRef.update({
        main_picture: mainPictureUrl,
        small_picture: smallPictureUrl
    })

    // return book id

    return bookRef.id;
}

export async function editBook(id, form, userId) {
    const bookRef = await db.collection('books').doc(id);
    let mainPicture = form.main_picture || null;
    let smallPicture = form.small_picture || null;
    delete form.main_picture;
    delete form.small_picture;
    await bookRef.update(form);

    if (mainPicture) {
        const mainPictureUrl = await saveFileToBucket(mainPicture,
            `${userId}/${bookRef.id}/main_picture`);

        bookRef.update({ main_picture: mainPictureUrl })
    }

    if (smallPicture) {
        const smallPictureUrl = await saveFileToBucket(smallPicture,
            `${userId}/${bookRef.id}/small_picture`);

        bookRef.update({ small_picture: smallPictureUrl })
    }
}

export async function getBooksForUser(userId) {
    const user = await getUser(userId);

    const books = await db.collection('books')
        .orderBy('created_at', 'desc')
        .where('user_id', '==', userId)
        .get();

    return books.docs.map(d => {
        const likedBook = user?.bookIds?.includes(d.id) || false;

        return { id: d.id, ...d.data(), likedBook }
    })
}

export async function getLikedBooks(userId) {
    const user = await getUser(userId);

    const bookIds = user?.bookIds || [];

    if (bookIds.length === 0) {
        return [];
    }

    const books = await db.collection('books')
        .where(admin.firestore.FieldPath.documentId(), 'in', bookIds)
        .get();

    return books.docs.map(d => {
        return { id: d.id, ...d.data(), likedBook: true }
    })
}

export async function getBook(id, userId = null) {
    const bookRef = await db.collection('books').doc(id).get();

    if (bookRef.exists) {
        const user = userId ? await getUser(userId) : null;
        const likedBook = user?.bookIds?.includes(id) || false;


        return { id: bookRef.id, ...bookRef.data(), likedBook }
    }
}

export async function getBooks(userId, page = 1) {

    const user = userId ? await getUser(userId) : null;


    const bookCount = await db.collection('books').count().get();

    const totalBooks = bookCount.data().count;

    const next = totalBooks > (page * +PAGE_SIZE);
    const previous = page > 1;
    const books = await db.collection('books')
        .limit(+PAGE_SIZE)
        .offset((page - 1) * +PAGE_SIZE)
        .orderBy('created_at', 'desc')
        .get();


    const likedBooks = books.docs.map(d => {

        const likedBook = user?.bookIds?.includes(d.id) || false;

        return { ...d.data(), id: d.id, likedBook }
    })

    return {
        books: likedBooks,
        next,
        previous
    };
}

export async function getUser(userId) {
    const user = await db.collection('users').doc(userId).get();

    return user?.data();
}

export async function toggleBookLike(bookId, userId) {
    const bookDoc = db.collection('books').doc(bookId);

    const userDoc = db.collection('users').doc(userId);

    const user = await userDoc.get();

    const userData = user.data();

    // unlike the book
    if (userData.bookIds && userData.bookIds.includes(bookId)) {
        await userDoc.update({
            bookIds: admin.firestore.FieldValue.arrayRemove(bookId)
        });
        await bookDoc.update({
            likes: admin.firestore.FieldValue.increment(-1)
        });
    }
    // like the book
    else {
        await userDoc.update({
            bookIds: admin.firestore.FieldValue.arrayUnion(bookId)
        });
        await bookDoc.update({
            likes: admin.firestore.FieldValue.increment(1)
        });
    }

    return await getBook(bookId, userId);
}