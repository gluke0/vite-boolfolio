<script>

import {store} from './store';
import ProjectCardApp from './components/ProjectCardApp.vue';

export default{
  name: 'App',
  components:{
    ProjectCardApp
},
  data(){
    return{
      store
    }
  },
  mounted(){
    
  },
  methods:{
    
  },
}
</script>

<template>
  
<header>
<div class="container my-5">
  <h1 class="text-uppercase"> My Projects </h1>
</div>

</header> 
<main>
  <ProjectCardApp></ProjectCardApp>
</main> 


</template>


<style lang="scss">

@use './style/main.scss';

</style>

