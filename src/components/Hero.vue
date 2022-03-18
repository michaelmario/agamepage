<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 col-sm-12 textSlide">
        <div>
          <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
          >
            <b-carousel-slide caption="ATELIER CHANTIER D'INSERTION">
               <div class="card bgCard">                
                <div class="card-body">
                  Particuliers, entreprises, collectivités, entrez dans une
                  démarche de développement durable
                </div>
              </div>
            </b-carousel-slide>
            <b-carousel-slide caption="AGIR EN FAVEUR DE L'ENVIRONEMENT">
              <div  class="card bgCard">   
                <div class="card-body">
                  Particuliers, entreprises, collectivités, entrez dans une
                  démarche de développement durable
                </div>
              </div>
            </b-carousel-slide>
            <b-carousel-slide caption=" l'ASSOCIATION AGAME">
              <div class="card bgCard">                         
                <div class="card-body">
                  Particuliers, entreprises, collectivités, entrez dans une
                  démarche de développement durable
                </div>
              </div>
            </b-carousel-slide>
            <b-carousel-slide caption="DON DE MATÉRIEL INFORMATIQUE">
              <div class="card bgCard">
                 <div class="card-body">
                  Particuliers, entreprises, collectivités, entrez dans une
                  démarche de développement durable
                </div>
              </div>
            </b-carousel-slide>
          </b-carousel>
        </div>
      </div>
      <div class="col-md-6 col-sm-12 wrapvideo">
        <div class="fullscreen">
          <Video />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Video from "@/components/Video.vue";

export default {
  name: "Hero",
  components: {
    Video,
  },
};
</script>
<style scoped>
.carousel-fade {
  top: 120px;
  left:0px;
  right:50px;
}

.bgCard{
 background-color: rgba(0, 0, 0, 0.555);
 color:rgb(235, 232, 228);
 font-weight: bolder;
 width:18rem;
 margin:0 auto;
}
</style>
