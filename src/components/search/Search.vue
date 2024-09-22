<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    <div class="fixed bottom-20 inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
        <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="w-full mt-3 text-center sm:mt-0 sm:text-left">
                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Search for terms</h3>
                <div class="mt-2">
                  <input type="text" class="w-full" placeholder="Enter text here...">
                </div>
                <div class="px-4 pt-4 text-left font-medium">Jokes</div>
                <div class="mt-2 max-h-36 overflow-y-auto">
                  <ul class="bg-almost-light rounded-lg">
                      <li v-for="j in jokes" :key="j.id" class="border-y py-2 ">
                        <span class="inline-block whitespace-nowrap overflow-hidden text-ellipsis max-w-full px-4">{{ j.joke }}</span>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button type="button"
              class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="ToggleModalOpen">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, watch} from 'vue';
import { useSearchStore } from '@/stores/search';
import { getAll } from '@/api';

const jokes = ref([]);
const searchStore = useSearchStore();
console.log('modal open', searchStore.modal_open)

onMounted(async() => {
  await getJokes();
})

async function getJokes() {
  const data = await getAll();

  if(!data) {
    jokes.value = []
  }
  jokes.value = data.results
  console.log('all jokes', jokes.value)
}

function ToggleModalOpen() {
  searchStore.toggleModalOpen();
}


</script>

<style lang="scss" scoped></style>