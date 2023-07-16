<template>
<section id="projects" class="font-montserrat">
  <h3 class="mt-12 text-center text-4xl text-white font-bold">My projects</h3>
  <h3 class="my-6 text-center text-white ">My main projects</h3>

  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <template v-for="i in projects" :key="i">
        <CardProjectComponent v-bind:project="i"></CardProjectComponent>
      </template>
    </div>
  </div>
  <h3 class="mt-6 text-center text-2xl text-white font-bold">Alternate projects</h3>
  <h3 class="mb-6 text-center text-white ">Scripts and projects worth mentionning too</h3>
  

  <div class="flex flex-wrap justify-center gap-5">
    <div class="transform transition hover:scale-105 text-center block max-w-sm p-6 bg-dark text-white rounded-lg shadow-md border-2 border-lightgray-100">
      <h5 class="mb-2 text-2xl font-bold tracking-tight">What's In My PCAP</h5>
      <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">A website made for PCAP data extraction, analysing and visualisation rendering in charts and graphs.</p>
      <a href="https://github.com/QuetzalCtrl/QuetzalTheRipper" target="_blank"
          class="bg-transparent mr-auto text-white hover:text-dark hover:bg-white rounded shadow hover:shadow-lg py-2 px-4 border hover:border-transparent">
          See on github
      </a>
    </div>
    <div class="transform transition hover:scale-105 text-center block max-w-sm p-6 bg-dark text-white rounded-lg shadow-md border-2 border-lightgray-100">
      <h5 class="mb-2 text-2xl font-bold tracking-tight ">Quetzal the Ripper</h5>
      <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">Quetzal the Ripper is a Password cracker (my JohnTheRipper homemade version), created for educational purposes only.</p>
      <a href="https://github.com/QuetzalCtrl/QuetzalTheRipper" target="_blank"
          class="bg-transparent mr-auto text-white hover:text-dark hover:bg-white rounded shadow hover:shadow-lg py-2 px-4 border hover:border-transparent">
          See on github
      </a>
    </div>
  </div>
</section>

<div v-if="loading">
    <LoadingScreen/>
</div>


</template>

<script setup>
import { ref } from 'vue'

import LoadingScreen from './LoadingComponent.vue';
import CardProjectComponent from './CardProjectComponent.vue';
const projects = [
  {
    name: "Vuln_ERR_able challenge",
    desc: "A simple CTF challenge where you'll be confronted to common web exploitation, enumeration, and some basic privesc.",
    github: "https://github.com/QuetzalCtrl/Vuln_ERR_able-CTF-Challenge/",
    image: "https://user-images.githubusercontent.com/58345798/210528518-a7333581-3ff7-495c-91ab-d2b09fe59f8a.png",
    techs: ["assets/tech/vagrant.png", "assets/tech/virtualbox.png", "assets/tech/nginx.png", "assets/tech/flask.png", "assets/tech/bash.png"],
    gif: "https://user-images.githubusercontent.com/58345798/210528518-a7333581-3ff7-495c-91ab-d2b09fe59f8a.png"
  }, 
  {
    name: "Catch Me If You Can",
    desc: "Catch Me If You Can (or ifucan) is a tool that performs automated IP rotation using proxies or VPNs on Linux systems.",
    github: "https://github.com/QuetzalCtrl/CatchMeIfYouCan",
    image: "https://user-images.githubusercontent.com/58345798/210527533-c440dde1-c891-452a-a518-b874c8abd124.png",
    techs: ["assets/tech/bash.png", "assets/tech/protonvpn.png", "assets/tech/cyberghost.png", "assets/tech/windscribe.png"],
    gif: "https://user-images.githubusercontent.com/58345798/210527642-79f0a6f6-2f69-40f7-9cce-f308d71935cb.gif"
  },
  {
    name: "Sokoban",
    desc: "A puzzle game that runs in a terminal. You'll have to push the boxes around in a warehouse, trying to get them to storage locations.",
    github: "https://github.com/QuetzalCtrl/Sokoban",
    image: "https://user-images.githubusercontent.com/58345798/210526459-8bc9776e-3833-4bc8-a463-e8a13fcf753a.png",
    techs: ["assets/tech/c.png", "assets/tech/makefile.png"],
    gif: "https://user-images.githubusercontent.com/58345798/210526525-41f4d515-93dc-451e-a23c-d33fc2b05ba3.gif"
  }
]
let loading = ref(false);
// const alt_projects = [
//   {
//     name: "Catch Me If You Can",
//     desc: "Catch Me If You Can (or ifucan) is a tool that performs automated IP rotation using proxies or VPNs on Linux systems.",
//     github: "https://github.com/QuetzalCtrl/CatchMeIfYouCan",
//     image: "assets/projects/ifucan.png",
//     techs: ["../assets/tech/bash.png", "../assets/tech/protonvpn.png", "../assets/tech/cyberghostvpn.png", "../assets/tech/windscribe.png"],
//     gif: "assets/projects/ifucan.png"
//   },
//   {
//     name: "Quetzal the Ripper",
//     desc: "Quetzal the Ripper is a Password cracker (my JohnTheRipper homemade version), created for educational purposes only.",
//     github: "https://github.com/QuetzalCtrl/QuetzalTheRipper",
//     image: "assets/projects/quetzal.png",
//     techs: ["../assets/tech/bash.png", "../assets/tech/openssl.png"],
//     gif: "assets/projects/quetzal.png"
//   }
// ]
</script>