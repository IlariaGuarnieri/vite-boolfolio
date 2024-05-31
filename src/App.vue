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
            this.post = result.data
            console.log(result);
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
    <h1>Boolfolio Home</h1>
  </div>
</template>


<style lang="scss" scoped>

</style>