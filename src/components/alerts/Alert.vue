<template>
  <div role="alert" class="alert">
    {{ text }} 
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
      <svg class="fill-current h-6 w-6 text-almost-light" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" @click="closeAlert()">
        <title>Close</title>
        <path
          d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
      </svg>
    </span>
  </div>
</template>

<script setup>

const emit = defineEmits(['close'])
const props = defineProps({
  text: {
    type: String,
    default: 'A simple filled alert for showing message.'
  },
  show: {
    type: Boolean,
    default: true
  }
})

function closeAlert() {
  emit('close');
}

</script>

<style lang="scss" scoped></style>