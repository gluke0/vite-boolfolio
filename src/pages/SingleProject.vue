<script>
import axios from 'axios';
// import {store} from '../store';

export default{
    name: 'SingleProject',
  data(){
    return{
      commonUrl: 'http://127.0.0.1:8000',
      project: null,
    }
  },
  created(){
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

<template>
 
 <div class="card text-white bg-primary">
   <img class="card-img-top" src="holder.js/100px180/" alt="Title">
   <div class="card-body">
     <h4 class="card-title"> {{ project.title }} </h4>
     <p class="card-text">Text</p>
   </div>
 </div>

</template>


<style lang="scss">

</style>

