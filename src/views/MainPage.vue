<template>
   <div>
    <Hero /> 
    <PageDinamic />
   <FirstPage /> 
   <SecondPage />
   </div>
</template>
<script>
import Hero from '@/components/Hero.vue'
import FirstPage from '@/components/FirstPage.vue'
import SecondPage from '@/components/SecondPage.vue'
import PageDinamic from '@/components/PageDinamic.vue'

export default {
    name:"MainPage",
    components:{
        Hero,
    FirstPage,
    SecondPage,
    PageDinamic
    
    }
    
}
</script>
<style scoped>

</style>