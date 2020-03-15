<template>
  <div id="app">
    <Header></Header>
    <router-view/>
<!--     <LandingPage></LandingPage> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import LandingPage from './components/LandingPage.vue'
// import SignIn from './components/SignIn.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  //   LandingPage,
  //   SignIn
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
}
</style>
