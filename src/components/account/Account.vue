<template>

<div class="profile-page">

    <div class="toggle">
        <a class="posts">Your Posts</a>
        <router-link to="/saved" exact><a class="saved">Saved Posts</a></router-link>
    </div>
    <div class="wrapper">
        <div class="profile-info">
            <h4 class="profile-display">Email: {{email}}</h4>
            <h4 class="profile-display">Username: {{un}}</h4>
            <h4 class="profile-display">Year of Study: {{yos}}</h4>
            <h4 class="profile-display">No. of Posts: {{nop}}</h4>
            <h4 class="profile-display">Subscribers: {{subs}}</h4>
            <router-link to="/other" tag="button" button id="signout-btn" class="btn btn-primary btn-sm">Sign Out</router-link>
        </div>
    <div id = 'your_posts'>
      <div id ="postbox">
        <postBox v-for="item in postList" v-bind:key ="item.id"
          v-bind:style = 'postStyle'
          v-bind:comment = 'item.mod_title'
          v-bind:title = "item.title"
          v-bind:user_id = "item.user_id"
          v-bind:subthread_id="item.id"
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
      email: "",
      nop: "",
      yos: "",
      un :'',
      subs:  '',
      postList: [],
      comment: '',
      user_id: "",
    };
  },
  methods: {
    fetchItems: function () {
      database
        .collection("Users")
        .get()
        .then((querySnapshot) => {
          let user = [];
          querySnapshot.forEach((doc) => {
            //console.log(doc);
            if (doc.id == this.user_id){
            user.push(doc.data());
            this.email = user[0].email;
            this.un = user[0].name;
            this.yos = user[0].year_of_study;
            this.nop = user[0].num_post;
            this.subs = user[0].subs;
            }
          });
        })
        .catch((err) => {
          console.log("Error getting documents", err);
        });
    },
    
    fetchReviewsMod: async function() {
                return database.collection("Subthreads").get().then((querySnapShot)=>{
                    let item = {}
                    querySnapShot.forEach(doc=> { 
                        if (doc.data().user_id == this.user_id){
                            item = doc.data()
                            item["id"] = doc.id
                            console.log(item.mod_title)
                            this.postList.push(item)
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
    await this.fetchItems();
    await this.fetchReviewsMod(); 
    console.log(this.user_id)
  },
};
</script>


<style scoped>
.toggle {
    text-align: right;
    padding-right: 80px;
}

.toggle a {
    margin: 20px;
}

.posts {
    cursor: pointer;
    font-size: 18px;
    line-height: 30px;
    text-decoration-line: underline;
}

.saved {
    cursor: pointer;
    font-size: 18px;
    line-height: 30px;
    text-decoration-line: underline;
}

.wrapper {
    display: grid;
    grid-template-columns: 30% 70%;
    font-family: Poppins, Arial, serif;
    text-align: center;
    padding: 10px;
    margin-top: 30px;
}

.profile-info {
    background-color: #f5f5f5;
    height: 550px;
    width: 250px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 35px;
    text-align: center;
    padding-top: 175px;
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

.post {
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
    padding-left: 5px;
    padding-right: 5px;
    background: #C9B8A7;
    margin-bottom: 35px;
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