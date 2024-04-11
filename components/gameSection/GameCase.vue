<script setup lang="ts">
import type { GamesType } from '~/modules/types/games';

defineProps<{
    game: GamesType
}>()


</script>

<template>
 <div class="w-44 h-full rounded-2xl relative flex justify-center bg-no-repeat bg-test">
    <img :src="game.photo" alt="game" class="h-full w-full rounded-2xl object-cover">
   <span class="font-extrabold text-2xl absolute bottom-10">{{ game.name.toUpperCase() }}</span>
 </div>
</template>
