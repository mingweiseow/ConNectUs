<template>
<div>
    <div id = 'samples'> 
        <h1>{{title}}</h1>
    </div>
    <div id = 'downloadsample'>
        <h1>{{download}}</h1>
    </div>
</div>
</template>

<script>
export default {

    data() {
        return {
            title: "Still unsure whether or not to take this module?",
            download: "Download Samples"
        }
    }
}
</script>

<style scoped>
#samples h1{
    border-radius: 5px;
    height: 100px;
    width: 1350px;
    margin-left: 75px;
    margin-top: 10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    text-align: center;
    line-height: 33px;    
    color: #BA9977;
    padding: 30px;
}

#downloadsample h1{
    border-radius: 5px;
    height: 30px;
    width: 301px;
    margin-left: 610px;
    margin-top: -30px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    text-align: center;
    line-height: 2px;    
    background: #C9B8A7;
    color: #FFFFFF;
    padding: 25px;
}


</style>
