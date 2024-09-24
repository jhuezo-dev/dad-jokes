<template>
  <ul class="flex p-4 justify-center md:gap-1 lg:gap-1 xl:gap-1 rounded-b-lg">
    <li>
      <button class="p-2" @click="FirstPageClick()" :disabled="isFirstPage">First</button>
    </li>
    <li>
      <button class="p-2" @click="PrevPageClick()" :disabled="isFirstPage">Prev</button>
    </li>
    
    <li v-for="page in pages" :key="page">
    <button class="p-2" @click="PageClick(page.index)">{{ page.index }}</button>
    </li>
    
    <li>
      <button class="p-2" @click="NextPageClick()" :disabled="isLastPage">Next</button>
    </li>
    <li>
      <button class="p-2" @click="LastPageClick()" :disabled="isLastPage">Last</button>
    </li>
    <select class="p-2 rounded-lg" name="limit" id="limit" @change="PerPageClick($event)">
      <option value="20" selected>20</option>
      <option value="30">30</option>
    </select>
  </ul>
</template>

<script setup>
import {computed} from 'vue';

const startPage = computed(() => {
  if(props.currentPage == 1) {
    return props.currentPage;
  }

  if(props.currentPage == props.totalPages) {
    return props.totalPages - props.maxButtons;
  }

  return props.currentPage - 1;
});

const emit = defineEmits(['pageUpdate', 'limitUpdate']);
const pages = computed(() => {
  let pageNumbers = []

  for(let i = startPage.value; i < Math.min(startPage.value + props.maxButtons - 1, props.totalPages); i++) {
    pageNumbers.push({index: i})
  }
  return pageNumbers
});

const isFirstPage = computed(() => {
  return props.currentPage == 1;
});

const isLastPage = computed(() => {
  return props.currentPage == props.totalPages;
});

const props = defineProps({
  maxButtons: {
    type: Number,
    default: 2
  },
  totalPages: {
    type: Number
  },
  perPage: {
    type: Number
  },
  currentPage: {
    type: Number
  }
})

function FirstPageClick() {
  emit('pageUpdate', 1);
}

function LastPageClick() {
  emit('pageUpdate', props.totalPages);
}

function NextPageClick() {
  emit('pageUpdate', props.currentPage + 1);
}

function PrevPageClick() {
  emit('pageUpdate', props.currentPage - 1);
}

function PageClick(page) {
  emit('pageUpdate', page)
}

function PerPageClick(event) {
  emit('limitUpdate', event.target.value)
}
</script>

<style lang="scss" scoped></style>
