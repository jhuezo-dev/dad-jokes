<!-- https://tailwindui.com/components/application-ui/overlays/modal-dialogs -->
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
        <div class="modal_card sm:my-8 sm:w-full sm:max-w-lg">
          <div class="modal_inner px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="w-full mt-3 text-center sm:mt-0 sm:text-left">
                <h3 class="text-left leading-6 font-medium" id="modal-title">Search for terms</h3>
                <div class="mt-2">
                  <input type="text" class="w-full" placeholder="Enter text here..." @change="onTermSearch">
                </div>
                <h4 class="font-medium pt-4 text-left">Jokes</h4>
                <div class="mt-2 max-h-40 md:max-h-64 lg:max-h-64 xl:max-h-96 overflow-y-auto rounded-t-lg">
                  <div v-if="jokes.length > 0">
                    <ul class="bg-almost-light rounded-t-lg">
                      <li v-for="j in jokes" :key="j.id" class="border-y py-2 ">
                        <div class="flex w-full gap-4">
                          <span class="inline-block whitespace-nowrap overflow-hidden text-ellipsis pl-4 mr-auto">{{ j.joke
                            }}</span>
                          <router-link :to="`/jokes/${j.id}`" @click="ToggleModalOpen()">
                            <span class="inline-block whitespace-nowrap pr-4">View Full</span>
                          </router-link>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div v-else>
                    <span>We didn't find any jokes that match, try another search!</span>
                  </div>
                </div>
                <Pagination v-if="pageData && jokes.length > 0" 
                  :maxButtons="3" 
                  :totalPages="pageData.total_pages" 
                  :perPage="pagelimit" 
                  :currentPage="currPage"
                  @pageUpdate="onPageUpdate"
                  @limitUpdate="onLimitUpdate"
                />

              </div>
            </div>
          </div>
          <div class="modal_footer flex px-4 py-3 sm:px-6">
            <button class="ml-auto" @click="ToggleModalOpen">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useSearchStore } from '@/stores/search';
import { getAll, getTerm } from '@/api';
import Pagination from './Pagination.vue';

const jokes = ref([]);
const searchStore = useSearchStore();
const pageData = ref();
const currPage = ref(1);
const pagelimit = ref(20);

onMounted(async () => {
  await getJokes();
})

async function getJokes() {
  const data = await getAll();
  if (!data) {
    jokes.value = [];
  }
  pageData.value = data;
  console.log('data', pageData.value)
  jokes.value = data.results
}

async function onPageUpdate(page) {  
  const data = await getAll(page);
  if(!data) console.log('error in updating page number');
  updateData(data);
}

async function onLimitUpdate(limit) { 
  const data = await getAll(currPage.value, limit);
  if(!data) console.log('error in updating limit');
  updateData(data);
}

async function onTermSearch(term) {
  const data = await getTerm(term.target.value);
  if(!data) console.log('error searching term');
  updateData(data);
}

function updateData(data) {
  pageData.value = data;
  pagelimit.value = data.limit;
  currPage.value = data.current_page;
  jokes.value = data.results;
}

function ToggleModalOpen() {
  searchStore.toggleModalOpen();
}
</script>

<style lang="scss" scoped>
.modal_card {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: var(--colors-almostlight);
  text-align: left;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.dark .modal_card {
  background: var(--colors-dark);
  color: var(--colors-almostlight);
}

.modal_inner {
  background: var(--colors-light);
}

.dark .modal_inner {
  background: var(--colors-dark);
}

.modal_footer {
  background: var(--colors-lightergray);
}

.dark .modal_footer {
  background: var(--navbar-dark-bg);
}
</style>