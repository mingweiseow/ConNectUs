<template>

<div class="profile-page">
    <div class="wrapper">     
      <div id = 'your_posts'>
        <div id ="postbox">
          <postBox v-for="mod in moduleList" v-bind:key ="mod.id"
            v-bind:style = 'postStyle'
            v-bind:mod_name = 'mod.mod_name'
            v-bind:mod_id = 'mod.module_id'
            v-bind:user_id=user_id
            ></postBox>
            </div>
          </div>
      </div>
    </div>
</template>


<script>
import database from '../../firebase.js';
import PostBox from './PostBox.vue';
import firebase from 'firebase';

export default {
  data() {
    return {
      postStyle: {
        height: "auto"
            },
      postList: [],
      moduleList: [],
      user_id: "",
    };
  },
  methods: {
    fetchReviewsMod: async function() {
        var user = firebase.auth().currentUser;
        var email = user.email;
        return database.collection("Users").get()
        .then((querySnapShot)=>{
            querySnapShot.forEach(doc=> { 
                if (doc.data().email == email){
                    this.moduleList = doc.data().modules
                }
            })
        })
    },
    fetchUserId: async function() {
      var user = firebase.auth().currentUser;
      var email = user.email;
      database.collection("Users").where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(doc => {
            this.user_id = doc.id
      })
    })
    }
  },
   components: {
     'postBox': PostBox
  },

  async created() {
    await this.fetchUserId();
    await this.fetchReviewsMod();
    console.log(this.user_id)
  },
}
</script>


<style scoped>
.toggle {
    text-align: right;
    padding-right: 80px;
}

.toggle a {
    margin: 20px;
}

.saved {
    cursor: pointer;
    font-size: 18px;
    line-height: 30px;
    text-decoration-line: underline;
}

.wrapper {
    display: grid;
    font-family: Poppins, Arial, serif;
    text-align: center;
    padding: 10px;
    margin-top: 30px;
}

h4 {
    font-size: 18px;
    margin: 10px;
}

.profile-content {
    margin-left: auto;
    margin-right: auto;
    margin-top: 35px;
    height: 550px;
    overflow: scroll;
    padding: 10px;
    
}

.post span {
    font-size: 18px;
    margin: 10px;
    padding: 5px;
    color: #FFFFFF;
    float: left;
}

#view-post-btn {
    font-size: 12px;
    height: 35px;
    width: 60px;
    background-color: #e2c0bb;
    text-align: centre;
    vertical-align: middle;
    padding-top: 6px;
    border-radius: 4px; 
    margin: 10px;
    color: white;
}

#view-post-btn {
  font-size: 15px;
  height: 40px;
  width: 100px;
  text-align: centre;
  background-color: #C9B8A7; 
  border: solid white;
  margin: 10px;
}

#signout-btn {
  font-size: 15px;
  height: 40px;
  width: 100px;
  text-align: center;
  background-color: #BA9977; 
  border: solid white;
  margin: 10px;
}

button:active {
  -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
  -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
  box-shadow: inset 0px 0px 5px #c1c1c1;
  outline: none;
}

button:hover {
    transform: scale(1.1);
}
</style>