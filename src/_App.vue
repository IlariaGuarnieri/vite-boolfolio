<script>
import axios from 'axios'
import {store} from './data/store'

  export default {
    data(){
      return{
        'projects' : [],
        loading : true,
      }
    },
      methods:{
        getApi(){
          console.log('get Api');
          axios.get(store.apiUrl)
          .then(result=>{
            this.loading = false;
            this.projects = result.data
            console.log(this.projects);
          })
          .catch(error=>{
            this.loading = false;
            console.log(error);

          })
        }
      },
      mounted(){
        this.getApi()
      }

  }
</script>

<template>
  <div class="main-wrapper">
    <div class="container">
      <div>
      <h1>Boolfolio Home</h1>
    <div v-if="!loading">
      <h5>i miei progetti:</h5>
    <ul>
      <li v-for="project in projects " :key="project.id" >{{project.id}}-{{project.title}}</li>
    </ul>
    </div>
    <p v-else> Loading...</p>
    </div>

    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>