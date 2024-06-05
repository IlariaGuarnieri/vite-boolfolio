<script>
import axios from 'axios'
import { store } from '../data/store';

export default {
  name: 'ProjectDetail',
  data(){
    return{
      store,
      project: {},
    };
  },
  methods: {
    getApi() {
      console.log(this.$route.params.slug);
      const slug = this.$route.params.slug;
      axios.get(store.apiUrl + 'project-by-slug/' + slug)
        .then(result => {
          this.project = result.data.project;
          console.log(this.project);
        })
        .catch(error => {
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
    <h1>Dettaglio:</h1>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h3 class="card-title">TITOLO: {{ project.title }}</h3>
        <h5>ID: {{ project.id }}</h5>
        <h5>TECNOLOGIA: </h5>
       
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>