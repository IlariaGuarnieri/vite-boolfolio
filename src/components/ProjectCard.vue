<script>
import { store } from '../data/store'
export default {
  props:{
    id: String,
    title: String,
    // type: String,
    technologies: Array,
  }
};
</script>

<template>
  <div>
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{ id }}-{{ title }}</h5>
    <p class="card-text">tecnologie: </p>
    <span
    v-for="technology in technologies" 
    :key="technology.id"
    >
    {{ technology.id }} - {{ technology.title }}
    </span>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>
</template>

<style lang="scss" scoped>

</style>
