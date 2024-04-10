<script setup lang="ts">
import TopLeaders from '~/components/topLeader/TopLeaders.vue';
import type { TopLeaderType } from '~/modules/types/topLeaders';


definePageMeta({
  middleware: 'auth',
  layout: 'custom-layout'
})

const topLeaders: Array<TopLeaderType> = [
{
  name: 'Marcinha',
  totalWin: '$744',
  lastWin: '$244',
  photo: 'https://lh3.google.com/u/0/d/1RQE0Y9X3m6SNlxJ3z7aCdN29uJ84m6Zc'
}, 
{
  name: 'Everaldo',
  totalWin: '$744',
  lastWin: '$244',
  photo: 'https://lh3.google.com/u/0/d/1RQE0Y9X3m6SNlxJ3z7aCdN29uJ84m6Zc'
},
{
  name: 'Davi',
  totalWin: '$744',
  lastWin: '$244',
  photo: 'https://lh3.google.com/u/0/d/1RQE0Y9X3m6SNlxJ3z7aCdN29uJ84m6Zc'
},
{
  name: 'Giselle',
  totalWin: '$744',
  lastWin: '$244',
  photo: 'https://lh3.google.com/u/0/d/1RQE0Y9X3m6SNlxJ3z7aCdN29uJ84m6Zc'
},
{
  name: 'Eu',
  totalWin: '$744',
  lastWin: '$244',
  photo: 'https://lh3.google.com/u/0/d/1RQE0Y9X3m6SNlxJ3z7aCdN29uJ84m6Zc'
},
];

</script>

<template>
    <div id="homeDiv" class="w-11/12 h-[52rem] max-h-svh block overflow-y-scroll">

      <section class="w-full h-80 mb-2">
        oi
      </section>


      <section class="w-full h-72 mb-2">
        <div class="w-full h-1/3 flex items-center justify-between px-3">
          <div class="flex w-1/3 h-full  items-center justify-between">
            <h1 class="text-lg font-bold text-nowrap">TOP LEADERS</h1>
            <span class="bg-white mx-4 h-2/4 w-px text-[1px]">l</span>
            <p class="text-sm">The top is updated every day. Participate in the lottery and take first place!</p>
          </div>
          <button>See more</button>
        </div>

        <div class="w-full h-2/3 flex items-center">
            <ul class="w-full h-full flex  gap-6">
              <TopLeaders :leader="topLeaders"/>
            </ul>
        </div>
      </section>

      <section class="w-full h-[50rem]">
        <div class="w-full h-1/6 flex items-center p-10">
          <h1 class="text-xl font-bold text-nowrap">Game Section</h1>
        </div>
        <div class="w-full h-5/6 bg-blue-400">

        </div>
      </section>

    </div>
</template>

<style>

#homeDiv{
  :-webkit-scrollbar {
  display: none;
  }
  -ms-overflow-style: none;  
  scrollbar-width: none;  
}
</style>