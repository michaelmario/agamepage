<template>
  <div class="accordions is-first-expanded">
    <h3 class="text-warning">Questions et réponses</h3>
      <b-button  block v-b-toggle.collapse-1 class="m-1">
      <div class="dFlex">
        <span class="text-white ">
          Voulez-vous acheter un ordinateur de qualité qui respecte votre
          budget?
        </span>
        <span class="iconPadding">
          <i class="icon fa fa-chevron-right"></i>
        </span>
      </div>
    </b-button>
    <b-collapse id="collapse-1" class="mt-2">
      <div class="accordion-body" style="height: auto">
        <div class="content">
          <p>
            Choisissez un ordinateur reconditionné par l'AGAME et ayez
            l’assurance que :
          </p>
          <ol>
            <li>Toutes les anciennes données ont été effacées</li>
            <li>
              Toutes les réparations, le nettoyage et les tests ont été
              effectués
            </li>
            <li>
              Tous les logiciels Microsoft® installés sont authentiques, dont
              Windows 10 pro®.
            </li>
            <li>
              Votre achat aide l'association à fonctionner et à réussir ses
              missions d'insertion.
            </li>
          </ol>
        </div>
      </div>
    </b-collapse>
    <b-button block v-b-toggle.collapse-2 class="m-1 ">
      <div class="dFlex">
        <span class="text-white ">
          Quelles différences entre réemploi et recyclage ?
        </span>
        <span class="iconPadding">
          <i class="icon fa fa-chevron-right"></i>
        </span>
      </div>
    </b-button>
    <b-collapse id="collapse-2" class="mt-2">
      <div class="accordion-body" style="height: auto">
        <div class="content">
          <p>
            Quand on parle de recyclage, il faut bien comprendre que c’est la
            dernière phase du cycle de vie des ordinateurs. Les appareils
            collectés sont démantelés afin de séparer les composants. Ceux-ci
            sont alors triés pour en extraire les matières qui peuvent être
            réutilisées. Ce qui ne peut être revalorisé est détruit et enfoui.
          </p>
          <p>
            En revanche, le réemploi se déroule bien avant le recyclage : il
            prolonge le cycle de vie des ordinateurs. Les appareils collectés
            sont remis à niveau au lieu d’être démantelés, et sont redistribués
            aux particuliers et organismes à des prix équitables. Le
            reconditionnement est généralement effectué par des organismes à
            mission sociale, comme l'AGAME.
          </p>
        </div>
      </div>
    </b-collapse>
    <b-button block v-b-toggle.collapse-3 class="m-1">
      <div class="dFlex">
        <span class="text-white ">
          Vous avez un appareil à faire réparer ? Passez nous voir à notre
          atelier !
        </span>
        <span class="iconPadding">
          <i class="icon fa fa-chevron-right"></i>
        </span>
      </div>
    </b-button>
    <b-collapse id="collapse-3" class="mt-2">
      <div class="accordion-body" style="height: auto">
        <div class="content">
          <p>
            Nos spécialistes vous offrent des services techniques sur place à
            notre atelier au 49 bd de Verdun, résidence MESSIDOR au PORT, 79420
            (rond point collège TITAN). Confiez-nous vos appariels informatique
            afin de maintenir votre matériel dans un parfait état de
            fonctionnement, tout en le faisant évoluer grâce aux mises à jour
            des logiciels et du matériel qui vous sont nécessaires.
          </p>

          <p>
            De plus à l'AGAME, le diagnostic de panne et le devis de réparation
            sont gratuits. Vous ne donnez suite que si vous le souhaitez.
          </p>
        </div>
      </div>
    </b-collapse>
     <b-button
      v-b-toggle.collapse-4
      block class="m-1">
      <div class="dFlex">
        <span class="text-white">
          Que faire de votre ancien PC , trop obsolète 
          ou hors d’usage ?
        </span>
        <span class="iconPadding">
          <i class="icon fa fa-chevron-right"></i>
        </span>
      </div>
    </b-button>
    <b-collapse id="collapse-4"  class="mt-2">
      <div class="accordion-body" style="height: auto">
        <div class="content">
          <p>
            Ne jetez pas le matériel encore fonctionnel : donnez-le à l'AGAME.
            Vous avez beau considérer dédaigneusement votre vieux PC comme
            désormais inutile, mais s’il fonctionne encore, il pourrait encore
            servir à d’autres. Autant le confier à une association de réemploi
            tel AGAME qui saura le dépoussiérer, lui donner une nouvelle
            jeunesse. L'AGAME se charge de récupérer votre vieux matériel pour
            le confier à des associations, des écoles, des personnes exclues du
            numérique et à des organismes s’occupant de pays en voie de
            développement….
          </p>
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
    };
  },
};
</script>
<style scoped>
.dFlex{
    display:flex;
}
.iconPadding{
padding-top:20px;
margin-left:24px;
}

@media(max-width:678px){
    .dFlex{
        flex-direction:column;
    }
}
</style>
