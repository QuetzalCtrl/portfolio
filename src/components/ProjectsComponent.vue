<template>
<section id="projects" class="font-montserrat">
  <h3 class="mt-12 text-center text-4xl text-white font-bold">My projects</h3>
  <h3 class="my-6 text-center text-white ">My biggest projects</h3>

  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <template v-for="i in projects" :key="i">
        <CardProjectComponent></CardProjectComponent>
      </template>
    </div>
  </div>
  <h3 class="mt-6 text-center text-2xl text-white font-bold">Alternate projects</h3>
  <h3 class="mb-6 text-center text-white ">Some smaller projects</h3>
  

  <div class="flex flex-wrap justify-center gap-5">
    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Smaller project example</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Ici, pas de gif de présentation, mais tjrs possibilité de voir le repo github.</p>
    </a>
    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Smaller project example</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Ici, pas de gif de présentation, mais tjrs possibilité de voir le repo github.</p>
    </a>
  </div>
</section>
</template>

<script setup>
import CardProjectComponent from './CardProjectComponent.vue';
const projects = [1, 2, 3]
</script>