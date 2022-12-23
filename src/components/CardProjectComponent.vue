<template>
<div class=" px-1 w-full my-4 mx-4 md:mx-0 md:my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

<!-- Article -->
<article class="p-6 overflow-hidden rounded-lg shadow-lg text-white bg-dark">

    <a href="#">
        <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
    </a>

    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 class="text-lg">
            <a class="no-underline hover:underline " href="#">
                Exemple projet
            </a>
        </h1>
        <p class="text-grey-darker text-sm">
            A completer
        </p>
    </header>

    <footer class="flex items-center justify-between leading-none p-2 md:p-4">
        <a class="flex items-center no-underline " href="#">
            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
            <p class="ml-2 text-sm">
                Parler des techs utilisées, illustrer avec des petits logo, et ouvrir une modal détaillée quand on clique sur une card. Faire un gif d'illustration, et mettre le lien vers le repo github.
            </p>
        </a>
        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
            <span class="hidden">Like</span>
            <i class="fa fa-heart"></i>
        </a>
    </footer>

</article>
<!-- END Article -->

</div>
</template>

<script setup>
</script>