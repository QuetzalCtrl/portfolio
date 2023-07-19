<template>
  <BackgroundComponent></BackgroundComponent>
  <nav v-if="$route.path != '/terminal'" class="z-50 font-montserrat w-screen text-center text-bold text-bold text-lightgray bg-dark fixed p-8">
    <a href="#home">Home</a> |
    <a href="#projects">Projects</a> | 
    <a href="#about">About</a> | 
    <a href="#contact">Contact</a> | 
    <a href="/terminal" class="text-gray w-screen align-right">Terminal</a>
  </nav>
  <router-view/>
  <div v-if="$route.path != '/terminal'">
    <FooterComponent></FooterComponent>
  </div>
</template>
<script setup>
import FooterComponent from '@/components/FooterComponent.vue'
import BackgroundComponent from '@/components/BackgroundComponent.vue'
</script>
<style scoped>
nav a{
  margin: 0 10px 0 10px;
}
nav a:hover {
  color: rgb(229 231 235);
}
</style>
