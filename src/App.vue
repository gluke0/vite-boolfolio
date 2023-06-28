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
        <p class="card-text"><strong> Title: </strong> {{ project.title }} </p>
        <p class="card-text"> <img class="img-fluid" src="" alt=""> </p>
      </div>
  </div>
</div>

</template>


<style lang="scss">

@use './style/main.scss';

</style>

