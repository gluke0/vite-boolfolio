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
        console.log(this.projects)
      })
    }

  },
}
</script>

<template>

  
</template>


<style lang="scss">

@use './style/main.scss';

</style>

