<template>
  <section class="bannerPage" id="bannerPage">
    <div class="container-fluid">
      <div class="row">
          <div class="col-mb-12">
       
        <div id="buttonDisplay">
          <div class="firstBox">
            <b-button v-on:mouseover="firstInfo" variant="success"
              >CAF</b-button
            >
            <div class="card cardCaf mt-2 " id="firstData" v-if="cafInfo == true"  data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-easing="ease-out-cubic">              
              <div class="card-body">
                <h6 class="card-title ml-3 text-warning"> Relais de la CAF</h6>
              Aider,informer et d’accompagner les allocataires dans leur démarches administratives via internet
              </div>
              
             </div>
          </div>
          <div class="secondBox">
               <b-button v-on:mouseover="adminInfo" variant="success">Administration</b-button>            
            <div class="card cardCaf mt-2" v-if="adInfo == true" data-aos="fadeIn"
              data-aos-duration="3000"
              data-aos-easing="ease-out-cubic">
               <div class="card-body">
                <h6 class="card-title ml-3 text-warning">Point  Névralgique</h6>
               <p class="text-white"> Et cordination de nos opérations .Vous pouvez nous joindre aux heures régulières de bureau du lundi au vendredi de 8 h 30 à 12 h et de 13 h à 16 h 30 à l'exception des jours fériés.</p> 
               </div> 
               <div class="card-footer">
              <b-button  variant="success">Voir plus ...</b-button>
              
              </div>                          
              </div>
              </div>
          <div class="thirdBox">
               <b-button v-on:mouseover="storeInfo" variant="success"
              > Ordi Reconditionné</b-button
            >
             <div class="dialogBox">
              <div class="card cardCaf mt-2" v-if="boutiqueInfo == true" data-aos="fade-left"
              data-aos-duration="3000"
              data-aos-easing="ease-out-cubic">
              <div class="card-body">
                <h6 class="card-title ml-3 text-warning">Accueil chaleureux </h6>
                Pour vous aider à donner une nouvelle vie à votre  ordinateur portable.<br> Vous pouvez acheter un reconditionné
              </div>             
              </div>              
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
</template>
<script>
export default {
  name: "PageDinamic",
  data() {
    return {
      count: 0,
      x: 0,
      y: 0,
      cafInfo:true,
      adInfo: false,
      boutiqueInfo: false,
    };
  },
  methods: {
    firstInfo: function () {
      this.cafInfo = !this.cafInfo;
      this.boutiqueInfo = false;
      this.adInfo = false;
      let cardcaf =document.getElementById('firstData');      
      console.log(cardcaf);
     
      
     
    },
    adminInfo: function () {
      this.adInfo = !this.adInfo;
      this.cafInfo = false;
      this.boutiqueInfo = false;
    },
    storeInfo: function () {
      this.boutiqueInfo = !this.boutiqueInfo;
      this.adInfo = false;
      this.cafInfo = false;
    },
   
  },
};
</script>
<style>
.EsVideo {
  width: 100%;
  height: 235px;
  top: 0;
  left: 0;
  z-index: -1;
}

#buttonDisplay {
  width: 100%;
  margin-top: 80px;
  margin-left: 225px;
  margin-bottom: 10px;
  height: 20vh;
  display: flex;
  z-index: 100;
}
.firstBox {
  width: 18rem;
  margin-top: 1px;
  margin-right: 200px;
  margin-left:50px;
}
.secondBox {
  width: 18rem;
  margin-right: 100px;
  margin-left: 200px;
}
#buttonDisplay button {
  margin-left: 130px;
  margin-right: 100px;
}
.cardCaf {
  width: 18rem;
  height:auto;
  margin-top: -15px;
  color:#fff;
  background-color:rgba(0, 0, 0, 0.808) !important ;
}

.dialogBox {
  display: flex;
}
@media(max-width:768px){
  #buttonDisplay {
   margin-top: 0px!important;
   margin-left:-28px !important; 
    
}
}
@media(width:1280px){
  #buttonDisplay {
  width: 80%;
  margin-top: 50px;
  margin-left: 125px;
  margin-bottom: 10px;
  height: 20vh;
  display: flex;
  z-index: 100;
}
.firstBox {
  margin-right: 50px;
  margin-left:50px;
}
.secondBox {
  width: 18rem;
  margin-right: 100px;
  margin-left: 10px;
}

}
</style>
