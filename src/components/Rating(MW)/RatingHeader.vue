<template>
    <div id="module-header">
        <h1>~{{mod_name}}/Reviews</h1>
    </div>
</template>

<script>
export default {
    props: {
        mod_name: String
    },
}
</script>

<style scoped>
#module-header h1{
    position: absolute;
    width: 300px;
    height: 54px;
    left: 25px;
    top: 124px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 54px;
    color: #BA9977;
}
</style>