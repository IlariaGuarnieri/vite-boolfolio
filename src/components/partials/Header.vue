<script>
export default {
  name: 'header'
  }
</script>

<template>
<header>
    <router-link :to="{name: 'home'}">home</router-link>
    <router-link :to="{name: 'contacts'}">contatti</router-link>
    <router-link :to="{name: 'about'}">chi siamo</router-link>
    <!-- anzichè cosi:-->
    <!-- <li><a href="#">home</a></li>
      <li><a href="#">chi siamo</a></li>
    </ul> -->
  </header>

</template>

<style lang="scss" scoped>
  header{
    ul{
      display: flex;
      justify-content: center;
      align-items: center;
      
      li{
        list-style: none;
      }
    }
  } 
</style>