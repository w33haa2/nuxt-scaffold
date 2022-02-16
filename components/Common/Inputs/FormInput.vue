<template>
  <input
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    v-bind="$attrs"
    :value="value"
    v-on="inputListeners"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
  },
  computed: {
    inputListeners() {
      /*
       * Simplified native input workaround for auto
       * binding issue for Vue (sauce: https://github.com/vuejs/vue/issues/7914#issuecomment-381500346)
       */
      return {
        ...this.$listeners,
        input: (e) => this.$emit('input', e.target.value),
      }
    },
  },
}
</script>
