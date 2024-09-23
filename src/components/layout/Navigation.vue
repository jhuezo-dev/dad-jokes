<template>
  <div class="top_navbar">
    <div class="nav_card">
      <!-- logo icon -->
      <router-link to="/" class="logo_wrapper">
        <img src="../../assets/logo.png" alt="Website logo" class="w-8 h-8 logo" />
        <div class="text-xl pl-2">Dad Jokes</div>
      </router-link>

      <div class="nav_wrapper">
        <div :class="`nav_items ${mobile_nav_menu_open ? 'show_mobile_nav': ''}`">
          <!-- <nav-item
            text="Home"
            :path="'/'"
            :active="['Home']"
          ></nav-item> -->
          <nav-item
            text="Jokes"
            :path="'/jokes'"
            :active="['Jokes']"
          ></nav-item>
          <nav-item
            text="Search"
            :path="`${route.path}`"
            @click="ToggleModalOpen()"
          ></nav-item>

          <Search
            v-if="searchStore.modal_open"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useSearchStore } from '@/stores/search';
import { useRoute } from 'vue-router';
import NavItem from './NavItem.vue'
import Search from '../search/Search.vue';

const route = useRoute();
const searchStore = useSearchStore();
const mobile_nav_menu_open = ref();

function ToggleModalOpen() {
  searchStore.toggleModalOpen();
}

</script>

<style lang="scss" scoped>
.top_navbar {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 80px;
  position: relative;
  top: 0;
  width: 100%;

  z-index: 10;
}

.nav_card {
  width: 100%;
  height: 100%;
  background: var(--navbar-bg);
  display: flex;
  justify-content: space-between;
}

.dark .nav_card {
  background: var(--navbar-dark-bg);
}

.logo_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: calc(8px + 1.5625vw);
  color: var(--text-dark);

}
// .logo {
//   background: var(--text-dark);
// }

.dark .logo {
  border-radius: 100%;
  background: var(--colors-almostlight);
}

.dark .logo_wrapper {
  color: var(--colors-almostlight);
}

.nav_wrapper {
  height: inherit;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: calc(8px + 1.5625vw);
}

.nav_items {
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 16px;
  color: var(--text-gray);
}

.dark .nav_items {
  color: var(--colors-almostlight);
}

</style>