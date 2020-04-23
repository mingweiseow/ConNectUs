<template>
        <div class="post-box">
            <router-link :to="{name:'summary', params: {module_id:this.mod_id, } }" class='readmore'>Read more</router-link>
            <p>{{mod_name}}</p>
    </div>
</template>


<script>
export default {
    props: {
        mod_id: String,
        mod_name:String,
        user_id: String
    }
}
</script>
<style scoped>
.readmore {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 39px;
    text-decoration-line: underline;
    color: #BA9977;
    float: right
}

.post-box {
    background: rgba(196, 196, 196, 0.2);
    border: solid #BA9977;
    border-radius: 5px;
    width: 100%;
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
