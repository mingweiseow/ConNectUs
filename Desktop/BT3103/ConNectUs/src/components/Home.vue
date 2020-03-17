<template lang="html">
  <div class="">
     <vs-tabs>
      <vs-tab label="Featured">
        <div class="con-tab-ejemplo">
        </div>
        <vs-list>
  <vs-list-header title="CS2040" color="#BA9977" class = "post-title" style = "font-family:Poppins"></vs-list-header>
  <vs-list-item  class = 'info' title="Debugging Help" subtitle="posted on 4 Feb 2018 23:40 by user123" style = "font-family:Poppins">
    <vs-avatar />
      <div class="con-example-images">
    <vs-images>
      <vs-image :key="index" :src="`./assets/star.png${index}`" v-for="(image, index) in 9" />
      <vs-image :key="index" :src="`./assets/forum.png${index}${index}`" v-for="(image, index) in 7" />
    </vs-images>
  </div>
  </vs-list-item>
    <vs-list-item  class = 'info' title="Assignment 5" subtitle="posted on 4 Feb 2018 23:40 by user123" style = "font-family:Poppins">
  </vs-list-item>
  <vs-list-header class = "post-title" title="BT2102" color="#BA9977" style = "font-family:Poppins"></vs-list-header>
  <vs-list-item  class = 'info' title="Visualisation Issues" subtitle="posted on 5 Feb 2018 12:30 by user 647" style = "font-family:Poppins">
  </vs-list-item>
</vs-list>
      </vs-tab>
      <vs-tab label="Subscriptions">
        <div class="con-tab-ejemplo">
          Service
        </div>
      </vs-tab>
      <vs-tab label="Saved">
        <div class="con-tab-ejemplo">
          login
        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<style lang="stylus">
.post-title{
  font-size 30px;
  color black;
}

.info{
  font-size 25px;
  color: black;

}
  
</style>