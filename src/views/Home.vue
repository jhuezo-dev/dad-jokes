<template>
  <div class="flex flex-col">
    <h1 class="justify-start font-medium">Wanna hear a funny joke?</h1>
    <div class="text-xl my-6">{{ randomJoke.joke }}</div>

    <div class="flex justify-end">
      <button class="btn" @click="getRandomJoke">Wanna hear another?</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {getRandom} from '@/api';
import { usecachedJokesStore } from '@/stores/cachedJokes';

const cachedJokesStore = usecachedJokesStore();
const randomJoke = ref('');

onMounted(async() => {
  await getRandomJoke()
});

async function getRandomJoke() {
  const data = await getRandom();
  
  if(!data) {
    randomJoke.value = "Something went wrong.."
  }
  randomJoke.value = data
  saveJoke(randomJoke.value)
}

async function saveJoke(j) {
  if(!cachedJokesStore.jokes.includes(j)) {
    cachedJokesStore.storeJoke(j)
  }
}
</script>

<style lang="scss" scoped>
.text-wrapper {
  padding-top: 10%;
}
</style>