<template>
  <auth-login @submit="login" />
</template>

<script>
export default {
  layout: 'auth',
  methods: {
    login(payload) {
      this.$store.dispatch('auth/logIn', payload)
    },
  },
}
</script>
