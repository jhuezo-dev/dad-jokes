import { defineStore } from 'pinia';
import { setItems } from './utils';

export const useThemeStore = defineStore({
  id:'theme',
  state: () => ({
    theme: 'light',
  }),
  getters: {
    getTheme: (state) => state.theme
  },
  actions: {
    setTheme(theme) {
      this.theme = theme;
      setItems('theme', this.theme)
    },
  }
});

