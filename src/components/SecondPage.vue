<template>
  <section class="apply-now" id="apply">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 align-self-center">
          <div class="row">
            <div class="col-lg-12">
              <div class="item">
                <h3>ECONOMIE SOCIAL ET SOLIDAIRE</h3>
                <video controls  class="EsVideo">
                  <source src="/images/CRESS.mp4" type="video/mp4" />
                </video>
                <div class="main-button-yellow">
                  <div class="scroll-to-section">
                    <a href="#contact">Nous Contacter!</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="item">
                <h3>URGENCES NUMÉRIQUES SCOLAIRES</h3>
                <video controls class="EsVideo">
                  <source src="/images/Réunion.mp4" type="video/mp4" />
                </video>
                <div class="main-button-yellow">
                  <div class="scroll-to-section">
                    <a href="#contact">Nous contacter!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
        <Accordion />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Accordion from './Accodion.vue'
export default {
  name: "SecondPage",
  components:{
    Accordion
  }
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
</style>
