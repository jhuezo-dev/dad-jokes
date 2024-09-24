<template>
  <div class="nav-link" @click="changeRoute">
    <span class="text-lg">{{ text }}</span>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const props = defineProps({
  text: {
    type: String,
    default: 'Link'
  },
  path: {
    type: String,
    default: '/'
  }
})
const emit = defineEmits(["clicked"]);
const router = useRouter();
const route = useRoute();

function changeRoute() {
  emit("clicked");
  if (props.path) {
    router.push(props.path);
  }
}

</script>

<style lang="scss" scoped>
.nav-link {
  display: flex;
  cursor: pointer;
}

</style>