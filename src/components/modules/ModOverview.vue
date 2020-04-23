<template>
<div>
    <div id = 'moduleoverview'> 
        <h1>{{mod_summary}}</h1>
    </div>
</div>
</template>

<script>
export default {
    props: {
        mod_summary: String
    },
}
</script>

<style scoped>
#moduleoverview h1{
    background: #E8E8E8;
    border-radius: 5px;
    width: 95.5%;
    margin-left: 46px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 33px;    
    color: #000000;
    padding: 30px;
}


</style>
