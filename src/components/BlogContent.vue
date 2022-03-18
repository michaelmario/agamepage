<template>
  <div class="row">
    <div class="col-md-9 col-lg-9 col-sm-12">
      <div class="row">
        <div class="col-md-6 col-lg-6 col-sm-6 mt-5 mb-5 border-bottom border-dark">
          <div class="imgBlog"  data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-easing="ease-out-cubic">
            <img src="images/maitrisez.png" alt="blogImage" />
          </div>
          <div class="btnDowload">
          <b-button  class="btnText" variant="light" @click="getEmail()">Télechargement</b-button>
          </div>
        </div>
        <div
          class="col-md-6 col-lg-6 col-sm-6 py-6 mt-5 mb-5 border-bottom border-dark"
        >
          <h1>Maîtrisez Votre PC</h1>
          <p>
            De nos jours, tout le monde doit savoir comment utiliser un
            ordinateur. et comment le garder en bon état si vous n'avez pas
            appris la base et comment effectuer des opérations telles que copier
            coller
          </p>
          <ul>
            <li>Sélection continue ou discontinue de fichiers</li>
            <li>Manipulation de fenêtres</li>
            <li>Comment vous repérer dans votre ordinateur</li>
            <li>Comment créer une arborescence</li>
          </ul>
          <h6>Alors cette mini formation est faite pour vous.</h6>
          <p>
            tout d'abord, vous devez penser que l'écran de votre ordinateur est
            un bureau sur lequel vous avez beaucoup de fichiers. si vous
            souhaitez classer ces fichiers dans l'ordre,et ensuite les placez
            sur une étagère.
          </p>
          <p>
            vous devrez placer certains fichiers par leur nom dans un dossier
            dont le nom vous rappellera que ces fichiers s'y trouvent
          </p>
          <div class="fb-share-button" 
                data-href="https://agamepage-c7bf4.web.app/" 
                 data-layout="button_count">
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3 col-lg-3">
      <div class="sidebar">
        <div class="section-title">
          <h2>Articles populaires</h2>
        </div>
        <div class="trend-entry d-flex">
          <div class="number align-self-start">01</div>
          <div class="trend-contents">
            <h2>
              <a href="blog-single.html">Maîtrisez Votre PC</a>
            </h2>
            <div class="post-meta">
              <span class="d-block"
                ><a href="#">Achille Mario</a> </span
              >
              <span class="date-read"
                >mars 14 <span class="mx-1">•</span> 3 min read
                <span class="icon-star2"></span
              ></span>
            </div>
          </div>
        </div>
        <div class="trend-entry d-flex">
          <div class="number align-self-start">02</div>
          <div class="trend-contents">
            <h2>
              <a href="blog-single.html"
                >Apprendre les bases de l'informatique</a
              >
            </h2>
            <div class="post-meta">
              <span class="d-block"
                ><a href="#">Achille Mario</a></span
              >
              <span class="date-read"
                >mars 14 <span class="mx-1">•</span> 3 min read
                <span class="icon-star2"></span
              ></span>
            </div>
          </div>
        </div>
        <p>
          <a href="#" class="more"
            >Tout afficher<span class="icon-keyboard_arrow_right"></span
          ></a>
        </p>
      </div>
    </div>
    <div class="col-md-9 col-lg-9 col-sm-12">
      <div class="row">
        <div class="col-md-6 border-bottom border-dark">
          <div class="imgBlog">
            <img src="images/maitrisePc.png" alt="blogImage"  data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-easing="ease-out-cubic"/>
          </div>
          <div class="btnDowload">
           <b-button  class="btnText" variant="light" @click="getEmail()">Télechargement</b-button>
          </div>
        </div>
        <div class="col-md-6 py-6 mt-5 border-bottom border-dark">
          <h1>Apprendre les bases de l'informatique</h1>
          <p>
            Vous avez l’impression d’avoir été parachuté dans l’informatique
            sans apprendre les bases ?
          </p>
          <p>
            Vous ne savez pas réaliser des opérations comme le copier coller, la
            sélection de fichier continue ou discontinue, la manipulations des
            fenêtres ?
          </p>
          <p>
            Vous ne savez pas vous repérer dans votre ordinateur ou ne savez pas
            créer une arborescence ?
          </p>
          <p>
            Alors cette mini formation est faites pour vous. Cliquez sur le
            bouton ci-dessous pour vous inscrire c’est gratuit.
          </p>
          <div class="fb-share-button" 
                data-href="https://agamepage-c7bf4.web.app/" 
                 data-layout="button_count">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
export default {
  name: "blogcontent",
  methods:{
    getEmail:function(){
    Swal.fire({
  title: "Envoyer votre e-mail ",
  input: 'text',
  inputAttributes: {
    autocapitalize: 'off'
  },
  showCancelButton: true,
  confirmButtonText: 'Envoyer',
  showLoaderOnConfirm: true,
  preConfirm: (login) => {
    return fetch(`//api.github.com/users/${login}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .catch(error => {
        Swal.showValidationMessage(
          `Request failed: ${error}`
        )
      })
  },
  allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: `${result.value.login}'s avatar`,
      imageUrl: result.value.avatar_url
    })
  }
})
    },

    /*addFBPost:function(){
    FB.api(
  '/100146359049504/feed',
  'POST',
  {"message":"TEST 2"},
  function(response) {
      // Insert your code here
  }
);
  }*/
  }
};
</script>
<style scoped>
.imgBlog{
  margin-top:-80px;

height:600px;
} 
.imgBlog > img {
  max-height: 520px !important;
}
.section-title {
  text-align: center;
}
.sidebar {
  margin-left: 10px;
  margin-top: 50px;
  width: 90%;
  height: auto;
  padding: 10px;
  background-color: rgb(248, 246, 244);
  border: 2px solid #000;
}
.trend-entry {
  margin-top: 10px;
}
.trend-contents h2 {
  font-size: 1rem;
}
.btnDowload{
  float:right;
  margin-top:-150px;
  position: relative;
  z-index: 100;
  
}
.btnText{
  color:green;
}
a{
  color: #000 ;
  margin-left:5px;
  line-height: 1;
}
a:hover{
  color:green ;
}
</style>
