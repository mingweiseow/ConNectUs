<template>
    <div id="comment">
        <div class="comment-box">
            <box-header v-bind:header=name></box-header>
            <p>{{message}}</p>
            <div class = 'comment' style = "float:right">
                <router-link :to="{name: 'reviewpage', params: {review_id:id} }" class='comments'>{{this.data.comments}} Comments</router-link>
                <vote 
                v-bind:style='voteStyle'
                v-bind:user_id="user_id"
                v-bind:id="id"
                v-bind:data="data"
                v-bind:type=type>
                </vote>
            </div>
        </div>
    </div>
</template>

<script>
import BoxHeader from '../Rating(MW)/BoxHeader.vue'
import Vote from './Vote.vue'
export default {
    props: {
        id : String,
        message : String,
        user_id : String,
        name : String,
        data : Object
    },
    data() {
        return {
            voteStyle: {
                float: 'left',
                'padding-right': '50px',
            },
            commentStyle: {
                'text-align': 'center'
            },
            type: "Reviews"
        }
    },
    components: {
        'box-header': BoxHeader,
        'vote': Vote,
    }
}
</script>

<style scoped>
#comment .comment-box {
    background: #E5E5E5;
    border-radius: 5px;
    height: auto;
    width: 100%;
    margin-bottom:0px;
    padding: 0.5px 12px 0px 12px;
    margin: 0 auto;
    overflow: auto;
    border: 2px solid black;
}

#comment p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
    position: relative;
}

.comments {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 39px;
    text-decoration-line: underline;
    color: black;
}
</style>
