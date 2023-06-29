<script>

import {store} from './store';
import AppHeader from './components/AppHeader.vue';

export default{
  name: 'App',
  components:{
    AppHeader,
    
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
  <router-view></router-view>
</template>


<style lang="scss">

@use './style/main.scss';


</style>

