<template>
  <div id="app">
    <mt-button>测试</mt-button>
  </div>
</template>

<script>
import MtButton from './components/button'
export default {
  name: 'app',
  components: {
    MtButton
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
