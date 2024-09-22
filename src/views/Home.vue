<template>
  <!-- <div class=""> -->
    <h1 class="font-medium">Wanna hear a funny joke?</h1>
    <div class="my-4">{{ randomJoke }}</div>

    <div class="flex justify-end">
      <button class="btn" @click="getRandomJoke">Wanna hear another?</button>
    </div>
  <!-- </div> -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {getRandom} from '@/api';

const randomJoke = ref('');

onMounted(async() => {
  await getRandomJoke()
});

async function getRandomJoke() {
  const data = await getRandom();
  
  if(!data) {
    randomJoke.value = "Something went wrong.."
  }
  randomJoke.value = data.joke
}

</script>

<style lang="scss" scoped>

</style>