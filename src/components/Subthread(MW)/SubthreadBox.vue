<template>
    <div id="comment">
        <div class="comment-box">
            <button class ="posted-by">Posted by: {{name}}</button>
            <button v-on:click="subscribeSubthread" class ="posted-by">Subscribe</button>
            <box-header v-bind:header=title></box-header>
            <p>{{message}}</p>
            <div class = 'comment' style = "float:right">
                <router-link :to="{name: 'subthreadpage', params: {subthread_id:id} }" class='comments'>{{this.data.comments}} Comments</router-link>
                <vote 
                v-bind:style='voteStyle'
                v-bind:user_id="user_id"
                v-bind:id="id"
                v-bind:data="data"
                v-bind:type=type>
                </vote>
            </div>
        </div>
    </div>
</template>

<script>
import database from '../../firebase.js'
import firebase from 'firebase'
import 'firebase/firestore'
import BoxHeader from '../Rating(MW)/BoxHeader.vue'
import Vote from '../Comment(MW)/Vote.vue'
export default {
    props: {
        id : String,
        message : String,
        user_id : String,
        title : String,
        name: String,
        data : Object
    },
    data() {
        return {
            voteStyle: {
                float: 'left',
                'padding-right': '50px',
            },
            commentStyle: {
                'text-align': 'center'
            },
            type: "Subthreads"
        }
    },
    components: {
        'box-header': BoxHeader,
        'vote': Vote,
    },
    methods: {
        subscribeSubthread: function() {
            var db = database.collection("Subthreads").doc(this.user_id)
            if (this.data.subscribers.includes(this.user_id) == true) {
                alert("You have unsubscribed to this subthread.")
                db.update({subscribers: firebase.firestore.FieldValue.arrayRemove(this.user_id)})
            } else {
                alert("You have subscribed to this subthread.")
                db.update({subscribers: firebase.firestore.FieldValue.arrayUnion(this.user_id)})
            }
            setTimeout(location.reload.bind(location), 400);
        }
    },
}
</script>

<style scoped>
#comment .comment-box {
    background: #E5E5E5;
    border-radius: 5px;
    height: auto;
    width: 100%;
    margin-bottom:0px;
    padding: 0.5px 12px 0px 12px;
    margin: 0 auto;
    overflow: auto;
    border: 2px solid black;
}

#comment p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
    position: relative;
}

.comments {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 39px;
    text-decoration-line: underline;
    color: black;
}

.posted-by {
    background: #C9B8A7;
    border-radius: 5px;
    padding: 8px 8px 8px 8px;
    width: auto;
    height: auto;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: #FFFFFF;
    float:right;
    margin: 10px 5px 0px 10px;
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
