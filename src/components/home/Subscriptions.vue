<template>

<div class="profile-page">


    <div class="wrapper">
        

<div id = 'your_posts'>
  <div id ="postbox">
    <postBox v-for="mod in moduleList" v-bind:key ="mod.id"
      v-bind:style = 'postStyle'
      v-bind:mod_name = 'mod.mod_name'
      v-bind:mod_id = 'mod.module_id'
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
    };
  },
  methods: {
    fetchReviewsMod: async function() {
                var user = firebase.auth().currentUser;
                var email = user.email;

                return database.collection("Users").get()
                //.where('modules.module', '==',true)
                .then((querySnapShot)=>{
                    //let item = {}
                    //console.log(this.postList)
                    querySnapShot.forEach(doc=> { 
                        if (doc.data().email == email){
                            //item = doc.data()
                            //item["id"] = doc.id
                            //console.log("hello" , item.modules)
                            //this.postList.push(item)
                            this.moduleList = doc.data().modules
                            console.log("Module List", doc.data().modules)
                            //this.moduleList = item.modules.values()
        

                        }
                    })
                })

        },
  },

   components: {
     'postBox': PostBox
  },

  async created() {
    //await this.fetchItems();
    console.log("Here" , this.postList)
    console.log("modules", this.moduleList)
    await this.fetchReviewsMod(); 
    await this.fetchSubthreadsMod();
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
    border: solid black;
}

/*if want to have profile image
.profile-img {
    height: 85px;
    width: 85px;
    margin-top: 50px;
    margin-bottom: 15px;
}*/

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

/*#id{
    background-color: #E5E5E5;
    width: 100%;
    height: 100%;
}


.logout {
width: 100px;
height: 40px;
background: #BA9977;
border-radius: 5px;
position: absolute;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
color: #FFFFFF;
}

.module {
width: 1012px;
height: 771px;
background: rgba(196, 196, 196, 0.1);
}

.more {
cursor: pointer;
width: 93px;
height: 27px;
font-family: 'Poppins';
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
text-decoration-line: underline;
color: #FFFFFF;
}

.a {
position: absolute;
cursor: pointer;
width: 103px;
height: 30px;
left: 385px;
top: 150px;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
text-decoration-line: underline;
color: #000000;
}

.b {
cursor: pointer;
position: absolute;
width: 121px;
height: 30px;
left: 543px;
top: 150px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
text-decoration-line: underline;
color: #000000;
}

.c{
position: absolute;
width: 971px;
height: 82px;
left: 405px;
top: 217px;
background: #C9B8A7;
}

.d {
position: absolute;
width: 255px;
height: 54px;
left: 438px;
top: 231px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 54px;
color: #FFFFFF;
}


.usr {
position: absolute;
width: 199px;
height: 30px;
left: 185px;
top: 428px;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
color: #000000;
}

.yos {
position: absolute;
width: 153px;
height: 30px;
left: 210px;
top: 477px;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
color: #000000;

}

.posts{
position: absolute;
width: 87px;
height: 30px;
left: 235px;
top: 526px;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
color: #000000;
}

.subs {
position: absolute;
width: 151px;
height: 30px;
left: 205px;
top: 575px;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
color: #000000;

}

.vertical { 
position: absolute;
width: 844px;
height: 0px;
left: 330px;
top: 650px;
border: 2px solid #E8E8E8;
transform: rotate(-90deg);
}*/
</style>