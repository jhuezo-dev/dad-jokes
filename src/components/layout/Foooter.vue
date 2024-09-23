<template>
  <div class="footer">
    <div class="footer_wrapper">
      <div class="flex justify-center">Made with <span style="color: red;margin: 0px 2px;">❤</span> by Jessica</div>
      <div class="flex justify-end">
        <ThemeSwitcher />
      </div>
    </div>
  </div>
</template>

<script setup>
import ThemeSwitcher from './ThemeSwitcher.vue'

</script>

<style lang="scss" scoped>
.footer {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  position: relative;
  height: 65px;
  width: 100%;
  bottom: 0;
  z-index: 10;
  background: var(--navbar-bg);
}

.dark .footer {
  background: var(--navbar-dark-bg);
}

.footer_wrapper {
  display: flex;
  // justify-content: center;
  justify-content: space-between;
  align-items: center;
  padding-left: calc(8px + 1.5625vw);
  padding-right: calc(8px + 1.5625vw);
}

</style>