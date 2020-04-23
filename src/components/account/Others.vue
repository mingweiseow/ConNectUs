<template>
<body id = "body">
    <b-container fluid class="bv-example-row">
     <b-row class="text-center">
     <b-col cols ="3">
        <div class = "usr">Username: John Doe</div>
        <div class = "yos">Year of Study: 2</div>
        <div class = "posts">Posts: 2</div>
        <div class = "subs">Subscribers: 36</div>
        <div class = "vertical"></div> 
        <button class = "subscribe">Subscribe</button>
        <router-link to="/otheraccount" div class = "chat">Chat with John Doe</div></router-link>

    </b-col>
    <b-col cols="9">
        <div class ="module"> </div>
        <a class="a">Posts</a>
        <div class ="c"></div>
        <div class="d">BT1101 in Y1S1</div>
        <a class="more">View More</a>
        <div class ="e"></div>
        <div class="f">CS1010S in Y1S1</div>
        <a class="more_">View More</a>
        

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

.chat{
    cursor: pointer;
    position: absolute;
width: 176px;
height: 27px;
left: 183px;
top: 730px;

font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
/* identical to box height */

text-decoration-line: underline;

color: #BA9977;


}
.subscribe {
    position: absolute;
width: 159px;
height: 40px;
left: 194px;
top: 650px;
background: #C9B8A7;
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
cursor: pointer;
/* identical to box height */

text-decoration-line: underline;

color: #FFFFFF;


}
.a {
    cursor: pointer;
position: absolute;
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
position: absolute;
width: 121px;
height: 30px;
left: 543px;
top: 150px;

font-family: 'Poppins', sans-serif;
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

.e {
    position: absolute;
width: 971px;
height: 82px;
left: 405px;
top: 322px;

background: #C9B8A7;
}

.f {
    position: absolute;
width: 255px;
height: 54px;
left: 431px;
top: 335px;

font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 54px;
/* identical to box height */


color: #FFFFFF;

}

.more_ {
    position: absolute;
width: 93px;
height: 27px;
left: 1262px;
top: 345px;
cursor: pointer;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
/* identical to box height */

text-decoration-line: underline;

color: #FFFFFF;


}
.usr {
position: absolute;
width: 199px;
height: 30px;
left: 185px;
top: 400px;
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
    cursor: pointer;
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