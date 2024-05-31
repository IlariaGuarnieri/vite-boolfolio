<script>
import axios from 'axios'

  export default {
    data(){
      return{
        'projects' : []
      }
    },
      methods:{
        getApi(){
          console.log('get Api');
          axios.get('http://127.0.0.1:8000/api/projects')
          .then(result=>{
            this.projects = result.data
            console.log(this.projects);
          })
          .catch(error=>{
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
    <h5>i miei progetti:</h5>
    <ul>
      <li v-for="project in projects " :key="project.id" >{{project.id}}-{{project.title}}</li>
    </ul>
    </div>

    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>