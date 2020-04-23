<template>
        <span class="img">
        </span>
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
.img {
    height: 85px;
    width: 85px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
}
</style>
