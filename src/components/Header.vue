<script>
export default {
  name: 'header'
  }
</script>

<template>
<header>
<nav>
  <ul>
    <li><router-link :to="{name: 'home'}">home</router-link></li>
    <li><router-link :to="{name: 'abut'}">chi siamo</router-link></li>
    <!-- <li><a href="#">home</a></li>
    <li><a href="#">chi siamo</a></li>
  </ul> -->
  </ul>
</nav>
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