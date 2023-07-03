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
    // displayOneProject(){
    //   axios.get(`${this.commonUrl}/api/projects/${this.$route.params.slug}`)
    //     .then((response)=>{
    //       this.project = response.data.project;
    //     }, error => {
    //       if(error.response.status == 404){
    //       this.$router.push({name: 'not-found'})
    //     } else {

    //     }
    //   });
    // }
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
 
 <main class="main-container vh-100 mt-5 overflow-auto">
  <div class="container">
    <div class="card text-white bg-primary p-5">
      <h4 class="card-title"> <a class="text-decoration-none" :href="project.link"> {{ project.title }} </a>  </h4>
      <img class="img-fluid my-3" :src="`${commonUrl}/storage/${project.image}`" alt="">
      <div > <i class="fa-solid fa-info me-4"></i> {{ project.category.name }}</div>
      <div class="my-3"> <i class="fa-regular fa-file-lines me-3"></i> {{ project.description }}</div>
      <li class="list-inline" v-for="(project, index) in project.technologies" :key="index"> <i class="fa-solid fa-laptop-code me-2"></i> {{ project.name }}</li>
      <div class="mt-3"> <i class="fa-solid fa-link me-2"></i> <a class="text-decoration-none" :href="project.link"> Get from GitHub </a></div>
    </div>
  </div>
</main>

</template>


<style lang="scss">

.card{
  background-color: #7c7e7f !important;
}

</style>

