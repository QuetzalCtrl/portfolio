<template>
  <!-- <div id="nav">
    <router-link to="/projects/1">P 1</router-link> |
    <router-link to="/projects/2">P 2</router-link> |
    <router-link to="/projects/3">P 3</router-link> |
    <router-link to="/projects/4">P 4</router-link>
  </div> -->
  <!-- <router-view></router-view> -->
  <section id="home">
    <div class="font-montserrat text-white md:pt-20 pb-20 min-h-screen">
      <div class="container mx-auto flex flex-col md:flex-row items-center md:my-36">
        <div class="flex flex-col w-full lg:w-1/3 justify-center mt-24 md:my-0 items-start p-8">
          <h1 class="text-green pb-2 tracking-loose font-mono">root@portfolio:~# <span class="text-lightgray">vi hugo.md</span></h1>
          <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Hi! I'm Hugo Vanrobaeys  
          </h2>
          <p class="text-sm md:text-base text-gray-50 mb-4">A Computer Science student,<br>
            network & cybersecurity enthusiast and basically<br>
            passionate about anything with a CPU.</p>
          <div class="flex gap-2">
            <a href="#projects"
            class="bg-green mr-auto hover:bg-transparent text-white hover:text-green rounded shadow hover:shadow-lg py-2 px-4 border border-green hover:border-green">
            My projects</a>
            <a href="/CV_Hugo_Vanrobaeys_EN.pdf" target="_blank"
              class="bg-transparent mr-auto hover:bg-green text-green hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border hover:border-transparent">
              PDF Resume</a>
          </div>
        </div>
        <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
          <div class="h-48 flex flex-wrap content-center">
            <div>
              <img class="inline-block mt-28 hidden xl:block" src="../assets/csec.png"></div>
              <div>
                <img class="inline-block p-8 md:p-0 w-80 md:w-auto"  src="../assets/logo-alt.png"></div>
                <div>
                  <img class="inline-block mt-28 hidden lg:block" src="../assets/csec1.png"></div>
                </div>
              </div>
            </div>
          </div>

    <div class="md:block hidden">
      <div class="scroll-down"></div>
    </div>


  </section>
  <ProjectsComponent/>
  <TimelineComponent/>
  <ContactComponent/>
</template>
<script>
import TimelineComponent from '@/components/TimelineComponent.vue';
import ProjectsComponent from '@/components/ProjectsComponent.vue';
import ContactComponent from '@/components/ContactComponent.vue';
export default{
  components:{
    TimelineComponent,
    ProjectsComponent,
    ContactComponent
  }
}
</script>
<style scoped>
.scroll-down {
  position: absolute;
  left: 50%;
  bottom: 20px;
  display: block;
  text-align: center;
  font-size: 20px;
  z-index: 100;
  text-decoration: none;
  text-shadow: 0;
  width: 30px;
  height: 30px;
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  z-index: 9;
  left: 50%;
  -webkit-transform: translate(-50%, 0%) rotate(45deg);
  -moz-transform: translate(-50%, 0%) rotate(45deg);
  transform: translate(-50%, 0%) rotate(45deg);
  -webkit-animation: fade_move_down 4s ease-in-out infinite;
  -moz-animation:    fade_move_down 4s ease-in-out infinite;
  animation:         fade_move_down 4s ease-in-out infinite;
}


/*animated scroll arrow animation*/
@-webkit-keyframes fade_move_down {
  0%   { -webkit-transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { -webkit-transform:translate(0,10px) rotate(45deg); opacity: 0; }
}
@-moz-keyframes fade_move_down {
  0%   { -moz-transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { -moz-transform:translate(0,10px) rotate(45deg); opacity: 0; }
}
@keyframes fade_move_down {
  0%   { transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { transform:translate(0,10px) rotate(45deg); opacity: 0; }
}


</style>