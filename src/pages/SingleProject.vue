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
    <div class="card text-white bg-primary p-5 mb-5">
      <h4 class="card-title"> {{ project.title }} </h4>
      <img class="img-fluid my-3" :src="`${commonUrl}/storage/${project.image}`" alt="">
      <div>
        <i class="fa-solid fa-info me-4"></i>
        <span v-if="project.category">{{ project.category.name }}</span>
        <span v-else class="text-dark"> <i> This project has no category</i></span>
      </div>
      <div class="my-3">
        <i class="fa-regular fa-file-lines me-3"></i>
        <span v-if="project.description">{{ project.description }}</span>
        <span v-else class="text-dark"> <i> This project has no description </i></span>
      </div>
      <li class="list-inline" v-if="project.technologies.length > 0" v-for="(technology, index) in project.technologies" :key="index">
        <i class="fa-solid fa-laptop-code me-2"></i>
        {{ technology.name }}
      </li>
      <li v-else class="text-dark list-inline"> <i class="fa-solid fa-laptop-code me-2 text-white"></i> <i> No technologies has been declared  </i></li>
      <div class="mt-3">
        <i class="fa-solid fa-link me-2"></i>
        <a v-if="project.link" class="text-decoration-none" :href="project.link">Get from GitHub</a>
        <span v-else class="text-dark">  <i> No download link available </i> </span>
      </div>
    </div>
  </div>
</main>

</template>


<style lang="scss">

.card{
  background-color: #7c7e7f !important;
}

</style>

