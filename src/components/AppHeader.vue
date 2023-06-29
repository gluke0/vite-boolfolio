<script>

export default{
  name: 'AppHeader.vue',
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

    <div>

        <nav class="navbar navbar-expand-sm navbar-light bg-light">
              <div class="container">
                <router-link :to="{name: 'home'}"> <img style="width: 50%" src="/img/logo.png" class="mx-0 px-0" alt="gluke logo"> </router-link>
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <router-link class="navbar-brand" :to="{name: 'home'}"> Home </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="navbar-brand" :to="{name: 'portfolio'}"> Portfolio </router-link>
                        </li>
                    </ul>
                </div>
          </div>
        </nav>
        
    </div>

</template>


<style lang="scss">


</style>

