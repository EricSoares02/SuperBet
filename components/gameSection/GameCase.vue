<script setup lang="ts">
import type { GamesType } from '~/modules/types/games';

defineProps<{
    game: GamesType
}>()


</script>

<template>
 <div class="w-44 h-full rounded-2xl relative flex justify-center bg-no-repeat cursor-pointer bg-test hover:w-48 hover:h-[110%] duration-700">
    <img :src="game.photo" alt="game" class="h-full w-full rounded-2xl object-cover">
   <span class="w-full flex justify-center font-extrabold text-xl absolute bottom-10 max-2xl:text-sm">{{ game.name.toUpperCase() }}</span>
 </div>
</template>
