<template>
    <div id="main">
        <div id = "chart">
        <linechartCovid></linechartCovid>
        </div>

    </div>
</template>

<script>
import linechartCovid from '../linechartCovid.js'
export default {
    components:{
        linechartCovid
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:1000px;
  width:1000px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding:30px;
  float:left;
  position:center;
}
</style>>