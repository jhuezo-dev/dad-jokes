<!-- <a target="_blank" href="https://icons8.com/icon/6Fsj3rv2DCmG/twitterx">TwitterX</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> -->
<template>
  <div class="flex flex-col">
    <div class="flex flex-col">
      <Alert v-if="show" :text="alertText" :show="show" @close="show = false" />

      <div class="text-xl my-6">{{ joke }}</div>
      <div class="flex justify-left md:flex-wrap lg:flex-wrap xl:flex-wrap sm:justify-end md:justify-end lg:justify-end xl:justify-end gap-1 md:gap-3 lg:gap-3 xl:gap-3 pt-4">
        <a target="_blank" :href="`https://x.com/intent/tweet?url=${baseUrl}/${route.params.id}/amp&text=Check+out+this+#dadjoke&via=icanhazdadjoke`" >
          <button class="flex px-2 md:px-4 lg:px-4 xl:px-4">
            <span class="pr-1 text-almost-light">Share on</span>
            <img src="../assets/twitter-icon.avif" alt="X app logo" width="20" height="20">
          </button>
        </a>
        <a target="_blank" :href="`${baseUrl}/${route.params.id}`"><button class="px-2 md:px-4 lg:px-4 xl:px-4">Permalink</button></a>
        <router-link class="text-almost-light" :to="'/'"><button class="px-2 md:px-4 lg:px-4 xl:px-4">Random</button></router-link>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getOne } from "@/api";
import { usecachedJokesStore } from "@/stores/cachedJokes";

const cachedJokesStore = usecachedJokesStore();
const route = useRoute();
const joke = ref();
const alertText = ref();
const show = ref(false);
const baseUrl = ref('https://icanhazdadjoke.com/j');

onMounted(async () => {
  await getJoke(route.params.id);
});

async function getJoke(id) {
  const data = await getOne(id);

  if (!data) {
    joke.value = "Something went wrong..";
  }
  joke.value = data.joke;

  // add joke to cache
  if (!cachedJokesStore.jokes.includes(data)) {
    cachedJokesStore.storeJoke(data);
  }
}

</script>

<style lang="scss" scoped></style>
