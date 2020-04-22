<template>
    <h1>{{header}}:</h1>
</template>

<script>
export default {
    props: {
        header: String
    },
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
