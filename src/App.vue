<template>
  <div class="container">
      <div class="main">
          <Header/>
          <Transition name="slide-fade">
            <router-view></router-view>
          </Transition>
      </div>
  </div>
</template>

<script>
  import mainMenu from './components/MainMenu.vue';
  import menServices from './components/menuServices.vue';
    export default{   
      components:{
        mainMenu,
        menServices,
      }
        
      
    }
</script>
<style src="./styleApp/styleApp.css">
</style>
