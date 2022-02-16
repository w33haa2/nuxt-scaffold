<template>
  <div class="mb-1 mt-1">
    <h1 class="text-2xl font-bold">{{ title }}</h1>
    <small class="text-sm">{{ description }}</small>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>
