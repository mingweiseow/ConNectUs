<template>
<div>
    <div class="header-box">
        <modreviewheader style="position:absolute; left:0" v-bind:title="this.modName"></modreviewheader>
            <div id="rating">
                <div class="rating-row">
                    <h1>Difficulty:</h1>
                    <star-rating v-model="difficulty"
                    v-bind:read-only="true"
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
                    <h1>Effort:</h1>
                    <star-rating v-model="effort"
                    v-bind:read-only="true"
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
                    <h1>Overall:</h1>
                    <star-rating v-model="overall"
                    v-bind:read-only="true"
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
    </div>
    <modsummary 
    v-bind:module_id="this.mod_id"
    ></modsummary>
    <modoverview v-bind:mod_summary="this.mod_summary"></modoverview>
    <div id='modreview'> 
       <h1> <button style = "background-color: #BA9977; color: white; border:none" @click=showReview()>Reviews</button></h1>
       <div id ="modbox" v-show="visibleReview">
            <commentBox v-for="item in reviewList" v-bind:key="item.id"
            v-bind:style='boxStyle'
            v-bind:message="item.message"
            v-bind:name="item.name"
            v-bind:user_id="item.user_id"   
            v-bind:id="item.id"
            v-bind:data="item"
            ></commentBox>
       </div>
    </div>
    <div id='modreview'> 
       <h1> <button style = "background-color: #BA9977; color: white; border:none" @click=showSubthread()>Subthreads</button></h1>
       <div id ="modbox-subthread" v-show="visibleSubthread">
            <subthreadBox v-for="item in subthreadList" v-bind:key="item.id"
            v-bind:style='boxStyle'
            v-bind:message="item.message"
            v-bind:name="item.name"
            v-bind:id="item.id"
            v-bind:user_id="item.user_id"
            v-bind:data="item"
            v-bind:title="item.title"
            ></subthreadBox>
       </div>
    </div>
    <samples></samples>
</div>
</template>

<script>
import StarRating from 'vue-star-rating'
import database from '../../firebase.js'
import ModReviewHeader from './ModReviewHeader.vue'
import ModSummary from './ModSummary.vue'
import ModOverview from './ModOverview.vue'
import commentBox from '../Comment(MW)/ReviewBox.vue'
import subthreadBox from '../Subthread(MW)/SubthreadBox.vue'
import Samples from './Samples.vue'

export default {
    data(){
        return{
            type: "",
            reviewList: [],
            subthreadList:[],
            visibleReview: false,
            visibleSubthread: false,
            modName: "",
            boxStyle: {
                height: "auto"
            },
            mod_id: "NFFeJ5YqTmBaAqoW12hn",
            mod_summary: "",
            difficulty: 0,
            effort: 0,
            overall: 0,
            num_reviews: 0
        }
    },
    components:{
        'modreviewheader': ModReviewHeader,
        'modsummary': ModSummary,
        'modoverview': ModOverview,
        'commentBox' : commentBox,
        'subthreadBox' : subthreadBox,
        'samples': Samples,
        'star-rating': StarRating,
    },
    methods:{
        fetchReviews: async function() {
                return database.collection("Reviews").get().then((querySnapShot)=>{
                    let item = {}
                    querySnapShot.forEach(doc=> { 
                        if (doc.data().module == "NFFeJ5YqTmBaAqoW12hn"){
                            item = doc.data()
                            item["id"] = doc.id
                            this.reviewList.push(item)
                        }
                    })
                })
        },
        showReview() {
            this.visibleReview = !this.visibleReview
            return null;
        },
        fetchSubthreads: async function() {
                return database.collection("Subthreads").get().then((querySnapShot)=>{
                    let item = {}
                    querySnapShot.forEach(doc=> { 
                        if (doc.data().module == "NFFeJ5YqTmBaAqoW12hn"){
                            item = doc.data()
                            item["id"] = doc.id
                            this.subthreadList.push(item)
                        }
                    })
                })
        },
        fetchModuleInfo: async function() {
            return database.collection("Modules").get().then((querySnapShot)=>{
                    querySnapShot.forEach(doc=> { 
                        if (doc.id == "NFFeJ5YqTmBaAqoW12hn"){
                            this.modName = "~" + doc.data().mod_name
                            this.difficulty = doc.data().difficulty / doc.data().num_reviews
                            this.effort = doc.data().effort / doc.data().num_reviews
                            this.overall = doc.data().overall / doc.data().num_reviews
                        }
                    })
                })
        },
        fetchModuleSummary: async function() {
            return database.collection("Modules").
            doc("NFFeJ5YqTmBaAqoW12hn").
            get().then(doc => {
                this.mod_summary = doc.data().module_summary
            })
        },
        showSubthread() {
            this.visibleSubthread = !this.visibleSubthread
            return null;
        },
        toggleBoxSize() {
            if (this.reviewList.length < 4) {
                document.getElementById("modbox").style.height = "500px"
            }
            if (this.subthreadList.length < 4) {
                document.getElementById("modbox-subthread").style.height = "500px"
            }
            return null;
        },
    }, 
    async created() {
        await this.fetchModuleInfo()
        await this.fetchModuleSummary()
        await this.fetchReviews()
        await this.fetchSubthreads()
        this.toggleBoxSize()
    }
<<<<<<< HEAD
},
components:{
    
},
methods:{
    rev: function() {
            database.collection('Reviews').get().then((querySnapShot)=>{
                let item={}
                querySnapShot.forEach(doc=> {                
                    item=doc.data()
                    item.show=true
                    if (item.module == "NFFeJ5YqTmBaAqoW12hn") {
                    this.itemsList.push(item)
                    }    
                })
            })
    },
   upvote: function(item) {
       database.collection('Modules').doc('NFFeJ5YqTmBaAqoW12hn').update({upvotes: item.upvotes+++1})
  }, 
   downvote: function(item) {
       database.collection('Modules').doc('NFFeJ5YqTmBaAqoW12hn').update({downvotes: item.downvotes+++1})
  }, 
},

created(){
this.fetchItems() 
=======
}


</script>

<style scoped>
>>>>>>> testMW

.header-box {
    display:flex;
    height:120px;
    justify-content: center;
}

#rating {
    display:flex;
    justify-content: space-around;
    width: 60%;
    text-align: center;
}

.rating-row h1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
}

#modreview {
    width: 95.5%;
    margin: auto 50px;
}

#modreview h1{
    background: #BA9977;
    border-radius: 5px;
    height: 100px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 0px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    text-align: center;
    line-height: 33px;    
    color: #FFFFFF;
    padding: 30px;
}

#modbox {
    height: auto;
    overflow-x: hidden; 
}

#modbox-subthread{
    height: auto;
    overflow-x: hidden; 
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

button:focus {outline:0;}


header{
    background:rgb(122, 63, 100);
    padding:10px;
    border-style: solid;
    border-color:black;
    border-width: 2px;
}
</style>




