<template>
    <div>
        <div class = 'modulesummary'>
            <div id = 'modulebox'>
                {{title}}
                </div>
                <div class = "post">
                    <div id = 'makereview'>
                        <router-link to="/makereview" exact><a> Make a Review </a></router-link>
                    </div>
                    <div id = 'askquestion'>
                        <router-link to="/askquestion" exact><a> Ask a Question </a></router-link>
                    </div>
                </div>
        </div>
    </div>  
</template>

<script>
export default {
    props: {
        module_id: String
    },
    data() {
        return {
            title: "Module Summary"
        }
    }
}
</script>

<style scoped>

.modulesummary {
    padding-left: 46px;
    margin: auto;
    display: flex;
}

#modulebox{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    height: auto;
    font-size: 40px;
    padding: 10px 10px 10px 10px;
    width: auto;
    background: #C9B8A7;
    border-radius: 5px;
    color: #FFFFFF;
}

.post {
    margin-left: 30px;
    display: flex;
}

#makereview {
    margin: auto;
}

#askquestion {
    margin: auto;
}

#makereview a {
    text-decoration-line: underline;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
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

