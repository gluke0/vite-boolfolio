<script>
import axios from 'axios';
import {store} from '../store';

export default{
    name: 'ProjectsList',
  data(){
    return{
      projects: [],
      commonUrl: 'http://127.0.0.1:8000',
      currentPage: 1,
      lastPage: null,
      nextPage: null,
      store,
      categories: null,
      selectedCat: 'all',
    }
  },
  // i want now to print a message checking if the cat_id is empty
  computed: {
    checkingCat() {
      if (this.selectedCat == 'all') {
        // return all projects if 'all' is selected
        return this.store.requestedProjects; 
      } else {
        const categoryId = parseInt(this.selectedCat);
        return this.store.requestedProjects.filter(project => project.category_id == categoryId);
      }
    },
  },
  mounted(){
    this.displayProjects(1);
    this.onlyCategories();
  },
  methods:{
    displayProjects(projectApiPage){

      const params = {
        page: projectApiPage,
      }
      if (this.selectedCat !== 'all'){
        params.category_id = this.selectedCat
      }

      axios.get(`${this.commonUrl}/api/projects`,{ params })
        // params:{
        //   page: projectApiPage,
        // }
      .then(res=>{
        store.requestedProjects = res.data.projects.data,
        this.currentPage = res.data.projects.current_page,
        this.lastPage = res.data.projects.last_page,

        // checking if the axios call is working correctly
        console.log(res.data.projects.data)
      })
    },
    onlyCategories(){
      axios.get(`${this.commonUrl}/api/categories`)
        .then(res =>{
          this.categories = res.data.categories
        })
    }

  },
}
</script>

<template>

<div class="container">

    <div>
      <label for="" class="form-label"> Choose projects category </label>
      <select @change="displayProjects()" v-model="selectedCat" class="form-select form-select-lg" name="" id="">
        <option value="all"> select category </option>
        <option :value="project.id" v-for="(project, index) in categories" :key="index">{{ project.name }}</option>
      </select>
    </div>

    <div v-if="checkingCat.length == 0">
  <p>No project in this category.</p>
    </div>

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
        
        <div>
          <router-link :to="{name: 'project', params: {slug: project.slug}}"> Details </router-link>
        </div>
      </div>

  </div>

  <!-- pages with buttons -->
  <div class="d-flex justify-content-center my-5">
    <nav arial-label="Page navigation">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" @click.prevent="currentPage > 1 ? displayProjects(currentPage - 1) : null" href="#" aria-label="Previous">
            <span aria-hidden="true"> &laquo; </span>
          </a>
        </li>
        
        <li class="page-item" :class="(currentPage == project) ? 'active' : ''" aria-current="page" v-for="(project, index) in lastPage" :key="index">
          <a class="page-link" @click.prevent="displayProjects(project)" href="#"> {{ project }} </a>
        </li>
          

        <li class="page-item">
          <a class="page-link" @click.prevent="currentPage < lastPage ? displayProjects(currentPage + 1) : null" href="#" aria-label="Next">
            <span aria-hidden="true"> &raquo; </span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>

</template>


<style lang="scss">




</style>

