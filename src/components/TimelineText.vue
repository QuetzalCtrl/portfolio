<template>
    <div class="h-22 w-full">
        <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
            <span v-if="showMore!=null && !showMore">{{ truncated }}</span>
            <span v-else>{{ props.desc }}</span>
            <span class="font-bold cursor-pointer" v-if="showMore!=null" @click="showMore = !showMore"><br>{{ showMore ?"Show less":"Show more" }}</span>
        </p>
    </div>
</template>
<script setup>
import { defineProps, ref } from 'vue';
const props = defineProps({desc: String})
let truncated = props.desc.slice(0, 120)+'...';
let showMore = props.desc.length < 120 ? null : ref(false);
</script>