<template>
  <div id = "ModuleDesc">
    <modreviewheader></modreviewheader>
    <modsummary></modsummary>
    <modoverview></modoverview>
    <modreview></modreview>
    <samples></samples>
   
    

    <label id = "difficulty"> Difficulty: </label> 
    <label id = "difficulty1"></label>
    <label id = "difficulty2"></label>
    <label id = "difficulty3"></label>
    <label id = "difficulty4"></label>
    <label id = "difficulty5"></label>
    <label id = "knowledge"> Prior knowledge required: </label>
    <label id = "knowledge1"></label>
    <label id = "knowledge2"></label>
    <label id = "knowledge3"></label>
    <label id = "knowledge4"></label>
    <label id = "knowledge5"></label>
    <label id = "overall"> Overall: </label>
    <label id = "overall1"></label>
    <label id = "overall2"></label>
    <label id = "overall3"></label>
    <label id = "overall4"></label>
    <label id = "overall5"></label>
  </div>
</template>



<script>

import ModReviewHeader from './ModReviewHeader.vue'
import ModSummary from './ModSummary.vue'
import ModOverview from './ModOverview.vue'
import ModReview from './ModReview.vue'
import Samples from './Samples.vue'

export default {
  data(){  },
    components: {
      'modreviewheader': ModReviewHeader,
      'modsummary': ModSummary,
      'modoverview': ModOverview,
      'modreview': ModReview,
      'samples': Samples,
     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.router-link-active{
    background: ivory;
    color: #444;
}
/*header{
    background:rgb(67, 63, 122);
    padding:10px;
    border-style: solid;
    border-color:black;
    border-width: 2px;
}*/


/*ul{
  position: absolute;
  width: 500px;
  height: 42px;
  left: 960px;
  top: 190px;

  text-decoration-line: underline;

  color: #BA9977;
    list-style-type: none;
    text-align: right;
    margin: 0;
}


li1{
    background-color:white;
    border-color:white;
    display: inline-block;
    margin: 0 10px;
}
li1 a{
  
  font-size: 28px;
  color:#BA9977;
    
}



h1{
    color:ivory
}
*/


/*#reviews{
  position: absolute;
  text-align: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 90px;
  padding:10px;
  border-style: solid;
  /*border-color:black;*/
  /*border-width: 2px;
  background: #BA9977;
  width: 1800px;
  height: 103px;
  left: 45px;
  top: 430px;
  color: #FFFFFF;
}*/

/*#subthreads{
  position: absolute;
  text-align: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 90px;
  padding:10px;
  border-style: solid;
  /*border-color:black;*/
  /*border-width: 2px;
  background: #BA9977;
  width: 1350px;
  height: 103px;
  left: 45px;
  top: 560px;
  color: #FFFFFF;
}*/

/*#questionmod {
  position: absolute;
  width: 700px;
  height: 45px;
  left: 346px;
  top: 700px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 45px;
  text-align: right;
  color: #BA9977;

}*/
/*#samplebox{
  position: absolute;
  width: 301px;
  height: 56px;
  left: 575px;
  top: 750px;

  background: #C9B8A7;
  border-radius: 5px;
}
#samples {
  position: absolute;
  text-align: center;
  width: 240.17px;
  height: 90px;
  left: 610px;
  top: 760px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;

  color: #FFFFFF;

}*/


/*#summarybox{
  position: absolute;
  width: 1350px;
  height: 150px;
  left: 45px;
  top: 250px;

  background: #E8E8E8;
  border-radius: 5px;
}

#summary{
  position: absolute;
  width: 1311px;
  height: 102px;
  left: 65px;
  top: 275px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 33px;

  color: #000000;
}*/

/*
#itemsList{
    width: 100%;
    max-width: 1200px;
    margin: 30px auto;
    padding: 0 5px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 10px;
    border: 1px solid #222;
    margin: 10px;
}
img{
  width:100px;
  height:100px;
}*/


</style>