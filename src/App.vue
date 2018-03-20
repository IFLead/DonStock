<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted () {
      this.$store.dispatch('checkAuthenticated')
      if (this.$store.getters.isAuthenticated) {
        this.$store.dispatch('loadCredentials')
      }
      this.$store.dispatch('loadCategories')
    }
  }
</script>

<style lang="sass">


  html, body, #app
    height: 100%

    body
      margin: 0
      font-family: 'Roboto', Helvetica, Arial, sans-serif
      font-weight: 500
      height: 100%

      #app
        -webkit-font-smoothing: antialiased
        -moz-osx-font-smoothing: grayscale
        color: #2c3e50


</style>
