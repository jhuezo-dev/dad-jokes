<template>
  <div :class="`${themeStore.theme == 'dark' ? 'dark' : ''}`" class="layout">
    <Navigation />
    <div class="content_wrapper">
      <router-view :key="$route.fullPath" v-slot="{ Component }">
        <component :is="Component" class="content_bg"/>
      </router-view>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navigation from '@/components/layout/Navigation.vue'
import Footer from '@/components/layout/Footer.vue'
import { onMounted } from 'vue';
import { useThemeStore } from '../stores/theme';

const themeStore = useThemeStore();

onMounted(async ()=> {
  const storage = JSON.parse(localStorage.getItem('jokes'));

  if(storage.theme) {
    themeStore.setTheme(storage.theme);
  } 
  else if(
    window.matchMedia && 
    window.matchMedia("(prefers-color-scheme: dark)")
    .matches) {
      themeStore.setTheme('dark');
  } else {
    themeStore.setTheme('light');
  }
})


</script>

<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  width: 100vw;
  height: 100vh;
  background: var(--colors-almostlight);
  transition: 100ms ease-in-out;
}

.dark  {
  background: var(--colors-dark);
  color: var(--colors-almostlight);
}

.content_wrapper {
  padding: 6%;
  grid-template-columns: auto 1fr;
}

.content_bg {
  height: -webkit-fill-available;
  height: 100dvh;
  display: flex;
  flex-direction: column;
}

</style>