<template>
  <div class="flex flex-col">
    <Alert v-if="show" :text="alertText" :show="show" @close="show = false"/>

    <h2>{{ joke }}</h2>
    <div class="flex justify-center gap-4 pt-4">
      <button @click="getJokeAsText(joke)">Copy Joke</button>
      <button>Send Joke</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getOne } from '@/api';
import { usecachedJokesStore } from '@/stores/cachedJokes';
import Alert from '@/components/alerts/Alert.vue';

const cachedJokesStore = usecachedJokesStore();
const route = useRoute();
const joke = ref();
const alertText = ref();
const show = ref(false);

onMounted(async () => {
  await getJoke(route.params.id);
})

async function getJoke(id) {
  const data = await getOne(id);
  
  if (!data) {
    joke.value = "Something went wrong.."
  }
  joke.value = data.joke
  
  // add joke to cache
  if(!cachedJokesStore.jokes.includes(data)) {
    cachedJokesStore.storeJoke(data);
  }
}

async function getJokeAsText(joke) {
  console.log('joke as text', joke);

  if (joke) {
    navigator.clipboard.writeText(joke)
    alertText.value = `Joke copied to clipboard!`;
    show.value = true;
  }
}

</script>

<style lang="scss" scoped></style>