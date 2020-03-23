<template>
  <div id="app"> 
    <!--<h1> conNectUs </h1> -->
    <app-header v-bind:title="msg"></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
//Registering components Locally
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
//import PageContent from './components/PageContent.vue'

export default {
  name: 'App',
  data(){
    return {
          }
  },
  components: {
    'app-header':Header,
    'app-footer':Footer,
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
h1 {
  position: absolute;
  width: 259px;
  height: 72px;
  left: 32px;
  top: 9px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 72px;
  color: #000000;
}
</style>
