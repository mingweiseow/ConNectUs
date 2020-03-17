<template>
<body id = "body">
    <b-container fluid class="bv-example-row">
     <b-row class="text-center">
     <b-col cols ="3">
        <div class = "usr">Username: mingwei</div>
        <div class = "yos">Year of Study: 2</div>
        <div class = "posts">Posts</div>
        <div class = "subs">Subscribers</div>
        <div class = "vertical"></div> 
        <button class = "logout">Logout</button>

    </b-col>
    <b-col cols="9">
        <div class ="module"> </div>
        <a class="a">Your Posts</a>
        <a class="b">Saved Posts</a>
        <div class ="c"></div>
        <div class="d">CS1010S in Y1S1</div>
        <a class="more">View More</a>

    </b-col>
  </b-row>
  </b-container>
  </body>
</template>


<script>
export default {

}
</script>

<style scoped>

#id{
    background-color: #E5E5E5;
}

.logout {
    position: absolute;
width: 100px;
height: 40px;
left: 215px;
top: 1000px;
background: #BA9977;
border-radius: 5px;
position: absolute;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;

/* identical to box height */


color: #FFFFFF;

}
.module {
position: absolute;
width: 1012px;
height: 771px;
left: 385px;
top: 190px;

background: rgba(196, 196, 196, 0.1);
}

.more {
    cursor: pointer;
    position: absolute;
width: 93px;
height: 27px;
left: 1262px;
top: 245px;

font-family: 'Poppins';
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
/* identical to box height */

text-decoration-line: underline;

color: #FFFFFF;


}
.a {
position: absolute;
cursor: pointer;
width: 103px;
height: 30px;
left: 385px;
top: 150px;

font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
text-decoration-line: underline;
color: #000000;
}

.b {
    cursor: pointer;
position: absolute;
width: 121px;
height: 30px;
left: 543px;
top: 150px;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* identical to box height */

text-decoration-line: underline;

color: #000000;
}

.c{
 position: absolute;
width: 971px;
height: 82px;
left: 405px;
top: 217px;

background: #C9B8A7;
}

.d {
position: absolute;
width: 255px;
height: 54px;
left: 438px;
top: 231px;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 54px;
/* identical to box height */


color: #FFFFFF;


}


.usr {
position: absolute;
width: 199px;
height: 30px;
left: 185px;
top: 428px;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* identical to box height */
color: #000000;
}

.yos {
position: absolute;
width: 153px;
height: 30px;
left: 210px;
top: 477px;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* identical to box height */
color: #000000;

}

.posts{
position: absolute;
width: 87px;
height: 30px;
left: 235px;
top: 526px;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* identical to box height */
color: #000000;
}

.subs {
position: absolute;
width: 151px;
height: 30px;
left: 205px;
top: 575px;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* identical to box height */
color: #000000;

}

.vertical { 
position: absolute;
width: 844px;
height: 0px;
left: 330px;
top: 650px;

border: 2px solid #E8E8E8;
transform: rotate(-90deg);
}
</style>