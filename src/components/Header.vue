<template>
 <div class="header">
            <nav class="navbar fixed-top navbar-dark navbar-expand-lg">
                <div class="container-fluid d-flex">
                  <div class="me-auto">
                    <a href="#" target="_self" class="navbar-brand">
                        <img src="/images/AGAME_logo.png" alt="logo" id="logo">
                    </a>
                    </div>
                    <div class="ml-auto">
                    <button
                        class="navbar-toggler  "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon "></span>
                    </button>
                    </div>
                    <div id="navbarSupportedContent" class="navbar-collapse collapse">
                        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a href="/" target="_self" class="nav-link">Accueil</a>
                            </li>
                            <li class="nav-item">
                                <a href="/blog" target="_self" class="nav-link">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a href="/gallery" target="_self" class="nav-link">Gallérie</a>
                            </li>
                            <li class="nav-item">
                                <a href="/apropos" target="_self" class="nav-link">A Propos</a>
                            </li>
                            <li class="nav-item">
                                <a href="/contact" target="_self" class="nav-link">Contact</a>
                            </li>
                        </ul>
                    
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
  name: "HeadNav",
  }
</script>
<style scoped>

img#logo{
    width:80px;
    height:80px;
 
    
}
.navbar-brand{
  padding-top: 0!important;
;
}

nav{
    background-color: #c4c4c4;
    color:orange;
    height:100px;
}

nav .nav-item a{
    color:rgb(51, 34, 3) !important;
    text-transform: uppercase;
    font-weight: bolder;
}
nav .nav-item a:hover{
    color:orange !important;
}
.mlAuto{
    padding-left: 50px!important ;
}
.navbar-nav {
  background-color:#c4c4c4;
  padding:20px;
}



</style>