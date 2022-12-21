<template>
  <BackgroundComponent></BackgroundComponent>
  <nav v-if="$route.path != '/'">
    <router-link to="/">Home</router-link> |
    <router-link to="/projects">Projects</router-link>
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
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
