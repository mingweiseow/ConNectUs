<template>
    <div>
        <div class='vote-box'>
            <div class='up-vote' style="margin-right: 5px" @click= upVote()></div>
            <p style='margin-left: 5px;'>{{counterUp}}</p>
        </div>
        <div class='vote-box'>
            <div class='down-vote' style="margin-left: 10px" @click= downVote()></div>
            <p>{{counterDown}}</p> 
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counterUp: 0,
            counterDown: 0,
        }
    },
    methods: {
        upVote: function() {
            return this.counterUp += 1
        },
        downVote: function() {
            return this.counterDown -= 1
        }
    },
}
</script>

<style scoped>
p {
    display: inline-block;
}

.vote-box {
    display: inline-block;
}

.up-vote {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0px 25px 40px 25px;
    border-color: transparent transparent #BA9977 transparent;
    display: inline-block;
}

.down-vote {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 40px 25px 0 25px;
    border-color: #BA9977 transparent transparent transparent;
    display: inline-block;
}

.up-vote:hover {
    cursor: pointer;
    transform: scale(1.2);
}

.down-vote:hover {
    cursor: pointer;
    transform: scale(1.2);
}

#star-five {
  margin: 30px 0;
  position: relative;
  display: block;
  color: red;
  width: 0px;
  height: 0px;
  border-right: 100px solid transparent;
  border-bottom: 70px solid red;
  border-left: 100px solid transparent;
  transform: rotate(35deg);
}
#star-five:before {
  border-bottom: 80px solid red;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  position: absolute;
  height: 0;
  width: 0;
  top: -45px;
  left: -65px;
  display: block;
  content: '';
  transform: rotate(-35deg);
}
#star-five:after {
  position: absolute;
  display: block;
  color: red;
  top: 3px;
  left: -105px;
  width: 0px;
  height: 0px;
  border-right: 100px solid transparent;
  border-bottom: 70px solid red;
  border-left: 100px solid transparent;
  transform: rotate(-70deg);
  content: '';
}
</style>
