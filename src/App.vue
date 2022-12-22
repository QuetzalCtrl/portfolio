<template>
  <BackgroundComponent></BackgroundComponent>
  <nav v-if="$route.path != '/'" class="w-screen text-center text-bold text-bold text-lightgray bg-dark fixed p-8 border-b-2 border-solid border-black">
    <router-link to="/home">Home</router-link> |
    <router-link to="/">Terminal</router-link>
  </nav>
  <router-view/>
  <div v-if="$route.path != '/'">
    <FooterComponent></FooterComponent>
  </div>
</template>
<script>
import FooterComponent from '@/components/FooterComponent.vue'
import BackgroundComponent from '@/components/BackgroundComponent.vue'

export default {
  components: {
    FooterComponent,
    BackgroundComponent
  }
}
</script>
<style scoped>
nav a{
  margin: 0 10px 0 10px;
}
nav a:hover {
  color: rgb(229 231 235);
}

nav a.router-link-exact-active {
  color: #5db131;
}
</style>
