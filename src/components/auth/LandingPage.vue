<template>
  <div class="landingpage">
    
<!--     <div class="img-container">
      <img class="bg-image" v-bind:src="image">
    </div>
 -->
    <div class="tophalf">
      <div class="content">
        <h2>ConNectUs</h2>
        <router-link to="/signin" tag="button" class="btn btn-outline-dark btn-md">Get Started</router-link>
        <!-- <button class="btn btn-outline-dark btn-md">Get Started</button> -->
      </div>
    </div>

    <div class="lower">
      <h3>About Us</h3>
      <p>{{ msg1 }}</p>
      <p>{{ msg2 }}</p>
    </div>
  
  </div>
</template>

<script>
// import bg from "../assets/landing.jpg"
export default {
  data() {
    return {
      // image: bg,
      msg1: "Unsure about what modules to take? Have no idea what you signed up for? Burning questions that you are too afraid to ask? Or simply curious?",
      msg2: " ConNectUs is here to help! We are a group of NUS Students, aiming to provide sufficient module information for students and thus, conNectUs was born.  A platform with forums for individual modules and chatbots for seniors, we have everything covered from reviews to questions to sample papers."
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

.landingpage {
  font-family: Poppins, sans-serif;
  text-align: center;
  color: #000000;
}

/*.img-container {
  max-width: 100%;
  max-height: 100%;
  top: 0px;
}

.bg-image {
  max-width: 100%;
  max-height: 100%;
}
*/
.tophalf {
  background: url(../assets/landing.jpg);
  background-size: 100%;
  height: 400px;
}

.content {
  padding-top: 125px;
  margin: 0 auto;
}

h2 {
  font-size: 64px;
  font-style: normal;
  font-weight: normal;
}

button:active {
  background: #e5e5e5;
  -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
  -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
  box-shadow: inset 0px 0px 5px #c1c1c1;
  outline: none;
}

button:hover {
    transform: scale(1.1);
}

.lower {
  text-align: center;
  width: 950px;
  margin: 0 auto;
  padding-top: 30px;
}

h3 {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  text-decoration-line: underline;
  padding: 10px;
}


</style>
