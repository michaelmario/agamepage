import Vue from "vue";
import App from "./App.vue";
import * as VueGoogleMaps from 'vue2-google-maps';
//import "./registerServiceWorker";
import '../public/css/style.css';
import '../public/css/main.css';
import '../public/css/templatemo.css';
import VueAos from 'aos'
import 'aos/dist/aos.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueGoogleMaps, {
  load: {
    key:'AIzaSyBMGqkclzUoRIof5DIWwPmjLDD3h963geU',
    libraries: 'places'
  }
});

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  mounted() {
    VueAos.init({
      // Global settings:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    })
  }
}).$mount("#app");
