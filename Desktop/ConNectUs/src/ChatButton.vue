<template lang="html">
  <div class="centerx">
    
    <vs-button @click="popupActivo4=true" color="#C9B8A7" type="filled" icon ='chats'>Chats</vs-button>
    <vs-popup fullscreen title="Chat" :active.sync="popupActivo4">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </vs-popup>
  </div>
</template>

<script>
export default {
  data(){
    return {
      popupActivo4:false
    }
  }
}
</script>

<style lang="stylus">
.centerx
    >button
        width 364px
        height 86px
        left 1546px
        top 500px
        font-size 35px
        font-family Poppins


</style>