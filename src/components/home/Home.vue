<template lang="html">
  <div class="">
     <vs-tabs :color= "colorx">
      <vs-tab label="Featured" icon="star">
        <featured></featured>
        <div class="con-tab-ejemplo">
        </div>

      </vs-tab>
      <vs-tab label="Subscriptions" icon="mail">
        <subscriptions></subscriptions>

        <div class="con-tab-ejemplo">
        </div>
      </vs-tab>
      <vs-tab label="Analytics" icon ='face'>
        <div class="con-tab-ejemplo">
          <h1></h1>
          <connectuspie></connectuspie>
          <connectusbar></connectusbar>
        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>

import 'material-icons/iconfont/material-icons.css';
import Subscriptions from './Subscriptions.vue'
import Featured from './Featured.vue'
import ConnectUsPie from './ConnectUsPie.vue'
import ConnectUsBar from './ConnectUsBar.vue'

export default {

  data:()=>({
    colorx:'rgb(201, 184, 167)'
  }),
  components: {
    'subscriptions':Subscriptions,
    'featured':Featured,
    'connectuspie':ConnectUsPie,
    'connectusbar':ConnectUsBar
  }
}
</script>


<style lang="stylus" scoped>

.vs-list--title {
    font-weight: normal;
}
.post-title{
  font-size 36px;
  color white;
  font-weight:100
  background #C9B8A7;
}

.info{
  font-size 25px;
  color: black;
  background rgba(196, 196, 196, 0.2)
  height: 82px;
}
  
</style>