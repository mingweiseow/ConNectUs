<template>
    <div>
        <div id="rating">
            <review-header class = "module-name" v-bind:name = "name"></review-header>
            <div class="rating-row">
                <h1>Difficulty:</h1>
                <star-rating :show-rating = false rounded-corners = true star-size = 25 padding = 1 active-color= #BA9977 border-width = 6 border-color = #BA9977 inactive-color = #FFF></star-rating>
            </div>
            <div class="rating-row">
                <h1>Effort:</h1>
                <star-rating :show-rating = false rounded-corners = true star-size = 25 padding = 1 active-color= #BA9977 border-width = 6 border-color = #BA9977 inactive-color = #FFF></star-rating>
            </div>
            <div class="rating-row">
                <h1>Overall:</h1>
                <star-rating :show-rating = false rounded-corners = true star-size = 25 padding = 1 active-color= #BA9977 border-width = 6 border-color = #BA9977 inactive-color = #FFF></star-rating>
            </div>
        </div>
        <textarea v-model="message" type = "text" placeholder="Write a comment"></textarea>
        <button>Publish</button>
    </div>
</template>

<script>
import ReviewHeader from './ReviewHeader.vue'
import StarRating from 'vue-star-rating'
export default {
    data() {
        return {
            'name': '~CS1010S/Review'
        }
    },
    components: {
        'star-rating': StarRating,
        'review-header': ReviewHeader,
    }
}
</script>

<style scoped>
#rating {
    display: flex;
    justify-content: space-around;
    margin: 229px auto;
    width: 80%;
}

#rating h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
}

#rating .rating-row {
    text-align: center;
}

#rating .module-name {
    position: absolute;
    width: 300px;
    height: 54px;
    left: 46px;
    top: 124px;
}
 
textarea {
    display:flex;
    justify-content: space-around;
    margin: -150px auto;
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

.publishButton {
    display:flex;
    justify-content: space-around;
    margin: 200px auto;
    width: 257px;
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
