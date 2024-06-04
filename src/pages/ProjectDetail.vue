<script>
import axios from 'axios'
import { store } from '../data/store';

export default {
  name: 'ProjectDetail',
  methods:{
    getApi(){
      console.log(this.$route.params.slug);
      const slug = this.$route.params.slug;
      axios.get(store.apiUrl + '/project-by-slug/' + slug)
      .then(result =>{
        console.log(result.data)
      })
      .catch(error=>{
        console.log(error.message);
      });
    }
  },
  mounted() {
  this.getApi()
  }
}
</script>

<template>
  <div>
    <h1>dettaglio:</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum doloremque, aliquam porro fugit obcaecati maiores
      perspiciatis nihil ab voluptas modi omnis facilis earum maxime et non! Quasi quisquam dolorum ullam!</p>
  </div>
</template>


<style lang="scss" scoped>

</style>