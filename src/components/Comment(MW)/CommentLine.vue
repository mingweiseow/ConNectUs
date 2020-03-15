<template>
    <div id = "comment-group">
        <div>
            <profile-pic v-bind:picture="profilepic" v-bind:style="PicStyle"></profile-pic>
            <input type="text" placeholder="Add a comment...">
        </div>
    <button>Publish</button>
    </div>
</template>

<script>
import ProfilePicture from './ProfilePicture.vue'
export default {
    data() {
        return {
            profilepic: "mw",
            PicStyle: {
            'display': 'inline-block',
            }
        }
    },
    components: {
        'profile-pic': ProfilePicture
    }
}
</script>

<style scoped>
#comment-group {
    border: solid black;
    padding-bottom: 100px;
}

div {
    margin: 80px 0 0 40px;
}
input[type=text] {
    border: none;
    border-bottom: 2px solid black;
    outline: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    width: 80%;
    margin-left: 30px;
    vertical-align: bottom;
}

::placeholder {
    color: black;
    font-family: 'Poppins';
    font-size: 26px;
}

button {
    float: right;
    margin: 30px 90px 0px 0px;
    width: 287px;
    height: 50px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    background: #BA9977;
    border-radius: 5px;
    font-size: 24px;
    line-height: 36px;
    color: #FFF;
    border: none;
    cursor: pointer;
    outline:none;
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
</style>
