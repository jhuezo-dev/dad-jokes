<template>
  <div v-if="themeStore.theme == 'dark'">
    <img :src="sun_icon" alt="Sun icon" class="w-7 h-7" @click="ToggleTheme('light')">
  </div>
  <div v-else>
    <img :src="moon_icon" alt="Moon icon" class="w-7 h-7" @click="ToggleTheme('dark')">
  </div>
</template>

<script setup>
import { useThemeStore } from '@/stores/theme';
import moon_icon from '../../assets/moon.png';
import sun_icon from '../../assets/sun.png'

const themeStore = useThemeStore();

function ToggleTheme(theme) {
  themeStore.setTheme(theme)
}

</script>

<style lang="scss" scoped>

</style>