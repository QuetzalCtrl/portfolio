<template>
    <section class="font-montserrat">
        <div class="text-white pb-8">
        <div class="container mx-auto flex flex-col-reverse items-start md:flex-row my-12 md:my-24 ">
        <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div class="container mx-auto w-full h-full">
            <div class="relative wrap overflow-hidden p-10 h-full">
                <div class="border-2-2 border-green absolute h-full border"
                style="right: 50%; border: 2px solid #5db131;"></div>
                <div class="border-2-2 border-green absolute h-full border"
                style="left: 50%; border: 2px solid #5db131;"></div>
                <div class="flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="order-1 w-5/12 px-1 text-right">
                    <p class="mb-3 text-base text-green">July 2019</p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl">BAC S &#8226; Maths spe</h4>
                    <TimelineText desc="Highscool, or get to know what you want to do 'when you grow up', right? Well, for me, it was an evidence: computer science, more specifically networking and cybersecurity, that's what I loved! So that's what I did :) I definitely wanted to get to know more than what I learned from my small website projects and CTF challenges I did at that time"/>
                </div>
                </div>
                <div class="flex justify-between items-center w-full right-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="order-1  w-5/12 px-1 text-left">
                    <p class="mb-3 text-base text-green">Sept 2019 - July 2021</p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl">DUT info @ <a target="_blank" class="text-blue font-bold" href="https://www.iut-a.univ-lille.fr/en/home/">IUT A Lille</a></h4>
                    <TimelineText desc="During those 2 years, I started to realize that computer science is a VERY vaste world! Web developpement, object-oriented programming, databases, networking, system administration,... I learned a lot of different computer-related notions and aspects! The biggest benefit I took advantage of learning all those concepts is that I learned what I really liked to do, and not to do. This comforted me, and pushed me to continue learning new cybersecurity and networking materials."/>
                </div>
                </div>
                <div class="flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="order-1 w-5/12 px-1 text-right">
                    <p class="mb-3 text-base text-green">Sept 2020 - July 2021</p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl">Web Dev. @ <a target="_blank" href="https://andersontech.fr/" class="text-blue font-bold">Anderson Tech</a></h4>
                    <TimelineText desc="My very first real job experience! I chose to do my 2nd year of DUT as a work-study program, so I worked as a Web Developer at Anderson Tech, a small tech startup company. Even if i know I don't want to be a web developer my whole carrer, I consider knowing how to create full stack web apps, how to manage and stock data, or even learn different languages and frameworks is essential and MUST be mastered before any security aspect. During this year, I learned to work by myself, to take decisions and to work with a deadline, real clients, and to adapt my skills to other developers as a member of a team."/>
                </div>
                </div>

                <div class="flex justify-between items-center w-full right-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="order-1  w-5/12 px-1 pb-16">
                    <p class="mb-3 text-base text-green">Sept 2021 - July 2022</p>
                    <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left">Gap year</h4>
                    <TimelineText desc="After my DUT, I chose to take a break from my studies, to focus on other things. This year has been very rewarding for me so far! In addition to having been able to travel a lot, I was able to concentrate on the realization of personal projects that were close to my heart, such as this portfolio, or even a musical project."/>
                </div>
                </div>
            </div>
            <img class="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
            </div>
        </div>
        <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p class="text-green uppercase tracking-loose">work and experiences</p>
            <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 font-bold">About me</p>
            <p class="text-sm md:text-base text-gray-50 mb-4">
            Here's my different experiences over time. You can also visit my LinkedIn profile where my complete background is detailed, and of course don't hesitate to get in touch with me there!
            </p>
            <a href="#"
            class="bg-transparent mr-auto hover:bg-green text-green hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border hover:border-transparent"> 
            See on LinkedIn</a>
        </div>
        </div>
    </div>
  </section>
</template>
<script setup>
import TimelineText from './TimelineText.vue';
</script>