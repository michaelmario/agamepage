<template>
 <div class="container-fluid mt-5 py-5">
      <b-jumbotron class="ApropoImage" header="ATELIER CHANTIER D'INSERTION" lead="">
    <p class="titlePropos">L'ASSOCIATION AGAME</p>
    
    </b-jumbotron>
     <div class="row">
         <div class="col-md-1 col-sm-12">
           <div class="social-link-horizontal mt-5">
               <div class="buttonSocial colorFacebook">
                   <i class="fa fa-facebook"></i>
               </div>
                <div class="buttonSocial colorTwitter">
                    <i class="fa fa-twitter"></i>
                </div>
                 <div class="buttonSocial colorLinkedin">
                     <i class="fa fa-linkedin"></i>
                 </div>
                  <div class="buttonSocial colorwhatsapp">
                      <i class="fa fa-whatsapp"></i>
                  </div>
                   <div class="buttonSocial"></div>
            </div>  
         </div>
         <div class="col-md-8">
           <div class="card  mt-5">
               <h1>Rédaction web : 5 astuces pour une conclusion réussie</h1>
               </div>  
          </div> 
         <div class="col-md-3">
          <div class="boxInfo  mt-5">
              
              </div>   
          </div> 
     </div> 
     </div>     
</template>
<script>
export default {
    name:"Apropos"
}
</script>
<style scoped>
.ApropoImage{
   background-image: url('/images/agamed-min.jpg');
    height:550px;
    margin-top:-70px;
    padding:115px;
   background-size: cover;
  object-fit: cover;
  color:orange;
  font-weight:bolder;
  font-family: 'Tangerine', serif;
  text-shadow: 4px 4px 4px rgb(12, 11, 11);
}
.titlePropos{
color:#fff;
font-size:2rem;
text-align:center;
font-weight:bolder;
}
.boxInfo{
    width:100%;
    height:350px;
    border:5px solid #002b4e; 
    box-shadow: 0 3px 5px 0 rgb(0 1 1 / 10%);
    background-color: #fff;

}
.social-link-horizontal{
   text-align: center;
   display:flex;
   flex-direction: column;
}
.buttonSocial{
   width:50px;
   height:50px;
   margin-top:10px;
}
.colorFacebook{
  background-color: #3b5998;  
}
.colorTwitter{
    background-color: #55acee;
}
.colorLinkedin{
    background-color: #0e76a8;
}
.colorwhatsapp{
    background-color:#25d366;

}
i{
    color:antiquewhite !important;
    padding:1Opx !important;
    line-height: 2;
    
}
 @media(max-width:768px){
  .ApropoImage{
      padding:20px;
      margin-top:4px;
      height:158px;
  }
  h1{
       font-size:1.5rem;
   }
   .titlePropos{
       font-size:1.5rem;
   }  
   .social-link-horizontal{
       flex-direction: row;
       justify-content: center;
       margin-top: -52px !important;
   }
 }
</style>