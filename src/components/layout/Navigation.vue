<template>
  <div class="top_navbar">
    <div class="nav_card">
      <!-- logo icon -->
      <router-link to="/" class="logo_wrapper">
        <IconLogo />
      </router-link>

      <div class="nav_wrapper">
        <!-- mobile menu icon -->
        <div
          class="mobile_nav_menu"
          @click="mobile_nav_menu_open = !mobile_nav_menu_open"
        >
          <svg-icon
            type="mdi"
            :path="mobile_nav_menu_open ? mdiMinus : mdiChessRook"
            :size="28"
            style="color: var(--link-color);"
          ></svg-icon>
        </div>

        <div :class="`nav_items ${mobile_nav_menu_open ? 'show_mobile_nav': ''}`">
          <nav-item
            text="Home"
            :path="'/Home'"
            :active="['Home']"
            @click="mobile_nav_menu_open = false"
          ></nav-item>
          <nav-item
            text="Jokes"
            :path="'/jokes'"
            :active="['Jokes']"
            @click="mobile_nav_menu_open = false"
          ></nav-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavItem from './NavItem.vue'

const mobile_nav_menu_open = ref();

</script>

<style lang="scss" scoped>
.top_navbar {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 80px;
  position: relative;
  z-index: 10;
}

.nav_card {
  width: 100%;
  height: 100%;
  background: var(--navbar-bg);
}

.logo_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav_wrapper {
  height: inherit;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: calc(100vw - 6px);
}

.nav_items {
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 16px;
}

</style>