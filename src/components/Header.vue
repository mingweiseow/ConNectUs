<template>
    <body>
        <header id='Header'>
            <img class="logo" src="../assets/logo.svg" alt ="logo" height="100" width="100">
            <nav>
                <ul class="nav__links">
                    <li><router-link to="/home" exact><a id = "navi" href="#">About</a></router-link></li>
                    <li><router-link to="/modules" exact><a id ="navi" href ="#">Modules</a></router-link></li>
                    <li><router-link to="/account" exact><a id="navi" href = "#">Account</a></router-link></li>
                </ul>
            </nav>
        </header>
    </body>
    
</template>

<script>
// import firebase from 'firebase';

// export default {
//     name: 'header',
//     data() {
//         return {
//             isLoggedIn: false,
//             currentUser: false
//         }
//     },

//     methods: {
//         logout: function() {
//             firebase.auth().signOut().then(() => {
//                 this.$router.push('/signin')
//             });
//         }
//     }
    
// }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

#Header {
    width: 100%;
    box-sizing: border-box;
    padding: 0px 25px 0px 25px;
}

body {
    margin:0;
}
li, a, button {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #000000
}

header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 30px 10%;
    width: 100%;
}

.logo {
    cursor:pointer;
    margin-right: auto;
    width: 200px;
}

.nav__links {
    list-style:none;
}

.nav__links li {
    display: inline-block;
    padding: 0px 20px;
}

.nav__links li a {
    transition: all 0.3s ease 0s;
}

.nav__links li a:hover {
    color: rgba(108, 122, 137, 1)
}

button {
    margin-left: 20px;
    padding: 12px 30px;
    background-color: rgba(189, 195, 199, 1);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
}

button:hover {
    background-color: rgba(189, 195, 199, 0.8)
}

button:focus {outline:0;}
</style>