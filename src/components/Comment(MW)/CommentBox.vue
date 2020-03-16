<template>
    <div id="comment">
        <div class="comment-box">
            <review-header v-bind:name='name' v-bind:style='headerStyle'></review-header>
            <p>{{comment}}</p>
            <div style = "float:right">
                <a href="" class='comments'>0 Comments</a>
                <vote v-bind:style='voteStyle'></vote>
            </div>
        </div>
        <comment-line v-bind:style='commentStyle'></comment-line>
    </div>
</template>

<script>
import ReviewHeader from '../Rating/ReviewHeader.vue'
import CommentLine from './CommentLine.vue'
import Vote from './Vote.vue'
export default {
    data() {
        return {
            comment: "This mod is incredibly tough. You need to be mentally prepared to spend hours coding and learning from external sources. Prof John did an amazing job in teaching the basics. However, just watching his lectures are insufficient for you to fully comprehend the python concepts.",
            name: "mingwei:",
            headerStyle: {
                fontSize: '40px',
            },
            voteStyle: {
                float: 'left',
                'padding-right': '50px'
            },
            commentStyle: {
                'text-align': 'center'
            }
        }
    },
    methods: {
        upvote: function() {}
    },
    components: {
        'review-header': ReviewHeader,
        'comment-line': CommentLine,
        'vote': Vote,
    }
}
</script>

<style scoped>
#comment .comment-box {
    background: #E5E5E5;
    border-radius: 5px;
    width: 80%;
    padding: 0.5px 12px 20px 12px;
    margin: 0 auto;
    overflow: auto;
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
    color: black
}
</style>
