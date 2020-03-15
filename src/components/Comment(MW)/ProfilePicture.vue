<template>
    <div class ="profile-pic">
        <b-img v-bind:src = getImage(picture) v-bind:alt="picture">
        </b-img>
    </div>
</template>

<script>
export default {
    props: {
        picture: String,
    },
    methods: {
        getImage: function(picture) {
            return require('@/assets/'+picture+'.jpg')
        }
    }
}
</script>

<style scoped>
img {
    width: 100px;
    height: 100px;
    background-size: cover;
    border-radius: 50%;
}
</style>
        <div class='vote-box'>
            <div class='star-shape'></div>
        </div>


.star-shape {
    margin: 50px 0;
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