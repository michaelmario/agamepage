<template>
  <div id="app">   
    <Header />
   <Video /> 
   <FirstPage /> 
   <SecondPage /> 
   <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Video from './components/Video.vue'
import FirstPage from './components/FirstPage.vue'
import SecondPage from './components/SecondPage.vue'
import Footer from './components/Footer.vue' 
export default {
  name: "App",
  components: {
    Header,
    Video,
    FirstPage,
    SecondPage,
    Footer
    
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   color: #2c3e50;
   background-color:#cccccc96;
}
/*.wrap-icon-header {
      padding: 20px;
      margin-left:13%;
    }
.icon-header-item {
  position: relative;
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
  margin-left:5px;
}
.badge{
  position:absolute;
  top:-18px;  
  left:21px; 
  color:#ffffff;
}
.navbarProduct{
  margin:10px 0px;
  padding-top:10px;  
  .overviewProduct li{
  display: inline-block;
  list-style: none;
  margin-right:10px;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
@media (max-width: 991px) {
  .wrap-header-mobile {
    display: flex;
  }
}
 @media (max-width: 768px) {
    .mobileContainer{
      margin-top:-153px;
    }
    .navbar-collapse {
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
    background-color: #000;
    color: #ffffff;
    z-index: 100;
}
    .bgBlack {
      background-color: black;
    }
    .nav-link {
      color: #ffffff !important;
    }
    .navLink {
      color: black !important;
      font-family: Poppins-Regular;
       font-size: 15px;
      line-height: 1.2;
      margin-right:10px;
      margin-bottom: 10px;
    }
    .wrap-icon-header {
      background-color: rgba(0, 0, 0, 0.664);
      color: #ffffff;
      margin-top: -10px;
      padding: 20px;     
    }
    .modal {
      top:20%;
    }
    .modal-dialog{
      max-width:90% !important;
      height:auto;
     }
     .modal-title {
       font-size: 15px;
       line-height:7;
     }
     .titleOverview {
      height: 322px;
     }
     }*/
</style>
