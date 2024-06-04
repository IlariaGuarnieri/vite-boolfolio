<script>
import { store } from '../data/store'
export default {
  props: {
    project: Object
  }
};
</script>

<template>
    <div class="col">

      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h2 class="card-title"><router-link :to="{ name: 'projectDetail', params: { slug: project.slug } }">TITOLO:{{ project.title }}</router-link></h2>

          <p class="card-text">tecnologie: </p>
          <span v-for="technology in project.technologies" :key="technology.id">
            {{ project.technology.id }} - {{ project.technology.title }}
          </span>
          <h3 class="card-title"><router-link :to="{ name: 'projectDetail', params: { slug: project.slug } }">Clicca qui per il dettaglio</router-link></h3>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped></style>
