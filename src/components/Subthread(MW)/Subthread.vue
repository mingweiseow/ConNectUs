<template>
    <div>
        <div id="subthread-input">
            <input type="text" placeholder="Thread title...">
        </div>
        <textarea v-model="message" type = "text" placeholder="Write a comment..."></textarea>
        <button>Publish</button>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
}
</script>

<style scoped>
#subthread-input {
    display: flex;
    justify-content: space-around;
    margin: 229px auto;
    width: 80%;
}

#subthread-input h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
}
 
input[type=text] {
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 46px;
  width: 100%;
  margin-top: 50px;;
}

textarea {
    display:flex;
    justify-content: space-around;
    margin: -180px auto;
    width: 80%;
    height: 449px;
    box-sizing: border-box;
    border: 4px solid #BA9977;
    border-radius: 20px;
    resize: none;
    outline: none;
    font-size:20px;
    font-family: Poppins;
    padding: 10px 20px 0 20px;
}

button {
    display:flex;
    justify-content: space-around;
    margin: 250px auto;
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
