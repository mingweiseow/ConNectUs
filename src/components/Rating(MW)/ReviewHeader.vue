<template>
    <h1>{{name}}</h1>
</template>

<script>
export default {
    props: {
        name: String
    },
    data() {
        return {
            title: "~CS1010S/Review"
        }
    }
}
</script>

<style scoped>
h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 54px;
    color: #BA9977;
}
</style>
