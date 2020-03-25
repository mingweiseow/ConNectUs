<template>
<div>
<div id = 'qn'>
    Know what you're looking for?
    </div>
<div class = "modsearchfn">
        <form id="fm1">
        <input type="text" style="border: 3px solid #BA9977; width:270px" placeholder="Search Module"/>      
    </form>
</div>
<div id = 'ow'>
    Otherwise,
</div>
<div id = 'filter'>
    Filter by:
</div>

<div class = 'mod'>
  <vs-list>
    <vs-list-item class = 'module-info1'>
        Faculty
      <select v-model="faculty" style="width: 200px; border: 3px solid #BA9977"> 
      <option disabled selected value> -- Faculty -- </option>
      <option value="Computing">Computing</option>
      <option value="Business">Business</option>
      <option value="Engineering">Engineering</option>
    </select>
    </vs-list-item>
    <br>
    <vs-list-item  class = 'module-infoOther'>
        Major
    <select v-model="major" style="width: 200px; border: 3px solid #BA9977">"
      <option disabled selected value> -- Major -- </option>  
      <option value="Biz Analytics">Business Analytics</option>
      <option value="Biz Admin">Business Admin</option>
      <option value="Mech. Eng">Mechanical Engineering</option>
    </select>
    </vs-list-item>
    <br>
        <vs-list-item  class = 'module-infoOther'>
            Level
    <select v-model="level" style="width: 200px; border: 3px solid #BA9977">"
        <option disabled selected value> -- Level -- </option>
      <option value="1000">1000</option>
      <option value="2000">2000</option>
      <option value="3000">3000</option>
    </select>
    </vs-list-item>
    <br>
  </vs-list>
  </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped >

#qn{
    font-family:'Poppins';
    font-style: normal;
    font-weight: normal;
    margin-left:30px;
    margin-top:20px;
    font-size:20px;
    width: 300px;
    color: #000000;
}

#ow{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    margin-left:120px;
    margin-top:70px;
    font-size:20px;
    color: #000000;

}

#filter{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    margin-left:100px;
    font-size:24px;
    color: #BA9977;
}


.modsearchfn{
    margin-left:40px;
    margin-top:30px;
}

input[type="text"]{
    display: inline-block;
    padding: 8px;
    width:50%;

}

.module-info1{
    font-size: 20px;
    font-family: "Poppins";
    font-weight: normal;
    color: #000000;
    width: 200px;
    height: 20px;
    margin-left: 56px;
    margin-top: 40px;
    

}

.module-infoOther{
    font-size: 20px;
    font-family: "Poppins";
    font-weight: normal;
    color: #000000;
    width: 200px;
    height: 20px;
    margin-left: 56px;
    margin-top: 20px;
}

.mod{
    font-size: 20px;
    font-family: "Poppins";
    font-weight: normal;
    color: #BA9977;
    
    
    
  
}

  
</style>