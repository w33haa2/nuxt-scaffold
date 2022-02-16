<template>
  <div>
    <label
      :for="labelFor"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >{{ label }}</label
    >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    labelFor: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
}
</script>
