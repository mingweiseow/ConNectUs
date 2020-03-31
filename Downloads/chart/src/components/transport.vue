<template>
    <div id="main">
        <div id = "chart">
        <transport></transport>
        </div>
    </div>
</template>

<script>
import transport from '../transport.js'
export default {
    components:{
        transport
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