<template>
    <div>
        <div id="rating">
            <div class="rating-row">
                <h1>Difficulty: {{difficulty}}</h1>
                <star-rating v-model="difficulty"
                v-bind:increment="0.5"
                v-bind:show-rating="false"
                v-bind:rounded-corners="true"
                v-bind:star-size="25"
                v-bind:padding="1"
                active-color = "#BA9977" 
                v-bind:border-width = "6" 
                border-color = "#BA9977"
                inactive-color = "#FFF"></star-rating>
            </div>
            <div class="rating-row">
                <h1>Effort: {{effort}}</h1>
                <star-rating v-model="effort"
                v-bind:show-rating="false"
                v-bind:rounded-corners="true"
                v-bind:star-size="25"
                v-bind:padding="1"
                active-color = "#BA9977" 
                v-bind:border-width = "6" 
                border-color = "#BA9977"
                inactive-color = "#FFF"></star-rating>
            </div>
            <div class="rating-row">
                <h1>Overall: {{overall}}</h1>
                <star-rating v-model="overall"
                v-bind:show-rating="false"
                v-bind:rounded-corners="true"
                v-bind:star-size="25"
                v-bind:padding="1"
                active-color = "#BA9977" 
                v-bind:border-width = "6" 
                border-color = "#BA9977"
                inactive-color = "#FFF"></star-rating>
            </div>
        </div>
        <textarea id="message" type = "text" placeholder="Write a comment"></textarea>
        <button v-on:click="postReview">Publish</button>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'
import database from '../../firebase.js';
import firebase from 'firebase'
import 'firebase/firestore'
export default {
    props: {
        data : Object,
        mod_id: String,
    },
    data() {
        return {
            difficulty: 0,
            effort: 0,
            overall: 0,
            }
    },
    components: {
        'star-rating': StarRating,
    },
    methods: {
        postReview: function() {
            database.collection("Reviews").add({
                created_at: new Date(),
                comments: 0,
                module: this.mod_id,
                mod_title: this.data.mod_name,
                message: document.getElementById("message").value,
                user_id: "CYQhtjvEUxqAptFwsckJ",
                name: "mingwei",
                upvoters_id: [],
                downvoters_id: [],
                upvotes: 0,
                downvotes: 0,
            }).then(function(docRef) {
                console.log("Review posted with ID: ", docRef.id);
            }).catch(function(error) {
                console.error("Error posting review: ", error);
            });
            // increment num reviews
            database.collection("Modules")
            .doc(this.mod_id)
            .update({num_reviews: firebase.firestore.FieldValue.increment(+1)})
            // update difficulty, effort, overall
            database.collection("Modules")
            .doc(this.mod_id)
            .update({difficulty: firebase.firestore.FieldValue.increment(this.difficulty)})
            database.collection("Modules")
            .doc(this.mod_id)
            .update({effort: firebase.firestore.FieldValue.increment(this.effort)})
            database.collection("Modules")
            .doc(this.mod_id)
            .update({overall: firebase.firestore.FieldValue.increment(this.overall)})
            //setTimeout(window.location = "/summary", 1000);
        }
    },
}
</script>

<style scoped>
#rating {
    display: flex;
    justify-content: space-around;
    margin: 229px auto;
    width: 80%;
}

#rating h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
}

#rating .rating-row {
    text-align: center;
}

#rating .module-name {
    position: absolute;
    width: 300px;
    height: 54px;
    left: 46px;
    top: 124px;
}
 
textarea {
    display:flex;
    justify-content: space-around;
    margin: -150px auto;
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
    margin: 200px auto;
    width: 257px;
    height: 50px;
    font-family: "Poppins";
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
