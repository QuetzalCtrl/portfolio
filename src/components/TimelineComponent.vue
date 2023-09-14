<template>
    <section id="about" class="font-montserrat">
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
                    <TimelineText desc="High school is a time to figure out what you want to do when you grow up, right? For me, it was clear: computer science, specifically networking and cybersecurity, is what I loved! So that's what I pursued. I definitely wanted to learn more than just what I learned from my small website projects and CTF challenges at that time."/>
                </div>
                </div>
                <div class="flex justify-between items-center w-full right-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="order-1  w-5/12 px-1 text-left">
                    <p class="mb-3 text-base text-green">Sept 2019 - July 2021</p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl">DUT info @ <a target="_blank" class="text-blue font-bold" href="https://www.iut-a.univ-lille.fr/en/home/">IUT A Lille</a></h4>
                    <TimelineText desc="During those two years, I realized that computer science is a very vast world! Web development, object-oriented programming, databases, networking, system administration... I learned about a lot of different computer-related concepts and aspects! The biggest benefit of learning all these things was that I figured out what I really liked to do, and what I didn't. This gave me confidence and motivated me to continue learning more about cybersecurity and networking."/>
                </div>
                </div>
                <div class="flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="order-1 w-5/12 px-1 text-right">
                    <p class="mb-3 text-base text-green">Sept 2020 - July 2021</p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl">Web Dev. @ <a target="_blank" href="https://andersontech.fr/" class="text-blue font-bold">Anderson Tech</a></h4>
                    <TimelineText desc="My very first real job experience! I chose to do my second year of DUT as a work-study program, so I worked as a web developer at Anderson Tech, a small tech startup company. Even though I know I don't want to be a web developer my whole career, I believe it's essential to know how to create full stack web apps, how to manage and store data, and even learn different languages and frameworks before focusing on security aspects. During this year, I learned how to work independently, make decisions, and work with deadlines and real clients. I also learned how to adapt my skills to work with other developers as part of a team."/>
                </div>
                </div>

                <div class="flex justify-between items-center w-full right-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="order-1  w-5/12 px-1">
                    <p class="mb-3 text-base text-green">Sept 2021 - July 2022</p>
                    <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left">Gap year</h4>
                    <TimelineText desc="After my DUT, I chose to take a break from my studies to focus on other things. This year has been very rewarding for me! In addition to traveling a lot, I was able to concentrate on personal projects that were close to my heart, such as this portfolio or even a musical project."/>
                </div>
                </div>

                <div class="flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="order-1 w-5/12 text-right">
                    <p class="mb-3 text-base text-green">Since Sept 2023</p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl">L3 info @ <a target="_blank" href="https://www.univ-lille.fr/" class="text-blue font-bold">Université de Lille</a></h4>
                    <TimelineText class="px-1" desc="It was time for me to get back to studies after a year of interruption. I chose to enter the Université de Lille's CS Bachelor's degree because it is one of the best entry points for the degree I'm aiming for: the 'Cloud Computing and Cybersecurity' Master's degree from that same university."/>
                </div>
                </div>

            </div>
            <img class="mx-auto -mt-50 md:-mt-50" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
            </div>
        </div>
        <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p class="text-green uppercase tracking-loose">work and experiences</p>
            <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 font-bold">About me</p>
            <p class="text-sm md:text-base text-gray-50 mb-4">
                Here are my different experiences over time. You can also visit my LinkedIn profile where my complete background is detailed, and don't hesitate to get in touch with me there!
            </p>
            <a href="https://www.linkedin.com/in/hugo-vanrobaeys/"
            class="bg-transparent mr-auto hover:bg-green text-green hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border hover:border-transparent"> 
            My LinkedIn</a>
        </div>
        </div>
    </div>
  </section>
</template>
<script setup>
import TimelineText from './TimelineText.vue';
</script>