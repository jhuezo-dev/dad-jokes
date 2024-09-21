<template>
  <div class="layout">
    <Navigation />
    <div class="content_wrapper">
      <router-view :key="$route.fullpath" v-slot="{ Component }">
        <component :is="Component" class="content_bg"/>
      </router-view>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navigation from '@/components/layout/Navigation.vue'
import Footer from '@/components/layout/Footer.vue'
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

</style>