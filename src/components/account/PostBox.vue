<template>
    <div id="post">
        <div class="post-box">
            <router-link class="view" :to="{name:'subthreadpage', params: {subthread_id:subthread_id, user_id:user_id} }">View Post</router-link>
            <p>{{comment}}</p>
            <p>Title: {{title}}</p>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        comment: String,
        title: String,
        subthread_id: String,
        user_id: String,
    }
}
</script>

<style scoped>
#post .post-box {
    background: #C9B8A7;
    border-radius: 5px;
    width: 80%;
    padding: 0.5px 12px 20px 12px;
    margin: 0 auto;
    overflow: auto;
    margin-bottom: 10px;
    
    
}

#post p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
    position: relative;
    color: #ffffff;
    text-align: left;
}

#view-post-btn {
   font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
    position: relative;
    color: #ffffff;
    text-align: left;
}

.view {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 39px;
    text-decoration-line: underline;
    color:#FFF;
    float: right
}

</style>
