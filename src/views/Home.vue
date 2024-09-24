<template>
  <div class="flex flex-col justify-center">
    <div class="flex flex-col md:max-w-lg lg:max-w-xl xl:max-w-3xl mx-auto">
      <h1 class="mr-auto font-medium">Wanna hear a funny joke?</h1>
      <div class="mr-auto text-xl my-6">{{ randomJoke.joke }}</div>
  
      <div class="ml-auto">
        <button class="button" @click="getRandomJoke">Wanna hear another?</button>
      </div>
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
  await saveJoke(randomJoke.value)
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