<template>
<section class="apply-now" id="apply">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 align-self-center">
          <div class="row">
            <div class="col-lg-12">
              <div class="item">
                <h3>ECONOMIE SOCIAL ET SOLIDAIRE</h3>
                <video  controls autoplay class="EsVideo">                
                <source src="/images/CRESS.mp4" type="video/mp4">
                </video>
                <div class="main-button-red">
                  <div class="scroll-to-section"><a href="#contact">Nous Contacter!</a></div>
              </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="item">
                <h3>URGENCES NUMÉRIQUES SCOLAIRES</h3>
                 <video controls class="EsVideo">                
                <source src="/images/Réunion.mp4" type="video/mp4">
                </video>
                <div class="main-button-yellow">
                  <div class="scroll-to-section"><a href="#contact">Nous contacter!</a></div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="accordions is-first-expanded">
            <article class="accordion">
                <div class="accordion-head is-open">
                    <h3>Questions et réponses</h3>
                    <span class="icon">
                        <i class="icon fa fa-chevron-right"></i>
                    </span>
                </div>
                <div class="accordion-body" style="height: 120px;">
                    <div class="content">
                     <p>Que faire de votre ancien PC, trop obsolète pour être donné ou vendu, ou hors d’usage ?</p>
                      <p>Ne jetez pas le matériel encore fonctionnel : donnez-le à l'AGAME.
Vous avez beau considérer dédaigneusement votre vieux PC comme désormais inutile, mais s’il fonctionne encore, il pourrait encore servir à d’autres. Autant le confier à une association de réemploi tel AGAME qui saura le dépoussiérer, lui donner une nouvelle jeunesse. L'AGAME se charge de récupérer votre vieux matériel pour le confier à des associations, des écoles, des personnes exclues du numérique et à des organismes s’occupant de pays en voie de développement….</p>
                    </div>
                </div>
            </article>
            <article class="accordion">
                <div class="accordion-head">
                    <span>Voulez-vous acheter un ordinateur de qualité qui respecte votre budget?</span>
                    <span class="icon">
                        <i class="icon fa fa-chevron-right"></i>
                    </span>
                </div>
                <div class="accordion-body">
                    <div class="content">
                        <p>Etiam posuere metus orci, vel consectetur elit imperdiet eu. Cras ipsum magna, maximus at semper sit amet, eleifend eget neque. Nunc facilisis quam purus, sed vulputate augue interdum vitae. Aliquam a elit massa.<br><br>
                        Nulla malesuada elit lacus, ac ultricies massa varius sed. Etiam eu metus eget nibh consequat aliquet. Proin fringilla, quam at euismod porttitor, odio odio tempus ligula, ut feugiat ex erat nec mauris. Donec viverra velit eget lectus sollicitudin tincidunt.</p>
                    </div>
                </div>
            </article>
            <article class="accordion">
                <div class="accordion-head">
                    <span>Quelles différences entre réemploi et recyclage ?</span>
                    <span class="icon">
                        <i class="icon fa fa-chevron-right"></i>
                    </span>
                </div>
                <div class="accordion-body">
                    <div class="content">
                        <p>Ut vehicula mauris est, sed sodales justo rhoncus eu. Morbi porttitor quam velit, at ullamcorper justo suscipit sit amet. Quisque at suscipit mi, non efficitur velit.<br><br>
                        Cras et tortor semper, placerat eros sit amet, porta est. Mauris porttitor sapien et quam volutpat luctus. Nullam sodales ipsum ac neque ultricies varius.</p>
                    </div>
                </div>
            </article>
            <article class="accordion last-accordion">
                <div class="accordion-head">
                    <span>Vous avez un appareil à faire réparer ? Passez nous voir à notre atelier !</span>
                    <span class="icon">
                        <i class="icon fa fa-chevron-right"></i>
                    </span>
                </div>
                <div class="accordion-body">
                    <div class="content">
                        <p>Maecenas suscipit enim libero, vel lobortis justo condimentum id. Interdum et malesuada fames ac ante ipsum primis in faucibus.<br><br>
                        Sed eleifend metus sit amet magna tristique, posuere laoreet arcu semper. Nulla pellentesque ut tortor sit amet maximus. In eu libero ullamcorper, semper nisi quis, convallis nisi.</p>
                    </div>
                </div>
            </article>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "SecondPage",
};
</script>
<style>
.EsVideo{
    width:100%;
    height:235px;    
    top: 0;
    left: 0;
    z-index: -1;
}
</style>