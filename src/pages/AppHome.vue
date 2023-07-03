<script>

export default{
  name: 'AppHome',
  components:{
},
  data(){
    return{
    
    }
  },
  mounted(){
    
  },
  methods:{
    
  },
}
</script>

<template>
  <main class="main-container vh-100 mt-5">
    <div class="container">
      <div>
        <div class="pt-5 pb-3 text-white fs-1"> <i> Welcome! </i>  </div>
        <div class="text-white fs-2"> Here you can find my <strong> <router-link class="text-decoration-none" :to="{name: 'portfolio'}"> projects </router-link> </strong> and, for some of them, </div>
        <div class="text-white fs-2"> you can even access the source code from <strong> <a class="text-decoration-none" target="_blank" href="http://www.github.com/gluke0"> GitHub. </a> </strong> </div>
      </div>
    </div>
  </main>
</template>


<style lang="scss">

a{
  color: rgb(139, 235, 144)
}

.main-container{
  background-image: url(../../public/img/bg-logos.png);
  background-repeat: repeat;
  
}

</style>

