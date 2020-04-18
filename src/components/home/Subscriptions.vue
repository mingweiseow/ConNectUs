<template>
  <div class = 'index container'>
      <h2 class = 'black-text'>{{ module }}</h2>
    </div>
  



  
</template>

<script>
import db from '../../firebase.js'

export default {
  data() {
    return {
      module: "",
    };
  },
  methods: {
    fetchItems: function () {
      db.collection("Users")
      .get()
      .then((querySnapshot) => {
        let user = []
        querySnapshot.forEach((doc) => {
          user.push(doc.data());
          this.module = user[0].modules;
        });
      })
      .catch((err) => {
        console.log("error gerring doc", err);
      });
    },
  },
created() {
    this.fetchItems();
  },
};
</script>
<style lang="stylus" >

.buttons{
  color: black;
  font-size: 15px;
  
}
.title {
  font-size 36px
  font-family "Poppins"
  font-weight normal !important
  color:#BA9977
  background rgba(196, 196, 196, 0.2)
  width 100%
  height 160px
  left 266px
  top 130px


}
  
</style>