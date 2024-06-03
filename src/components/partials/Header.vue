<script>
export default {
  name: 'header'
  }
</script>

<template>
<header>
    <router-link class="link_style" :to="{name: 'home'}">Home</router-link>
    <router-link class="link_style" :to="{name: 'contacts'}">Contatti</router-link>
    <router-link class="link_style" :to="{name: 'about'}">Progetti</router-link>
    <!-- anzichè cosi:-->
    <!-- <li><a href="#">home</a></li>
      <li><a href="#">chi siamo</a></li>
    </ul> -->
  </header>

</template>

<style lang="scss" scoped>
  header{
    .link_style{
      color: black;
      width: 100%;
      list-style: none;
          text-decoration: none;
          margin: 20px;
          text-transform: uppercase;
          &:hover{
            text-decoration: underline;
          }
        }
      }
    
</style>