<script>
import {store} from '../data/store'
import axios from 'axios'

export default {
  name:'About',
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
  <div>
  </div>
  <div class="main-wrapper">
    <div class="container">
      <div>
    <div v-if="!loading">
      <h2>I miei progetti:</h2>
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
