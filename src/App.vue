<script>
import Header from './components/Header.vue'

export default {
  data(){
    return{
      components: Header

    }
  },
  methods:{

  },
  mounted(){
    
  }
}
</script>

<template>
  <header>
    <router-link :to="{name: 'home'}">home</router-link>
    <router-link :to="{name: 'contacts'}">contatti</router-link>
    <router-link :to="{name: 'about'}">chi siamo</router-link>
  </header>
    <router-view></router-view>
</template>

<style lang="scss" scoped>
  
</style>