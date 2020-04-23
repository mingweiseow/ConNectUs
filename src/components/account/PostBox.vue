<template>
    <div id="post">
        <div class="post-box">
            <a id = "button"> <button style = "background-color: #C9B8A7 ; color: white; border:none; float: right; position : relative; z-index: 99;">View</button></a>
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
    }
   // data() {
     //   return {
            //comment: "",
            //name: "mingwei:",
       // }
        
   // },
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

</style>
