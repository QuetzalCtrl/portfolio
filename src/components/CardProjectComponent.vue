<template>
    <div class="z-10 px-1 w-full my-4 mx-4 md:mx-0 md:my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

        <!-- Article -->
        <article class="transform transition hover:scale-105 border-2 border-lightgray-100 overflow-hidden rounded-lg shadow-lg bg-lightgray-100">

            <a target="_blank" :href="props.project.github">
                <img alt="Placeholder" class="rounded-lg block h-auto w-full" :src="props.project.image">
            </a>

            <header class="bg-dark text-lightgray-100 mt-1 rounded-t-lg text-center leading-tight p-2 md:p-4">
                <h1 class="text-lg font-bold">
                    {{props.project.name}}
                </h1>
            </header>

            <div class="flex flex-col gap-2 p-2">
                <p class=" text-sm">
                    {{props.project.desc}}
                </p>
                <div class="text-center">
                    <button>
                    <a target="_blank" :href="props.project.github"
                    class="flex gap-2 bg-transparent mr-auto hover:bg-green text-green hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border hover:border-transparent">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="w-5 h-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor" /></g>
                    </svg>  
                    See on GitHub
                </a>
                </button>
                </div>
                <footer class="pt-4">
                    <p class="text-center font-bold">
                        Tech & tools used
                    </p>
                    <div class="bg-dark rounded-b-lg flex items-center justify-center gap-4 p-2">
                        <template v-for="tech in props.project.techs" :key="tech">
                            <img :alt="props.project.name" class="block h-10"  :src="require(`@/${tech}`)">  
                        </template>
                    </div>
                </footer>
            </div>
            
            

        </article>



    </div>

</template>

<script setup>



import { defineProps } from 'vue'
const props = defineProps({
  project: Object
})
</script>