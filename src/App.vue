<template>
  <div id="app">
    <router-view></router-view>
    <Index/>
  </div>
</template>

<script>
import Index from './components/Index'
export default {
  name: 'App',
  components:{
    Index
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  background: linear-gradient(skyblue,#fff) no-repeat;
}
</style>
