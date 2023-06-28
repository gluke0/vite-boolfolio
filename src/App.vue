<script>
import axios from 'axios';

export default{
  data(){
    return{
      projects: [],
      commonUrl: 'http://127.0.0.1:8000'
    }
  },
  mounted(){
    this.displayProjects();
  },
  methods:{
    displayProjects(){
      axios.get(`${this.commonUrl}/api/projects`)
      .then(res=>{
        this.projects = res.data.projects;

        // checking if the axios call is working correctly
        console.log(this.projects)
      })
    }

  },
}
</script>

<template>

<div class="container">
  <div v-for="(project, index) in projects" :key="index">
      <div class="card-body card p-3">
        <p class="card-text mb-0"><strong> Title: </strong> {{ project.title }} </p>
        <img class="img-fluid my-3" :src="`${commonUrl}/storage/${project.image}`" alt="">

        <!-- http://127.0.0.1:8000/storage/project_images/SOeQTvNVrbgRm2va4FJwuoXLjBtRFrgb5I5p1vRJ.png 
        this is the images path-->

       <div>
        
        <ul v-if="project.technologies" class="d-flex p-0">
          <strong class="me-2"> Technology: </strong>
          <li class="list-inline me-3" v-for="(project, index) in project.technologies" :key="index"> {{ project.name }} </li>
        </ul>
       </div>

        <!-- this is the line of code if I want to show the project category
        <p class="card-text" v-if="project.category"> <strong> Category: </strong> {{project.category.name}} </p> -->
        
      </div>
  </div>
</div>

</template>


<style lang="scss">

@use './style/main.scss';

// li{
//   list-style-type: none;
// }

</style>

