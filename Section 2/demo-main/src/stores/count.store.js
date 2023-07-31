import { writable } from 'svelte/store';

const store = writable(1);

export default {
  subscribe: store.subscribe,
  set: (n) => {
    if (n > 0) {
      store.set(n);
    }
  },
  multipleBy: (times) => {
    store.update((n) => n * times);
  },
  addOne: () => {
    store.update((n) => n + 1);
  },
  minusOne: () => {
    store.update((n) => n - 1);
  },
};
