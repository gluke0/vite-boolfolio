<script>

import {store} from './store';
import ProjectsList from './pages/ProjectsList.vue';
import AppHeader from './components/AppHeader.vue';

export default{
  name: 'App',
  components:{
    AppHeader,
    ProjectsList
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
  <AppHeader></AppHeader>
  <ProjectsList></ProjectsList>
</template>


<style lang="scss">

@use './style/main.scss';


</style>

