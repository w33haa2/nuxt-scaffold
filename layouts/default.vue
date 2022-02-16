<template>
  <section
    class="antialiased flex justify-center items-center h-screen bg-gray-100"
  >
    <Nuxt />
  </section>
</template>

<script>
export default {
  middleware: 'auth',
}
</script>
