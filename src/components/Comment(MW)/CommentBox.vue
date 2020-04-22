<template>
    <div id="box">
        <div style="margin-left: 30px;white-space: nowrap; text-align: center">
            <profilepic></profilepic>
            <p>{{name}}</p>
        </div>
        <div class = "comment-box">
            <div class="message">
                <p>{{message}}</p>
            </div>
                <div style="float:right">
                    <vote
                    v-bind:style='voteStyle'
                    v-bind:id="id"
                    v-bind:type="type"
                    v-bind:user_id="user_id"
                    v-bind:data="data"
                ></vote>
                </div>
            </div>
        </div>
</template>

<script>
import ProfilePicture from './ProfilePicture.vue'
import Vote from './Vote.vue'
export default {
    props: {
        message: String,
        id: String,
        name: String,
        type: String,
        user_id: String,
        data: Object,
    },
    data() {
        return {
            voteStyle: {
                "margin-right": "70px"
            },
        }
    },
    components: {
        'vote' : Vote,
        'profilepic' : ProfilePicture
    }
}
</script>
<style scoped>
#box {
    display: flex;
    width: 95%;
}
.message {
    margin: 20px 50px 0px 50px;
}

.comment-box {
    width:100%;
    height: 200px;
}

p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
}

</style>
