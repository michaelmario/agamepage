<template>
<div class="v-header  page">
  <div class="fullscreen-video-wrap">
    <video  muted autoplay controls loop   id="myVideo">
     <source src="/images/CRESS.mp4" type="video/mp4" autoplay="" loop="">
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
  height:77vh;
  overflow:hidden;
  z-index:0;
}
.fullscreen-video-wrap video{
  min-height:100%;
  max-width:100%;
  
}
.header-overlay{
  height:80vh;
  position: absolute;
  margin:5px auto;
  left:0;
  width:100%;
  z-index:10;
  background:#1dad5038;
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
video {
    width: 100%;
    object-fit: cover;
    height: 80vh;
    padding: 25px;
    margin-top:10px;
}

 #myVideo {
     position:absolute;
     top:50PX; 
    right: 0;
    bottom:0;   
    z-index:3;
  } 
  #meetings {
     padding-top:0px !important; 
     margin-top:0px;
}
  @media(max-width:768px){
    .header-content p{
        font-size:25px ! important;
        text-align: center;

    }
    .header-content h1{
        font-size:35pt ! important;
    }
    .v-header{
    height:49vh !important;
    }
    .fullscreen-video-wrap{
        left:21px;
        margin-top:18px;
        height:43vh;
    }
    .header-overlay{
      height:49VH;
      margin:0 !important;
    }
    #myVideo{
     top:0 !important;
     right:36px;
    }
     #meetings {
     padding-top:0px !important; 
     margin-top:0px;
}
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
</style>