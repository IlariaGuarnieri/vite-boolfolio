<script>
import { store } from '../data/store'
import axios from 'axios'

export default {
  name: 'Technologies',
  data() {
    return {
      technologies: [],
      loading: true,
    }
  },
  methods: {
    getApi() {
      console.log('get Api');
      axios.get(store.apiUrlT)
        .then(result => {
          this.loading = false;
          this.technologies = result.data
          console.log(this.technologies);
        })
        .catch(error => {
          this.loading = false;
          console.log(error);
        })
    }
  },
  mounted() {
    this.getApi()
  }
}
</script>

<template>
  <div class="main-wrapper">
    <div class="container">
      <div v-if="!loading">
        <h2>Technologies:</h2>
        <ul>
          <li v-for="technology in technologies" :key="technology.id">{{ technology.id }} - {{ technology.title }}</li>
        </ul>
      </div>
      <p v-else>Loading...</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
