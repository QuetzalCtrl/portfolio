<template>
<section id="projects" class="font-montserrat">
  <h3 class="mt-12 text-center text-4xl text-white font-bold">My projects</h3>
  <h3 class="my-6 text-center text-white ">My main projects</h3>

  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <template v-for="i in projects" :key="i">
        <CardProjectComponent @showmodal="showModal = true" v-bind:project="i"></CardProjectComponent>
      </template>
    </div>
  </div>
  <h3 class="mt-6 text-center text-2xl text-white font-bold">Alternate projects</h3>
  <h3 class="mb-6 text-center text-white ">Scripts and projects worth mentionning too</h3>
  

  <div class="flex flex-wrap justify-center gap-5">
    <div class="transform transition hover:scale-105 text-center block max-w-sm p-6 bg-dark text-white rounded-lg shadow-md border-2 border-lightgray-100">
      <h5 class="mb-2 text-2xl font-bold tracking-tight">What's In My PCAP</h5>
      <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">A website made for PCAP data extraction, analysing and visualisation rendering in charts and graphs.</p>
      <a href="https://github.com/QuetzalCtrl/QuetzalTheRipper"
          class="bg-transparent mr-auto text-white hover:text-dark hover:bg-white rounded shadow hover:shadow-lg py-2 px-4 border hover:border-transparent">
          See on github
      </a>
    </div>
    <div class="transform transition hover:scale-105 text-center block max-w-sm p-6 bg-dark text-white rounded-lg shadow-md border-2 border-lightgray-100">
      <h5 class="mb-2 text-2xl font-bold tracking-tight ">Quetzal the Ripper</h5>
      <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">Quetzal the Ripper is a Password cracker (my JohnTheRipper homemade version), created for educational purposes only.</p>
      <a href="https://github.com/QuetzalCtrl/QuetzalTheRipper"
          class="bg-transparent mr-auto text-white hover:text-dark hover:bg-white rounded shadow hover:shadow-lg py-2 px-4 border hover:border-transparent">
          See on github
      </a>
    </div>
  </div>
</section>


<div>
    <Transition>
        <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none justify-center items-center flex">
            <div class="relative w-auto my-6 mx-auto max-w-6xl z-700">
                <!--content-->
                <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <!--header-->
                    <div class="p-2 border-b border-solid border-slate-200 rounded-t flex items-center justify-end">
                        <button class="p-1 ml-auto bg-transparent border-0 text-black text-3xl font-semibold" v-on:click="showModal = false">
                            <span class="text-black h-6 w-6 text-2xl block">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <!--body-->
                    <div class="relative p-4 flex-auto">
                        <div>
                            <div class="flex flex-col p-6 rounded-lg bg-white">
                                <p class="text-2xl font-bold">toto</p>
                                <p class="italic">test</p>
                                <div class="flex items-center justify-start gap-2">
                                    <a target="_blank" class="text-sky-500 underline italic" href="">GitHub</a>
                                    <!-- <span v-on:click="copyURL('https://my.matterport.com/show/?m='+this.models.data[this.currModelPos].modelId)"  title="copier le lien">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="cursor-pointer">
                                            <path d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span> -->
                                </div>
                                <!-- <OptionButtons :models="this.models" :modelPos="this.currModelPos" @exit="reactivateFromOptions"></OptionButtons> -->
                            </div>
                        </div>
                        <!-- <Detailsvv :model="currModel" :close="showModal" @exit="toggleModal(null)"></Detailsvv> -->
                    </div>
                </div>
            </div>
            <div class="opacity-50 fixed inset-0 z-600 bg-black" v-on:click="showModal = false"></div>
        </div>
    </Transition>
    <!-- <div class="opacity-25 fixed inset-0 z-40 bg-black" v-on:click="toggleModal('')"></div> -->
</div>

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
let showModal = ref(false);
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