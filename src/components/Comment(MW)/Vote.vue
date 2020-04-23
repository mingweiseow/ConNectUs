<template>
    <div>
        <div class='vote-box'>
            <div id='up-vote' style="margin-right: 5px" @click= upVote()></div>
            <p style='margin-left: 5px;'>{{counterUp}}</p>
        </div>
        <div class='vote-box'>
            <div id='down-vote' style="margin-left: 10px" @click= downVote()></div>
            <p>{{counterDown}}</p> 
        </div>
    </div>
</template>

<script>
import database from '../../firebase.js'
import firebase from 'firebase'
import 'firebase/firestore'

export default {
    props: {
        id : String,
        user_id : String,
        data: Object,
        type: String
    },
    data() {
        return {
            counterUp: this.data.upvotes,
            counterDown: this.data.downvotes,
        }
    },
    methods: {
        upVote: function() {
            var db = database.collection(this.type).doc(this.id)
            if (this.data.upvoters_id.includes(this.data.user_id) == false) { 
                if (this.data.downvoters_id.includes(this.data.user_id) == false) {
                    db.update({upvotes: this.counterUp+++1})
                    db.update({upvoters_id: firebase.firestore.FieldValue.arrayUnion(this.data.user_id)})
                } else if (this.data.downvoters_id.includes(this.data.user_id) == true) {
                    db.update({downvoters_id: firebase.firestore.FieldValue.arrayRemove(this.data.user_id)})
                    db.update({upvoters_id: firebase.firestore.FieldValue.arrayUnion(this.data.user_id)})
                    db.update({upvotes: this.counterUp+++1})
                    db.update({downvotes: this.counterDown---1})
                }
            } else if (this.data.upvoters_id.includes(this.data.user_id) == true) { 
                db.update({upvoters_id: firebase.firestore.FieldValue.arrayRemove(this.data.user_id)})
                db.update({upvotes: this.counterUp---1})
            }
            setTimeout(location.reload.bind(location), 600);
        },
        downVote: function() {
            var db = database.collection(this.type).doc(this.id)
            if (this.data.downvoters_id.includes(this.data.user_id) == false) { 
                if (this.data.upvoters_id.includes(this.data.user_id) == false) {
                    db.update({downvotes: this.counterDown+++1})
                    db.update({downvoters_id: firebase.firestore.FieldValue.arrayUnion(this.data.user_id)})
                } else if (this.data.upvoters_id.includes(this.data.user_id) == true) {
                    db.update({upvoters_id: firebase.firestore.FieldValue.arrayRemove(this.data.user_id)})
                    db.update({downvoters_id: firebase.firestore.FieldValue.arrayUnion(this.data.user_id)})
                    db.update({upvotes: this.counterUp---1})
                    db.update({downvotes: this.counterDown+++1})
                }
            } else if (this.data.downvoters_id.includes(this.data.user_id) == true) {
                db.update({downvoters_id: firebase.firestore.FieldValue.arrayRemove(this.data.user_id)})
                db.update({downvotes: this.counterDown---1})
            }
            setTimeout(location.reload.bind(location), 600);
        },
        updateVote: function() {
            database.collection(this.type).
            doc(this.id).
            get().
            then(doc => {
                this.counterUp = doc.data().upvotes
                this.counterDown = doc.data().downvotes
            })
        }
        /*toggleShapeColour: function() {
            if (this.data.upvoters_id.includes(this.data.user_id)) {
                document.getElementById("up-vote").style.borderColor = "transparent transparent #f5e2d0 transparent"
            } else if (this.data.downvoters_id.includes(this.data.user_id)) {
                document.getElementById("down-vote").style.borderColor = "#f5e2d0 transparent transparent transparent"
            }
        }*/
    },
    created(){
        //this.toggleShapeColour()
        this.updateVote()
    }
}
</script>

<style scoped>
p {
    display: inline-block;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
}

.vote-box {
    display: inline-block;
}


#up-vote {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0px 25px 40px 25px;
    border-color: transparent transparent #BA9977 transparent;
    display: inline-block;
}

#down-vote {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 40px 25px 0 25px;
    border-color: #BA9977 transparent transparent transparent;
    display: inline-block;
}

.up-vote:hover {
    cursor: pointer;
    transform: scale(1.2);
}

.down-vote:hover {
    cursor: pointer;
    transform: scale(1.2);
}
</style>
