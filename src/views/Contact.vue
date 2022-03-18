<template>
  <div class="container-fluid">
    <div class="bg-image">
      <div class="col-md-12">
        <h2 id="contactMe" class="">
          Nous Contactez
        </h2>
      </div>
      <div class="row">
        <div class="col">
          <div class="contact">
            <div class="container">
              <GmapMap
                :center="{ lat: -20.9323098, lng: 55.2927796 }"
                :zoom="15"
                map-type-id="terrain"
                style="width: 100%; height: 477px"
              >
                <GmapMarker
                  ref="myMarker"
                  :position="
                    google && new google.maps.LatLng(-20.9323098, 55.2927796)
                  "
                  :clickable="true"
                  :draggable="true"
                  @click="center = position"
                />
                />
              </GmapMap>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="container contact">
            <div class="row text-center">
              <div class="col-md-4 contactBox bg-warning">
                <p>
                  <i class="fa fa-envelope"></i>
                </p>
                <p class="text-green">agame.info.re</p>
              </div>
              <div class="col-md-4 bg-success contactBox">
                <p>
                  <i class="fa fa-map-marker"></i>
                </p>
                <p class="text-white">Le Port Réunion</p>
              </div>
              <div class="col-md-4 bg-dark contactBox">
                <p><i class="fa fa-phone"></i></p>
                <p class="text-white">+0262 189898</p>
              </div>
            </div>
            <hr class="w3-opacity" />
            <form>
              <div class="row">
                <div class="col-md-6 col-sm-12">
                  <div class="input-group input-group-lg">
                    <label class="input-group-text bg-success" for="inputGroupFile01"
                      >Nom</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="inputGroupFile01"
                      v-model="name"
                      name="Name"
                      required="required"
                    />
                  </div>
                </div>
                <div class="col-md-6 col-sm-12">
                  <div class="input-group input-group-lg">
                    <label class="input-group-text bg-success" for="inputGroupFile01"
                      >Email</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="inputGroupFile01"
                      v-model="email"
                      :onkeyup="cleanInput()"
                      name="Name"
                      required="required"
                    />
                  </div>
                </div>
                <div class="col-md-8 col-sm-12">
                  <div class="input-group input-group-lg mt-5">
                    <span class="input-group-text bg-warning">Message</span>
                    <textarea
                      class="form-control"
                      aria-label="With textarea"
                      v-model="message"
                      required="required"
                    >
                    </textarea>
                  </div>
                </div>
                <div class="col-md-12 col-sm-12">
                  <button
                    type="button"
                    @click="checkForm()"
                    :class="{ allow: allow }"
                    class="btn btn-dark mt-5"
                  >
                    <i class="fa fa-paper-plane mr-2"></i>Envoyer
                  </button>
                </div>
                <div
                  class="text-center aboutText w3-animate-zoom"
                  v-if="autput === true"
                >
                  <span>{{ autput }}</span>
                </div>
                <div v-else class="mb-5 py-5">
                  <span class="text-orange">{{ autput }}</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { gmapApi } from "vue2-google-maps";
import Swal from "sweetalert2";
const Toast = Swal.mixin({
  toast: true,
  position: "center-end",
  showConfirmButton: false,
  timer: 4000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
export default {
  name: "contact",
  data() {
    return {
      name: null,
      email: null,
      message: null,
      autput: null,
      allow: false,
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },
  methods: {
    cleanInput() {
      if (this.email) {
        let notAllow = /[< $ >``{}''""^ ]/gi;
        if (this.reg.test(this.email)) {
          this.autput = "Merci le Email est bien formate";
          this.allow = true;
        } else if (this.email.search(notAllow) > -1) {
          this.email = this.email.replace(notAllow, "");
          this.autput = "Les Caractere speciaux sont interdits !";
          this.allow = false;
        } else {
          this.autput = "Le Email n'est pas bien formate";
          this.allow = false;
        }
      }
    },
    checkForm: function () {
      if (this.email == null || this.name == null || this.message == null) {
        this.autput = "Remplissez et Ecrivez votre Massage S.V.P Merci !";
      } else if (this.email <= 7) {
        this.autput = "plus de 7 caractere svp";
      } else {
        Toast.fire({
          icon: "success",
          title: "Votre Message a bien etait envoyer",
        });
        this.allow = false;
      }
    },
    computed:{
      google: gmapApi,
    },
  },
};
</script>
<style scoped>
.w3-display-container {
  position: relative;
}
.contactContainer {
  height: 785px;
  width: 100%;
  margin-top: 50px;
}
.contact {
  height: 585px;
  width: 100%;
  margin-top: 50px;
  background-color: rgba(0, 0, 0, 0.473);
  padding:20px;
  margin-bottom:50px;
}
#contactMe{
  text-align: center;
  padding-top:100px;
  color:#ffc107;
  font-weight: bolder;
}
.bg-image {
  background: url(/images/contact.jpg);
  background-position: center;
  background-size: cover;
  height: 900px;
  margin-top: 39px;
  margin-bottom: 100px;
}
.contactBox {
  width:100%;
  height: 150px;
  padding: 10px;
  color: aliceblue;
}
form {
  width: 90%;
}
textarea {
  width: 100%;
  height: 80px;
}
@media (max-width: 768px) {
  form {
    margin: 35px 10px;
  }
  /*.contactContainer {
    height: 850px;
  }*/
  .contact {
    height:auto;
  }
  #contactMe{
  text-align: center;
    padding: 58px;
    color: #ffc107;
    font-weight: bolder;
    background-color: #0000007a;
  }
  .bg-image{
    height: auto !important;
    margin-bottom:0px !important;
  }
  .input-group{
    margin-bottom: 10px;;
  }
}
</style>
