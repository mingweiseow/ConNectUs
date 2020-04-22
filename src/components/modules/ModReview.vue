<template>
<div>
    <modreviewheader v-bind:title="this.modName"></modreviewheader>
    <modsummary v-bind:module_id="this.mod_id"></modsummary>
    <modoverview></modoverview>
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
        }
    },
    components:{
        'modreviewheader': ModReviewHeader,
        'modsummary': ModSummary,
        'modoverview': ModOverview,
        'commentBox' : commentBox,
        'subthreadBox' : subthreadBox,
        'samples': Samples,
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
                        }
                    })
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
        await this.fetchReviews()
        await this.fetchSubthreads()
        this.toggleBoxSize()
    }
}


</script>

<style scoped>

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


header{
    background:rgb(122, 63, 100);
    padding:10px;
    border-style: solid;
    border-color:black;
    border-width: 2px;
}
h1{
    color:ivory
}

h2{
    background: #E8E8E8;
    border-radius: 5px;
    width: 1431px;
    margin-left: 46px;
}

h3{
  /* text-align: center; */
    height:200px;
    margin-left: 22px;
    padding: 10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    color: #BA9977;
    

}

h4{
    margin-bottom: 80px;
    font-size: 22px;
    margin-left: 30px;
    color: black;
}


/* #itemsList{
    width: 100%;
    max-width: 800px;
    margin: 30px auto;
    padding: 0 5px;
    box-sizing: border-box;
} */




 /* #lists{
  
    flex-basis: 300px;
    text-align: center;
    padding: 0px;
    
    margin: 10px;
    width: 1431px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    margin-left: 46px;
    
}  */
</style>




