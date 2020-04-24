<template>
    <div>
        <div id="subthread-input">
            <input id = "title" type="text" placeholder="Thread title...">
        </div>
        <textarea id = "message" v-model="message" type = "text" placeholder="Write a comment..."></textarea>
        <button v-on:click="postSubthread">Publish</button> 
    </div>
</template>

<script>
import database from '../../firebase.js';
export default {
    props: {
        data: Object,
        mod_id: String,
    },
    data() {
        return {
            user_name: ""
        }
    },
    methods: {
        postSubthread: function() {
            database.collection("Subthreads").add({
                created_at: new Date(),
                comments: 0,
                module: this.mod_id,
                mod_title: this.data.mod_name,
                message: document.getElementById("message").value,
                title: document.getElementById("title").value,
                user_id: this.$route.params.user_id,
                name: this.user_name,
                upvoters_id: [],
                downvoters_id: [],
                upvotes: 0,
                downvotes: 0,
                subscribers: [],
            }).then(function(docRef) {
                console.log("Subthread posted with ID: ", docRef.id);
            }).catch(function(error) {
                console.error("Error posting subthread: ", error);
            });
            setTimeout(window.location = "/summary/"+this.mod_id+"/"+this.$route.params.user_id, 3000);
        },
        fetchUserName: async function() {
            database.collection("Users")
            .doc(this.$route.params.user_id)
            .get()
            .then(doc => {
                this.user_name = doc.data().name
            })
        }
    },
    async created() {
        await this.fetchUserName()
    }
}
</script>

<style scoped>
#subthread-input {
    display: flex;
    justify-content: space-around;
    margin: 229px auto;
    width: 80%;
}

#subthread-input h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
}
 
input[type=text] {
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 46px;
  width: 100%;
  margin-top: 50px;;
}

textarea {
    display:flex;
    justify-content: space-around;
    margin: -180px auto;
    width: 80%;
    height: 449px;
    box-sizing: border-box;
    border: 4px solid #BA9977;
    border-radius: 20px;
    resize: none;
    outline: none;
    font-size:20px;
    font-family: Poppins;
    padding: 10px 20px 0 20px;
}

button {
    display:flex;
    justify-content: space-around;
    margin: 250px auto;
    width: 287px;
    height: 50px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    background: #BA9977;
    border-radius: 5px;
    font-size: 24px;
    line-height: 36px;
    color: #FFF;
    border: none;
    cursor: pointer;
    outline:none;
}

button:active {
  background: #e5e5e5;
  -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
  -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
  box-shadow: inset 0px 0px 5px #c1c1c1;
  outline: none;
}

button:hover {
    transform: scale(1.1);
}

</style>
