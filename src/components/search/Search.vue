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
                  <input type="text" class="w-full" placeholder="Enter text here...">
                </div>
                <h4 class="font-medium pt-4 text-left">Jokes</h4>
                <div class="mt-2 max-h-36 overflow-y-auto rounded-lg">
                  <ul class="bg-almost-light rounded-lg">
                    <li v-for="j in jokes" :key="j.id" class="border-y py-2 ">
                      <div class="flex w-full gap-4">
                        <span class="inline-block whitespace-nowrap overflow-hidden text-ellipsis pl-4">{{ j.joke
                          }}</span>
                        <router-link :to="`/jokes/${j.id}`" @click="ToggleModalOpen()">
                          <span class="inline-block whitespace-nowrap pr-4 ">View Full</span>
                        </router-link>
                      </div>
                    </li>
                  </ul>
                </div>




                <div v-if="pageData"
                  class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                  <div class="flex flex-1 sm:hidden">
                    <button
                    v-if="pageData.current_page !== pageData.previous_page"
                      class="button mr-auto"
                      :class="`${pageData.current_page === pageData.previous_page ? 'hover:bg-gray-50 focus:z-20 focus:outline-offset-0' : ''}`"
                      :disabled="pageData.current_page === pageData.previous_page">Previous</button>
                    <button v-if="pageData.next_page < pageData.total_pages"
                      class="button ml-auto">Next</button>
                  </div>
                  <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                      <p class="text-sm text-gray-700">
                        Showing
                        <span class="font-medium">{{ pageData.current_page }}</span>
                        to
                        <span class="font-medium">{{ pageData.limit }}</span>
                        of
                        <span class="font-medium">{{ pageData.total_pages }}</span>
                        results
                      </p>
                    </div>
                    <div>
                      <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <button
                        v-if="pageData.current_page !== pageData.previous_page"
                          class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 "
                          :class="`${pageData.current_page === pageData.previous_page ? 'hover:bg-gray-50 focus:z-20 focus:outline-offset-0' : ''}`"
                          :disabled="pageData.current_page === pageData.previous_page">
                          <span class="sr-only">Previous</span>
                          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                              clip-rule="evenodd" />
                          </svg>
                        </button>
                        <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
                        
                        <div id="pagination_numbers" aria-current="page"
                          class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{ p }}</div>
                        

                        <button
                          class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" v-if="pageData.next_page < pageData.total_pages">
                          <span class="sr-only">Next</span>
                          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                              clip-rule="evenodd" />
                          </svg>
                        </button>
                      </nav>
                    </div>
                  </div>
                </div>









              </div>
            </div>
          </div>
          <div class="modal_footer px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button type="button" class="btn" @click="ToggleModalOpen">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useSearchStore } from '@/stores/search';
import { getAll } from '@/api';


const jokes = ref([]);
const searchStore = useSearchStore();
const pageData = ref();
// console.log('modal open', searchStore.modal_open)

const paginationLimit = ref(20);
const pageCount = ref();
const currPageNumber = ref(1);

const startIndex = computed(() => {
  return currPageNumber.value - 1 * paginationLimit.value
})

const endIndex = computed(() => {
  return startIndex.value + paginationLimit.value
})

const numberOfPages = computed(() => {
  return Math.ceil(jokes.value.length / paginationLimit.value)
})

const paginatedData = computed(() => {
  return jokes.value.slice(startIndex.value, endIndex.value)
})

onMounted(async () => {
  await getJokes();
})

function nextPage() {
  if(currPageNumber.value < numberOfPages.value) {
    currPageNumber.value += 1;
  }
}

function prevPage() {
  if(currPageNumber.value > 1) {
    currPageNumber.value -= 1;
  }
}

async function getJokes() {
  const data = await getAll();
  console.log('dataa', data)
  if (!data) {
    jokes.value = []
  }
  pageData.value = data
  pageCount.value = Math.ceil(pageData.value.limit / paginationLimit.value)

  jokes.value = data.results
  console.log('all jokes', jokes.value)
  console.log('pageData', pageData.value)
  console.log('pageCount', pageCount.value)
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