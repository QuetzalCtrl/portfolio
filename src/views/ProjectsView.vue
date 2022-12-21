<template>
  <div id="projectspage">
    <h1>This is the projects page</h1>
    <div id="nav">
      <router-link to="/projects/1">P 1</router-link> |
      <router-link to="/projects/2">P 2</router-link> |
      <router-link to="/projects/3">P 3</router-link> |
      <router-link to="/projects/4">P 4</router-link>
    </div>
    <router-view></router-view>
  </div>

</template>
