<template lang="pug">
  <div class="page page--with-sidebar">
    <section class="container">
      <sidebar></sidebar>
      
      <div class="page-content">
        <app-header></app-header>
        
        <div class="content">
          <nuxt/>
        </div>
      </div>
    </section>
  </div>

</template>
<script>
  import Sidebar from '~/components/Sidebar.vue'
  import AppHeader from '~/components/AppHeader.vue'
  
  export default {
    components: { Sidebar, AppHeader }
  }
</script>


<style lang='sass'>
  
  @import '../assets/sass/reset.sass'
  @import '../assets/sass/global.sass'
  
</style>
