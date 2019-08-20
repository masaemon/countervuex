<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import 'bulma/css/bulma.min.css'

  export default {
    components: {
      Header: Header
    }
  }
</script>
