<template>
  <div class="signinpage">
    <div class="container">
      <!-- if user is logged in -->
      <!-- <div class="login-notice">
        <h2>You are logged in.</h2>
          <h2>Return <a href="/">home</a>.</h2>
      </div> -->


      <!-- <div class="imgbox">
        <div class="img-container">
          <img class="bg-image" v-bind:src="image">
        </div>
      </div> -->

      <!-- <div class="intro">
        <h2>Welcome to ConNectUS</h2>
        <span>{{ desc1 }}</span><br>
        <span>{{ desc2 }}</span> 
      </div> -->
      <div class="wrapper">
        

        <div class="login-section">
          <div class="signinbox">
            <div class="login-box-header">
              <h2>Sign In</h2>
            </div>

            <!-- need to update -->
            <div class="box-content">
              <form id="loginForm" class="form-login">
                <input type="text" name="username" id="un" class="form-control" placeholder="Username">
                <input type="password" name="password" id="password" class="form-control" placeholder="Password">

                <!-- <div class="control-actions"> -->
                <button type="submit" id="signin-btn" class="btn btn-primary btn-sm">Sign In</button>
                <!-- </div> -->
              </form>

              <div class="signup-wrap">
                <span>No Account? </span>
                <router-link to="/signup" id="signup-link">Sign Up</router-link>
              </div>
            </div>
          </div>
        </div>
        
      <div class="sideimg"></div>

      <!-- <div class="signupbox">
        <div class="signup-box-header">
          <h2>Sign Up</h2>
          <h4>
            <span>No Account?</span>
          </h4>
        </div>

        <div class="control-actions">
          <router-link to="/signup" tag="button" class="btn btn-primary btn-md" id="signup-btn">Sign Up</router-link>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import sideimg from "../assets/signin.jpg"
export default {
  // name: 'login',
  data() {
    return {
      // image: sideimg,
      desc1: "We are a platform that aims to provide students with as much information on modules as possible.",
      desc2: "Sign up or Log in in order to view or provide such information."
    }
  },
  // methods: {
  //   login: function() {
  //     this.$router.replace('account');
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

.signinpage {
  font-family: Poppins, sans-serif;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  background: #f2f2f2;
}

.container {
  width: 100%;  
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #f2f2f2;
}

.wrapper {
  width: 1170px;
  background: #fff;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  flex-direction: row-reverse;

}

.sideimg {
  background-image: url(../assets/signin.jpg);
  width: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
}

.sideimg::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.3);
}

/*.imgbox {
  vertical-align: top;
  width: 50%;
  padding: 10px;
}

img {
  max-width: 100%;
  max-height: 100%;
}*/

/*.imgbox {
  background: url(../assets/signin.jpg);
  background-size: 100%;
}*/

.intro {
  padding-top: 50px;
}

.login-section {
  width: 50%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  padding: 303px 65px 40px 65px;
}

.login-section h2 {
  font-size: 36px;
  z-index: 2;
}

.login-section h4 {
  font-size: 20px;
  z-index: 4;
}

.login-box-header {
  padding: 10px;
  margin: 10px;
}

.form-login input {
  border: 3px solid #BA9977;
  padding: 10px;
  height: 40px;
  width: 300px;
  margin: 20px auto;
  font-size: 18px;
}

.form-login button {
  font-size: 15px;
  height: 40px;
  width: 100px;
  text-align: center;
  background-color: #BA9977; 
  border: solid white;
  radius: 3px;
}

.signup-wrap {
  margin: 20px;
  font-size: 20px;
}

#signup-link {
  color: #C9B8A7;
}

/*.signupbox {
  padding-top: 50px;
}*/

/*#signup-btn {
  font-size: 15px;
  height: 40px;
  width: 100px;
  text-align: center;
  background-color: #BA9977; 
  border: solid white;
  margin-top: 10px;
}*/

button:active {
  -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
  -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
  box-shadow: inset 0px 0px 5px #c1c1c1;
  outline: none;
}

button:hover {
    transform: scale(1.1);
}

</style>