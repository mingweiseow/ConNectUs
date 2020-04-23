<template>
<div class = "view">
    <div id = 'samples'> 
        <h1>{{title}}</h1>
    </div>
    <div id = 'downloadsample'>
        <button>{{download}}</button>
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
.view {
    text-align:center;
}

#samples {
    text-align: center;
}

#samples h1{
    border-radius: 5px;
    height: 100px;
    width: 96%;
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

button{
    border-radius: 5px;
    height: 30px;
    width: 301px;
    margin-top: -40px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 2px;    
    background: #C9B8A7;
    color: #FFFFFF;
    padding: 25px;
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
