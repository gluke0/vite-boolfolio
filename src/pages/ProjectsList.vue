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
      technologies: 'null',
      chosenTechnologies: [],
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
    this.onlyTechnologies();
  },
  watch:{
    chosenTechnologies: {
      handler: 'displayProjects',
      deep: true,
    },
  },
  methods:{
    displayProjects(projectApiPage){

      const params = {
        page: projectApiPage,
      }
      if (this.selectedCat !== 'all'){
        params.category_id = this.selectedCat
      }
      if (this.chosenTechnologies.length > 0){
        params.technologies_ids = this.chosenTechnologies.join(',');
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
    },
    onlyTechnologies(){
      axios.get(`${this.commonUrl}/api/technologies`)
        .then(res =>{
          this.technologies = res.data.technologies
        })
    }

  },
}
</script>

<template>
<main class="main-container">
  <div class="container">

    <h1 class="mb-5"> <i> My Projects</i></h1>

      <div class="d-flex justify-content-between">
        <!-- <div class="ms-3 me-1">
          <label for="" class="form-label"> <h4> Filter projects based on their category </h4> </label>
          <select @change="displayProjects()" v-model="selectedCat" class="form-select form-select-lg" name="" id="">
            <option class="selcat" value="all">  select category </option>
            <option :value="project.id" v-for="(project, index) in categories" :key="index">{{ project.name }}</option>
          </select>
        </div> -->

        <div class="me-1 ms-3 radiob">
          <h4>Filter projects based on their category </h4>
          <input type="radio" id="all" name="category" value="all" @change="displayProjects()" v-model="selectedCat">
          <label class="me-3 ms-1" for="all"> All </label>
          <label for="" v-for="(project, index) in categories" :key ="index">
            <input class="" type="radio" :value="project.id" @change="displayProjects()" v-model="selectedCat">
            <span class="me-3 ms-1"> {{ project.name }} </span>
          </label>
        </div>

        <div class="me-3 ms-1">
          <h4>Filter projects based on their technologies </h4>
          <label for="" v-for="(project, index) in technologies" :key ="index">
            <input class="" type="checkbox" :value="project.id" v-model="chosenTechnologies">
            <span class="me-3 ms-1"> {{ project.name }} </span>
          </label>
        </div>

        <div v-if="checkingCat.length == 0">
          <p>No project in this category.</p>
        </div>
      </div>

    <div class="mt-4" v-for="(project, index) in store.requestedProjects" :key="index">

        <div class="card-body card p-3 mb-3">
          <div>
            <p class="card-title mb-0 "><strong> <i class="fa-regular fa-file-code"></i> <router-link :to="{name: 'project', params: {slug: project.slug}}" class="text-decoration-none text-white"> {{ project.title }} </router-link> </strong> </p>
          </div>
          <img class="img-fluid my-3" :src="`${commonUrl}/storage/${project.image}`" alt="">

          <!-- http://127.0.0.1:8000/storage/project_images/SOeQTvNVrbgRm2va4FJwuoXLjBtRFrgb5I5p1vRJ.png 
          this is the images path-->

        <div>
          
          <ul v-if="project.technologies" class="d-flex p-0 text-white">
            <strong class="me-2"> Technology: </strong>
            <li class="list-inline me-3" v-for="(project, index) in project.technologies" :key="index"> {{ project.name }} </li>
          </ul>
        </div>

          <!-- this is the line of code if I want to show the project category
          <p class="card-text" v-if="project.category"> <strong> Category: </strong> {{project.category.name}} </p> -->
          
          <div>
            <router-link :to="{name: 'project', params: {slug: project.slug}}" class="text-decoration-none"> Details </router-link>
          </div>
        </div>

    </div>

    <!-- pages with buttons -->
    <div class="d-flex justify-content-center my-5">
      <nav arial-label="Page navigation">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link bg-dark border-dark text-white" @click.prevent="currentPage > 1 ? displayProjects(currentPage - 1) : null" href="#" aria-label="Previous">
              <span aria-hidden="true"> &laquo; </span>
            </a>
          </li>
          
          <li class="page-item" :class="(currentPage == project) ? 'currentpage' : ''" aria-current="page" v-for="(project, index) in lastPage" :key="index">
            <a class="page-link bg-dark border-dark text-white" @click.prevent="displayProjects(project)" href="#"> {{ project }} </a>
          </li>
            

          <li class="page-item">
            <a class="page-link bg-dark border-dark text-white" @click.prevent="currentPage < lastPage ? displayProjects(currentPage + 1) : null" href="#" aria-label="Next">
              <span aria-hidden="true"> &raquo; </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</main>
</template>


<style lang="scss">

.main-container{
  padding-top: 5rem;
  color: white;
}

.card{
  color: black;
  background-color: #7c7e7f;
}

.radiob{
  width: calc(100% / 2 - 1rem);
}

select{
  padding: 0 !important;
  padding-left: 0.5rem !important;
  background-color: #7c7e7f !important;
  border: none !important;
  color: white !important;
}

.selcat{
  font-size: smaller !important;
}

input{
  opacity: 0.5;
}

.fa-file-code{
  color: rgb(139, 235, 144);
  font-size: 2rem;
}

.card-title{
  font-size: 3rem;
}

.currentpage a{
  color: rgb(139, 235, 144) !important;
  font-weight: bolder;
}


</style>

