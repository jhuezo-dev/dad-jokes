import { defineStore } from 'pinia';
import { setItems } from './utils';

export const useSearchStore = defineStore({
  id:'search',
  state: () => ({
    modal_open: false
  }),

  actions: {
    toggleModalOpen() {
      this.modal_open = !this.modal_open;
      setItems('modal_open', this.modal_open)
    }
  }
});