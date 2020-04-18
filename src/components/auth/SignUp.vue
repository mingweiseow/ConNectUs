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
      <form @submit.prevent="register" id="signupForm" class="form-signup">

        <input type="text" name="name" placeholder="Name" v-model="name">
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
        
        <router-link to="/signin" tag="button" class="btn btn-primary btn-md" id="cancel-btn">Cancel</router-link>

        <!-- need to update button -->
        <button id="signup-btn" class="btn btn-primary btn-md">Sign Up</button>
        <!-- </div> -->
      </form>
    </div>

  </div>
</template>

<script>
import database from '../../firebase.js';
import firebase from 'firebase';

export default {
  name: 'register',
  data: function() {
    return {
      name: '',
      email: '',
      password: '',
      password2: '',
      year: '',
    }
  },

  methods: {
    register: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert(`Account created for ${user.email}`);
          this.$router.push('/home');
        },
        err => {
          alert(err.message);
        });

      database.collection('Users').add({
        email: this.email,
        modules: [],
        name: this.name,
        num_post: 0,
        password: this.password,
        subs: 0,
        subscribers: [],
        year_of_study: this.year
      })
      .then(docRef => {
        console.log('Client added: ', docRef.id)
        this.$router.push('/')
      })
      .catch(error => console.log(error))  
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
