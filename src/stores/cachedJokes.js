import { defineStore } from 'pinia';
import { setItems, getItems } from './utils';

export const usecachedJokesStore = defineStore({
  id:'cachedJokes',
  state: () => ({
    jokes: []
  }),
 
  actions: {
    storeJoke(j) {
      if(!this.jokes.some(joke => joke.id === j.id)) {
        this.jokes.push(j)
        setItems('jokes', this.jokes)
      }
    },
    loadJokes() {
      let j = getItems();
      if(j && this.jokes != j.jokes) {
        this.jokes = j.jokes;
      }
    }
  }
});