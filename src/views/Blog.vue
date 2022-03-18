<template>
  <div class="container-fluid">    
  <b-jumbotron class="blogImage" header="Adhésion Agame" lead="">
    <p>Pour avoir plus d'informations consultez le calendrier</p>
    <b-button variant="success" href="#">calendrier</b-button>
    </b-jumbotron>    
     <BlogContent />
  </div>
</template>
<script>
import BlogContent from '@/components/BlogContent.vue'
export default {
  name: "blog",
  components:{
  BlogContent
  }
};
</script>
<style scoped>
.blogImage{
  height:350px;
  margin-top:100px;
  background-image:url('/images/single-meeting.jpg');
  background-size: cover;
  object-fit: cover;
  color:#fff;
}
.blogImage p{
  color:#fff;
}
</style>
