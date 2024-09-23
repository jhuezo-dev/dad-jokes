<template>
  <div :class="`${themeStore.theme == 'dark' ? 'dark' : ''}`" class="layout">
    <Navigation />
    <div class="content_wrapper">
      <router-view :key="$route.fullPath" v-slot="{ Component }">
        <component :is="Component" class="content_bg"/>
      </router-view>
    </div>
    <Foooter />
  </div>
</template>

<script setup>
import Navigation from '@/components/layout/Navigation.vue'
import Foooter from '@/components/layout/Foooter.vue'
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
  width: 100dvw;
  height: 100dvh;
  background: var(--colors-almostlight);
  transition: 100ms ease-in-out;
}

.dark  {
  background: var(--colors-dark);
  color: var(--colors-almostlight);
}

.content_wrapper {
  // display: grid;
  position: relative;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  overflow-y: auto;
  // grid-template-columns: auto 1fr;
}

.content_bg {
  padding: 8%;
  height: -webkit-fill-available;
  height: 100%;
  overflow-y: auto;
}

@media only screen and (max-width: 480px) {
  .layout {
    // height: -webkit-fill-available;
    // height: 100dvh;
  }
  .content_wrapper {
    // height: calc(100dvh - 60px);
    // grid-template-columns: auto 1fr;
    // height: 100%;
    // height: -webkit-fill-available;
  }
  
  .content_bg {
    // height: -webkit-fill-available;
    // height: 100dvh;
    // height: 100%;
  }
  
}

</style>