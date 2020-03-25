<template>
  <div class='test'>
    <modulesearchlist></modulesearchlist>
    <div id = 'line'>
    
      </div>

    <modulelist></modulelist>
  </div>
</template>

<script>
import ModuleList from './ModuleList.vue'
import ModuleSearchList from './ModuleSearchList.vue'


export default {
  
  data(){
    return{
        msg:"Modules"
        }
  },
    components: {
    'modulelist':ModuleList,
    'modulesearchlist': ModuleSearchList,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test {
    display: flex;
}




/*#qn1{
  text-align: center;
  position: absolute;
  width: 296px;
  height: 30px;
  left: 13px;
  top: 100px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
}*/

/*#search{
  
  height: 100px;
  margin-left:10px;
  margin-top: 130px;

}*/

/*h21{
  position: absolute;
  width: 71px;
  height: 30px;
  left: 125px;
  top: 219px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;

  color: #000000;
}*/

#otherwise{
  position: absolute;
  width: 104px;
  height: 30px;
  left: 118px;
  top: 281px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;

  color: #000000;

}

#filterby{
  position: absolute;
  width: 98px;
  height: 36px;
  left: 78px;
  top: 300px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;

  color: #BA9977;

}

/*#faculty{
  position: absolute;
  width: 73px;
  height: 30px;
  left: 103px;
  top: 371px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;

  color: #000000;

}

#facultybox{
  position: absolute;
  width: 134px;
  height: 35px;
  left: 103px;
  top: 407px;

  border: 3px solid #BA9977;
  box-sizing: border-box;
}

#facultydropdown{
  position: absolute;
  width: 500px;
  height: 42px;
  left: 110px;
  top: 414.5px;
}

#major{
  position: absolute;
  width: 56px;
  height: 30px;
  left: 103px;
  top: 452px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;

  color: #000000;
}

#majorbox{
  position: absolute;
  width: 134px;
  height: 35px;
  left: 103px;
  top: 488px;

  border: 3px solid #BA9977;
  box-sizing: border-box;
}

#majordropdown {
  position: absolute;
  width: 500px;
  height: 42px;
  left: 110px;
  top: 495px;

}

#level{
  position: absolute;
  width: 50px;
  height: 30px;
  left: 103px;
  top: 534px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;

  color: #000000;
}

#levelbox{
  position: absolute;
  width: 134px;
  height: 35px;
  left: 103px;
  top: 570px;

  border: 3px solid #BA9977;
  box-sizing: border-box;
}

#leveldropdown{
  position: absolute;
  width: 500px;
  height: 42px;
  left: 110px;
  top: 577px;
}

#code{
  position: absolute;
  width: 55px;
  height: 30px;
  left: 103px;
  top: 611px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;

  color: #000000;
}

#codebox{
  position: absolute;
  width: 134px;
  height: 35px;
  left: 103px;
  top: 647px;

  border: 3px solid #BA9977;
  box-sizing: border-box;
}*/

#line{
  position: absolute;
  width: 844px;
  height: 0px;
  left: 0px;
  top: 500px;

  border: 2px solid #E8E8E8;
  transform: rotate(-90deg);
}

/*h101{
  position: absolute;
  width: 139px;
  height: 54px;
  left: 500px;
  top: 232px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 54px;

  color: #BA9977;
}*/


label{
    display: inline-block;
    margin: 20px 0 10px;
    width:50%;
    align-content:left;

}

/*input[type="text"]{
    display: inline-block;
    padding: 8px;
    width:50%;
}*/
</style>