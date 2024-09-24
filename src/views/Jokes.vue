<template>
  <div class="flex flex-col">
    <div v-if="jokes.length > 0">
      <h1 class="justify-start font-medium">Enjoy these again</h1>
      <div class="text-xl my-6">View a random joke <router-link to="/">here</router-link></div>
      <div class="text-xl my-6" v-for="j of cachedJokesStore.jokes" :key="j.id">
        <router-link :to="`/jokes/${j.id}`">
          {{ j.joke }}
        </router-link>
      </div>
    </div>
    <div class="justify-start font-medium" v-else>
      <h1>Search up some jokes then you'll see them here!</h1>
      <div class="text-xl my-6">View a random joke <router-link to="/">here</router-link></div>
    </div>
  </div>
</template>

<script setup>
import { usecachedJokesStore } from '@/stores/cachedJokes';
import { ref, onMounted } from 'vue';

const cachedJokesStore = usecachedJokesStore();
const jokes = ref([]);

onMounted(() => {
  cachedJokesStore.loadJokes();
  jokes.value = cachedJokesStore.jokes;
})

</script>

<style lang="scss" scoped>

</style>