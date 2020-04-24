<template>
    <div id = "comment-group">
        <div class = "group">
            <profile-pic v-bind:style="PicStyle"></profile-pic>
            <input id="comment-line" type="text" placeholder="Add a comment...">
        </div>
    <br>
    <button v-on:click="postComment">Post</button>
    <br><br><br><br><br><br>
    </div>
</template>

<script>
import ProfilePicture from './ProfilePicture.vue'
import database from '../../firebase.js';
import firebase from 'firebase'
import 'firebase/firestore'

export default {
    props: {
        data: Object,
        type: String,
        reply_type: String,
        id: String,
        cat: String,
        user_id: String,
    },
    data() {
        return {
            PicStyle: {
                margin: "0px 25px 0px 0px"
            },
            user_name: "",
        }
    },
    components: {
        'profile-pic': ProfilePicture
    },
    methods: {
        postComment: function() {
            database.collection(this.type).add({
                created_at: new Date(),
                mod_name: this.data.mod_title,
                message: document.getElementById("comment-line").value,
                user_id: this.user_id,
                name:this.user_name,
                [this.reply_type]: this.id,
                upvoters_id: [],
                downvoters_id: [],
                upvotes: 0,
                downvotes: 0,
                module: this.data.module
            }).then(function(docRef) {
                console.log("Reply posted with ID: ", docRef.id);
            }).catch(function(error) {
                console.error("Error posting reply: ", error);
            });
            database.collection(this.cat)
            .doc(this.id)
            .update({comments: firebase.firestore.FieldValue.increment(+1)})

            setTimeout(location.reload.bind(location), 3000);
        },
    },
    fetchUserName: async function() {
        database.collection("Users")
        .doc(this.$route.params.user_id)
        .get()
        .then(doc => {
            this.user_name = doc.data().name
        })
    },
    async created() {
        await this.fetchUserName()
    }
    
}
</script>

<style scoped>
#comment-group {
    margin-top: 50px;
    text-align: center;
}

.group {
    display: flex;
}

input[type=text] {
    border: none;
    border-bottom: 2px solid black;
    outline: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    width: 100%;
}

::placeholder {
    color: black;
    font-family: 'Poppins';
    font-size: 26px;
}

button {
    float: right;
    width: 301px;
    height: 56px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    background: #BA9977;
    border-radius: 5px;
    font-size: 24px;
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

button:focus {outline:0;}

button:hover {
    transform: scale(1.1);
}
</style>
