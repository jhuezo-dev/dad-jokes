import { defineStore } from 'pinia';
import { setItems } from './utils';

export const usecachedJokesStore = defineStore({
  id:'cachedJokes',
  state: () => ({
    jokes: []
  }),

  actions: {
    storeJoke(j) {
      this.jokes.push(j)
      setItems('jokes', this.jokes)
    }
  }
});