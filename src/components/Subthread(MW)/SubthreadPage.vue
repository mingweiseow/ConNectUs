<template>
    <div id="view">
        <div class = "comment">
            <subthreadBox
            v-bind:style='boxStyle'
            v-bind:message="item.message"
            v-bind:name="item.name"
            v-bind:title="item.title"
            v-bind:id="review_id"
            v-bind:user_id="item.user_id"
            v-bind:data="item"
            ></subthreadBox>
            <br>
            <br>
            <br>
            <div class="comment-header">Comments:</div>
            <comment-line
            v-bind:data="item"
            v-bind:type=type
            v-bind:reply_type=reply_type
            v-bind:id=subthread_id
            v-bind:cat=cat>
            </comment-line>
        </div>
        <div class="comment-section">
            <commentBox v-for="reply in replies" v-bind:key="reply.subthread_id"
            v-bind:style="BoxStyle"
            v-bind:message="reply.message"
            v-bind:name="reply.name"
            v-bind:type="type"
            v-bind:id="reply.id"
            v-bind:data="reply"
            ></commentBox>
        </div>
        <button v-on:click="backButton">Back</button>
    </div>
</template>

<script>
import database from '../../firebase.js'
import subthreadBox from './SubthreadBox.vue'
import commentLine from '../Comment(MW)/CommentLine.vue'
import commentBox from '../Comment(MW)/CommentBox.vue'
export default {
    data() {
        return {
            subthread_id: "",
            item: null,
            boxStyle: {
                height: "auto",
                'border-bottom': "hidden"
            },
            dataFetched: false,
            BoxStyle: {
                margin: 'auto'
            },
            replies: [],
            cat: "Subthreads",
            type:"Replies_Subthreads",
            reply_type: "subthread_id"
        }
    },
    methods: {
        fetchSubthread: async function() {
            database.collection("Subthreads").
            doc(this.subthread_id).
            get().
            then(doc => {
                this.item = doc.data()
            })
        },
        fetchSubthreadReplies: async function() {
            return database.collection("Replies_Subthreads").get().then((querySnapShot)=>{
                    let item = {}
                    querySnapShot.forEach(doc=> { 
                        if (doc.data().subthread_id == this.subthread_id){
                            item = doc.data()
                            item["id"] = doc.id
                            this.replies.push(item)
                        }
                    })
                })
        },
        backButton: async function() {
            window.location = "/summary/"+this.item.module+"/"+this.$route.params.user_id
        }
    },
    components: {
        'subthreadBox' : subthreadBox,
        'commentLine' : commentLine,
        'commentBox' : commentBox,
    },
    async created() {
        this.subthread_id = this.$route.params.subthread_id;
        await this.fetchSubthread()
        await this.fetchSubthreadReplies()
    }
}
</script>

<style scoped>

#view {
    width: 80%;
    margin: auto;
}

.comment-header {
    width: 188px;
    height: 55.44px;
    color: white;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    background: #BA9977;
    border-radius: 5px;
    font-size: 24px;
    padding-top: 10px;
    text-align: center;
}

button {
    position: absolute;
    right: 0;
    width: 150px;
    margin: 0px 20px 20px 0px;
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
