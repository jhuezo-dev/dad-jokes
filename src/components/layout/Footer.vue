<template>
  <div class="footer">
    <div class="footer_wrapper">
      Made with <span style="color: red;margin: 0px 2px;">❤</span> by Jessica
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 60px;
  position: relative;
  z-index: 10;
  background: var(--navbar-bg);
}

.footer_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>