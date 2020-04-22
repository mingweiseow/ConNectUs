<template>
    <div id = "comment-group">
        <div class = "group">
            <profile-pic v-bind:style="PicStyle"></profile-pic>
            <input type="text" placeholder="Add a comment...">
        </div>
    <br>
    <button>Post</button>
    <br><br><br><br><br><br>
    </div>
</template>

<script>
import ProfilePicture from './ProfilePicture.vue'
export default {
    data() {
        return {
            PicStyle: {
                margin: "0px 25px 0px 0px"
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
    margin-top: 50px;
    text-align: center;
}

.group {
    display: flex;
}

input[type=text] {
    border: none;
    border-bottom: 2px solid black;
    outline: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    width: 100%;
}

::placeholder {
    color: black;
    font-family: 'Poppins';
    font-size: 26px;
}

button {
    float: right;
    width: 301px;
    height: 56px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    background: #BA9977;
    border-radius: 5px;
    font-size: 24px;
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
