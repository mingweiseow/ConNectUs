<template>
  <div class="headerStyle">
        <nav>
          <h1>{{ title }}</h1>
          <ul>
             <li><router-link to="/home" exact>Home</router-link></li>
             <li><router-link to="/modules" exact>Modules</router-link></li>
             <li><router-link to="/account" exact>Account</router-link></li>
          </ul>
        </nav>
  </div>
</template>

<script>
export default {
  
  data(){
    return{
        msg: 'Modules Individual Page'
        }
  },
  props:{
    title:{
      type:String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background:rgb(255, 255, 255);
    padding:6px;
    border-style: solid;
    border-color:rgb(255, 255, 255);
    border-width: 2px;
}
h1{
    color:ivory;
    background:  ivory;
    font-size: 30px;
}
nav{
    background: rgb(255, 255, 255);
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: ivory;
    color: #444;
}
ul{
    list-style-type: none;
    text-align: right;
    margin: 0;
}
li{
    background-color:gray;
    display: inline-block;
    margin: 0 10px;
}
li a{
  
  font-size: 18px;
  color:ivory;
    
}
</style>

