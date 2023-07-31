import { derived, writable } from 'svelte/store';

export const store1 = writable(1);

export const store2 = writable(2);

export default derived([store1, store2], ([storeValue1, storeValue2], set) => {
  set(storeValue1 > storeValue2);
});
