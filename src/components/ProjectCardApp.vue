<script>
import axios from 'axios';
import {store} from '../store';

export default{
    name: 'ProjectCardApp',
  data(){
    return{
      projects: [],
      commonUrl: 'http://127.0.0.1:8000',
      currentPage: 1,
      lastPage: null,
      nextPage: null,
      store,
    }
  },
  mounted(){
    this.displayProjects(1);
  },
  methods:{
    displayProjects(projectApiPage){
      axios.get(`${this.commonUrl}/api/projects`,{
        params:{
          page: projectApiPage,
        }
      })
      .then(res=>{
        store.requestedProjects = res.data.projects.data,
        this.currentPage = res.data.projects.current_page,
        this.lastPage = res.data.projects.last_page,

        // checking if the axios call is working correctly
        console.log(res.data.projects.data)
      })
    }

  },
}
</script>

<template>

<div class="container">
  <div v-for="(project, index) in store.requestedProjects" :key="index">
      <div class="card-body card p-3 mb-3">
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

  <!-- pages with buttons -->
  <div class="d-flex justify-content-center my-5">
    <nav arial-label="Page navigation">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" @click.prevent="displayProjects(currentPage - 1)" href="#" aria-label="Previous">
            <span aria-hidden="true"> &laquo; </span>
          </a>
        </li>
        
        <li class="page-item" :class="(currentPage == project) ? 'active' : ''" aria-current="page" v-for="(project, index) in lastPage" :key="index">
          <a class="page-link" @click.prevent="displayProjects(project)" href="#"> {{ project }} </a>
        </li>
          

        <li class="page-item">
          <a class="page-link" @click.prevent="displayProjects(currentPage + 1)" href="#" aria-label="Next">
            <span aria-hidden="true"> &raquo; </span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>

</template>


<style lang="scss">

@use '../style/main.scss';


</style>

