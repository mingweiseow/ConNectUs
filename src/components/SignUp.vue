<template>
  <!-- if user is logged in -->
  <!-- <div class="login-notice">
    <h2>You are logged in. Return <a href="/">home</a></h2>
  </div> -->

  <div class="signup-content">

    <div class="signup-page-header">
      <h2>Sign Up</h2>
    </div>

    <div class="actualForm">
      <form @submit.prevent="onsubmit" id="signupForm" class="form-signup">

        <input type="text" name="username" placeholder="Username" v-model="username">
        <input type="email" name="email" placeholder="Email (NUS)" v-model="email">
        <input type="password" name="password" placeholder="Password" v-model="password">
        <input type="password" name="password2" placeholder="Confirm Password" v-model="password2">

        <div class="input">
          <select id="year" class="form-control" title="Year of Study" v-model="year">
            <option disabled selected value> -- Year of Study -- </option>
            <option value="year1">Year 1</option>
            <option value="year2">Year 2</option>
            <option value="year3">Year 3</option>
            <option value="year4">Year 4</option>
            <option value="alumni">Alumni</option>
          </select>
        </div>
        
        <!-- <div class="control-signups"> -->
        <router-link to="/signin" tag="button" class="btn btn-primary btn-md" id="cancel-btn">Cancel</router-link>

        <!-- need to update button -->
        <button v-on:click="submit" id="signup-btn" class="btn btn-primary btn-md">Sign Up</button>
        <!-- </div> -->
      </form>
    </div>

  </div>
</template>

<script>

//import database from '../firebase.js';

export default {
  data() {
    return {
      arrayOfObjects: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Alumni'],
      object: {
        name: 'Year of Study',
      },
      // valid: false,
      username: '',
      email: '',
      password: '',
      password2: '',
      year: '',
      // emailRules: [
      //   v => !!v || 'E-mail is required',
      //   v => /.+@.+/.test(v) || 'E-mail must be valid'
      // ],
      // passwordRules: [
      //   v => !!v || 'Password is required',
      //   v => v.length >= 6 || 'Password must be greater than 6 characters'
      // ]
    }
  },

  methods: {
    methodToRunOnSelect(payload) {
      this.object = payload;
    },
    // submit() {
    //   if (this.$refs.form.validate()) {
    //     this.$store.dispatch('userJoin', {
    //       email: this.email,
    //       password: this.password
    //     });
    //   }
    // }
    onsubmit () {
      const formdata = {
        username: this.username,
        email: this.email,
        password: this.password,
        confirm: this.password2,
        year: this.year
      }
      console.log(formdata)
      this.$store.dispatch('signup', formdata)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

.signup-content {
  margin: 0 auto;
  width: 100%;
  padding: 30px;
  text-align: center;
  font-family: Poppins, Arial, serif;
}

.signup-page-header h2 {
  font-size: 48px;
  margin: 20px;
  padding: 10px;
}

.actualForm {
  margin: 20px;
  padding: 10px;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

input {
  width: 500px;
  height: 40px;
  left: 420px;
  top: 368px;
  border: 3px solid #BA9977;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
}

.form-control {
  width: 500px;
  height: 40px;
  top: 368px;
  border: 3px solid #BA9977;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 10px auto;
}

#cancel-btn {
  font-size: 15px;
  height: 40px;
  width: 100px;
  text-align: center;
  background-color: #C9B8A7; 
  border: solid white;
  margin: 10px;
}

#signup-btn {
  font-size: 15px;
  height: 40px;
  width: 100px;
  text-align: center;
  background-color: #BA9977; 
  border: solid white;
  margin: 10px;
}

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
