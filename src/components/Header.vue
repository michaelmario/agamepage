<template>
<div class="container-fluid">
    <b-navbar toggleable="lg" type="dark" class="fixed-top bg-dark">
      <b-navbar-brand href="#">
        <img src="/images/AGAME_logo.png" alt="logo" id="logo"/>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
       
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
          <b-nav-item href="/home">Accueil</b-nav-item>         
          <b-nav-item href="#blog" exact>Blog</b-nav-item>
          <b-nav-item href="#apropos" exact>A Propos</b-nav-item>
          <b-nav-item href="#contact" exact>Contact</b-nav-item>         
        </b-navbar-nav>         
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>        
  </div>
</template>
<script>
export default {
  name: "HeadNav",
  }
</script>
<style scoped>
.navbar {
  height: 100px;
  border-bottom: 2px solid #000;
}
#logo{
  width:80px;
  height:80px;
  margin-top:17px;
  }
  .nav-link {
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bolder;
  color: rgb(219, 180, 50) !important;
  font-family: 'Playfair Display', serif;
}
.nav-link:hover {
  color: black !important;
}
a {
  color: #ffffff;
}
.topButton{
  position:absolute important;
  
}
</style>