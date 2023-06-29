<script>
import axios from 'axios';
import {store} from '../store';

export default{
    name: 'SingleProject',
  data(){
    return{
      commonUrl: 'http://127.0.0.1:8000',
      project: null,
    }
  },
  mounted(){
    console.log(this.$route);
    this.displayOneProject();
  },
  methods:{
    displayOneProject(){
      axios.get(`${this.commonUrl}/api/projects/${this.$route.params.slug}`).then((res)=>{
        if (res.data.success){
          this.project = res.data.project;
        } else {
          this.$router.push({name: 'not-found'})
        }
      });
    }
  }
  }

</script>

<template></template>



<style lang="scss">

</style>

