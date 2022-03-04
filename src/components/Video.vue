<template>
<div class="v-header container page">
  <div class="fullscreen-video-wrap">
    <video autoplay muted loop id="myVideo">
     <source src="/images/association.mp4" type="video/mp4" autoplay="" loop="">
    </video>
    </div>
    <div class="header-overlay"></div>
    <div class="header-content text-md-center">
      <h1>L'AGAME</h1>
      <p>L’insertion de ses salariés par l’activité économique et la formation </p>
      </div>
</div>
</template>
<script>
export default {
  name:'Video'  
}
</script>
<style  scoped>
*{
  box-sizing: border-box;
}
.v-header{
  height:80vh;
  display:flex;
  align-items:center;
  color:#fff;
}

.fullscreen-video-wrap{
  position:absolute; 
  margin-top:25px;
  left:0;
  width:100%;
  height:80vh;
  overflow:hidden;
  z-index:0;
}
.fullscreen-video-wrap video{
  min-height:100%;
  min-width:100%;
  
}
.header-overlay{
  height:83vh;
  position: absolute;
  margin:5px auto;
  left:0;
  width:98.8vw;
  z-index:10;
  background:#1d2eadad;
  opacity:0.85;
}
.header-content{
  z-index:2;
  margin-left:3%; 
  padding-top:50px;
}
.header-content h1{ 
margin-top:80px; 
  font-size:80pt;
  margin-bottom:0;
  color:green;  
  font-family: 'Tangerine', serif;
  text-shadow: 4px 4px 4px rgb(15, 15, 15);
}
.header-content p{
  margin-top:15px;
  display:block;
  padding-bottom:3rem;
  width:95%;
  color:#fff;
  line-height:1.5;
  font-size:50pt; 
  font-family: 'Tangerine', serif;
  text-shadow: 4px 4px 4px rgb(12, 11, 11);
}
.btn{
  color:#fff;  
  background:#a04a9d;
  color:#fff;
  font-size:1.2rem;
  padding: 1rem 2rem;
  text-decoration: none;
}
.section{
  padding:20px 0;
}
.section-b{
  background:#333;
  color:#fff;
}
@media(max-width:960px){
  .container{
    padding-right:3rem;
    padding-left:3rem;
  }
  .header-overlay{
  width:90%;
  }
  .header-content{
  z-index:2;
  margin-left:5%;
}
.header-content p{
font-size:25pt;
}
.header-content h1{
  font-size:50pt;
}
}
/* #myVideo {
     margin-top:-130px;
    position:absolute; 
    right: 0;
    bottom:0;   
    min-width:100%; 
   min-height:100%;
   z-index:3;
  } */
</style>