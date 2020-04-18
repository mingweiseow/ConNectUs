<template>
<div>
    <div id = 'modreview'> 
       <h1> <button style = "background-color: #BA9977; color: white; border:none" v-on:click.prevent="rev">Reviews</button></h1>
       <h2>
            <ul v-for="item in itemsList" v-bind:key="item.title" >
                    <h3 v-on:click="item.show = !item.show">{{item.user}}: <h4>{{item.module_summary}}  </h4> 
                        <h5> <label> {{item.comments}} Comments  </label> 
                          <button name="upvote" v-on:click="upvote(item)">   <img src="../../assets/logo.png" width="30" height="30" alt="upvote" /></button> {{item.upvotes}}
                         <button name="downvote" v-on:click="downvote(item)"> <img src="../../assets/logo.png" width="30" height="30" alt="downvote" /></button> {{item.downvotes}}</h5> </h3>
                        
            </ul>
           
        </h2>
    
    </div>
</div>
</template>

<script>
import database from '../../firebase.js'

export default {
    props:{
        test:{
            type: String

        }
    },
data(){
    return{
        title: "Reviews",
        itemsList: [],
        count:0,
        
    }
},
components:{
    
},
methods:{
    rev:function(){
        database.collection('Modules').get().then((querySnapShot)=>{
        let item={}
        querySnapShot.forEach(doc=>{                
        item=doc.data()
        item.show=true
        if(item.title == "CS1010S"){
        this.itemsList.push(item)
        }
        
}) }) },
  upvote:function(item){
    database.collection('Modules').doc('cCsUhgMUVNuSspM6ReNv').update({upvotes: item.upvotes+++1})
    
  }, 
    downvote:function(item){

    database.collection('Modules').doc('cCsUhgMUVNuSspM6ReNv').update({downvotes: item.downvotes+++1})
    
  }, 
},


created(){
this.fetchItems() 

}}

</script>

<style scoped>

label{
    text-decoration: underline;
    margin-right: 10px;
}

#modreview h1{
    background: #BA9977;
    border-radius: 5px;
    height: 100px;
    width: 1431px;
    margin-left: 46px;
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

h5{
    font-size:22px;
    margin-left: 1080px;
    color:black;
    
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




