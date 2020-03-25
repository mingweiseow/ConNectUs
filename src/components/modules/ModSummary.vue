<template>
<div>
    <div class = "modulesummary">
        <div id = 'modulebox'>
            <h1>{{title}}</h1>
        </div>
        <div id = 'makereview'>
            <router-link to="/makereview" exact><a> Make a Review </a></router-link>
        </div>
        <div id = 'askquestion'>
            <router-link to="/askquestion" exact><a> Ask a Question </a></router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {

    data() {
        return {
            title: "Module Summary"
        }
    }
}
</script>

<style scoped>

.modulesummary {
    display: flex;
}

#modulebox h1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    height: 80px;
    font-size: 30px;
    line-height: 60px;
    margin-left: 46px;
    width: 300px;
    background: #C9B8A7;
    border: 5px solid #C9B8A7;
    box-sizing: border-box;
    border-radius: 5px;
    color: #FFFFFF;
    padding:2%;
}

#makereview a {
    text-decoration-line: underline;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    margin-left: 340px;
    color: #BA9977;
    font-size: 28px;

    
}

#askquestion a {
    text-decoration-line: underline;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    margin-left: 20px;
    color: #BA9977;
    font-size: 28px;
}
</style>

