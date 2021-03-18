<template>
  <div id="app">
    <Bankcard/>
  </div>
</template>

<script>
import Bankcard from './pages/Bankcard'

export default {
  name: 'App',
  components: {
    Bankcard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:10px auto 10px;
  width: 80%;

}
</style>
