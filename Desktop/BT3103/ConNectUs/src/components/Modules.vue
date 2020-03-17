<template>
  <div id=app>
    <label id ="qn1">Know what you're looking for? </label>
    <label id = "search">
      <form id="fm1">
          <input type="text" style="border: 3px solid #BA9977" placeholder="Search"/>      
      </form>
    </label>
    <label id = "otherwise"> Otherwise, </label>
    <label id = "filterby"> Filter by: </label>
    <label id = "faculty"> Faculty </label>
    <label id = "facultybox"></label>
    <label id = "facultydropdown">
    <select v-model="faculty" style="width: 120px">">
      <option value="Computing">Computing</option>
      <option value="Business">Business</option>
      <option value="Engineering">Engineering</option>
    </select></label>
    <label id = "major"> Major </label>
    <label id = "majorbox"></label>
    <label id = "majordropdown">
    <select v-model="major" style="width: 120px">"
      <option value="Biz Analytics">Business Analytics</option>
      <option value="Biz Admin">Busines Admin</option>
      <option value="Mech. Eng">Mechanical Engineering</option>
    </select></label>
    <label id = "level"> Level </label>
    <label id = "levelbox"></label>
    <label id = "leveldropdown">
    <select v-model="level" style="width: 120px">"
      <option value="1000">1000</option>
      <option value="2000">2000</option>
      <option value="3000">3000</option>
      <option value="4000">4000</option>
    </select></label>
    <label id = "code"> Code </label>
    <label id = "codebox"></label>
    <label id = "line"> </label>
    <label id = "firstmodbox"></label>
    <ul>
      <li1><router-link to="/" exact>CS1010S</router-link></li1>
    </ul>
    <label id = "secondmodbox"></label>
    <label id = "secondmod"> CS1010J </label>
    



  </div>
</template>

<script>

export default {
  
  data(){
    return{
        
        msg:"Modules"
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app *{
    box-sizing: border-box;
}
#app{
    margin: 20px auto;
    max-width: 500px;
}

ul{
  position: absolute;
  width: 500px;
  height: 42px;
  left: 145px;
  top: 260px;

  text-decoration-line: underline;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;

  color: #BA9977;
  list-style-type: none;
  text-align: right;
  margin: 0;
}


li1{
   
    border-color:white;
    display: inline-block;
    margin: 0 10px;
    
}
li1 a{
  text-decoration: none;
  font-size: 36px;
  color:#BA9977;
  
    
}


#qn1{
  text-align: center;
  position: absolute;
  width: 296px;
  height: 30px;
  left: 13px;
  top: 174px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
}

#search{
  position: absolute;
  width: 425px;
  height: 34px;
  left: 54.5px;
  top: 217px;

}

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

#faculty{
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
}

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

#firstmodbox{
  position: absolute;
  width: 950px;
  height: 84px;
  left: 470px;
  top: 219px;

  background: rgba(196, 196, 196, 0.2);
}

#secondmod{
  position: absolute;
  width: 137px;
  height: 54px;
  left: 500px;
  top: 339px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 54px;

  color: #BA9977;
}

#secondmodbox{
  position: absolute;
  width: 950px;
  height: 84px;
  left: 470px;
  top: 329px;

  background: rgba(196, 196, 196, 0.2);
}

label{
    display: inline-block;
    margin: 20px 0 10px;
    width:50%;
    align-content:left;

}
input[type="text"]{
    display: inline-block;
    padding: 8px;
    width:50%;
}
</style>