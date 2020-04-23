<template>
        <div class="post-box">
            <vs-button class='buttons' color="#BA9977" type="flat">Read More</vs-button>
            <p>{{mod_name}}</p>
    </div>
</template>


<script>
export default {
    props: {
        mod_id: String,
        mod_name:String,
    }
}
</script>

<style scoped>
.buttons {
    color: black;
    left: 400px;
    height: 100%; 
    float:right
}

.post-box {
    background: rgba(196, 196, 196, 0.2);
    border-radius: 5px;
    width: 100%;
    height:900;
    padding: 0.5px 12px 20px 12px;
    margin: 0 auto;
    overflow: auto;
    margin-bottom: 10px;
}

p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
    position: relative;
    color: #BA9977;
    text-align: left;
}
</style>
