<template>
  <!-- <div id="nav">
    <router-link to="/projects/1">P 1</router-link> |
    <router-link to="/projects/2">P 2</router-link> |
    <router-link to="/projects/3">P 3</router-link> |
    <router-link to="/projects/4">P 4</router-link>
  </div> -->
  <!-- <router-view></router-view> -->
  <section>
    <div class=" text-white md:py-20">
      <div class="container mx-auto flex flex-col md:flex-row items-center md:my-36">
        <div class="flex flex-col w-full lg:w-1/3 justify-center mt-24 md:my-0 items-start p-8">
          <h1 class="text-3xl md:text-5xl text-green pb-2 tracking-loose">hugo<span class="text-lightgray">.toString()</span></h1>
          <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Hi! I'm Hugo Vanrobaeys  
          </h2>
          <p class="text-sm md:text-base text-gray-50 mb-4">A Computer Science student,<br>
            cybersecurity enthusiast and basically<br>
            passionate about anything with a CPU.</p>
          <a href="#"
            class="bg-transparent text-green rounded shadow hover:shadow-lg py-2 px-4 border border-green">
            PDF Resume</a>
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


    <div class="scroll-down"></div>


  </section>

</template>
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