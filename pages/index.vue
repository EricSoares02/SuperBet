<script setup lang="ts">
import TopLeaders from "~/components/topLeader/TopLeaders.vue";
import type { TopLeaderType } from "~/modules/types/topLeaders";

definePageMeta({
  middleware: "auth",
  layout: "custom-layout",
});

const topLeaders: Array<TopLeaderType> = [
  {
    nickname: "Marcinha",
    valueWin: "$744",
    avatar: "https://lh3.google.com/u/0/d/1RQE0Y9X3m6SNlxJ3z7aCdN29uJ84m6Zc",
    date: "2024.04.10 12:30",
    selectedNumber: 123456,
    ticketsQuantity: 2
  },
  {
    nickname: "Everaldo",
    valueWin: "$744",
    avatar: "https://lh3.google.com/u/0/d/1RQE0Y9X3m6SNlxJ3z7aCdN29uJ84m6Zc",
    date: "2024.04.10 12:30",
    selectedNumber: 123456,
    ticketsQuantity: 2
  },
  {
    nickname: "Davi",
    valueWin: "$744",
    avatar: "https://lh3.google.com/u/0/d/1RQE0Y9X3m6SNlxJ3z7aCdN29uJ84m6Zc",
    date: "2024.04.10 12:30",
    selectedNumber: 123456,
    ticketsQuantity: 2
  },
  {
    nickname: "Giselle",
    valueWin: "$744",
    avatar: "https://lh3.google.com/u/0/d/1RQE0Y9X3m6SNlxJ3z7aCdN29uJ84m6Zc",
    date: "2024.04.10 12:30",
    selectedNumber: 123456,
    ticketsQuantity: 2
  },
  {
    nickname: "Eu",
    valueWin: "$744",
    avatar: "https://lh3.google.com/u/0/d/1RQE0Y9X3m6SNlxJ3z7aCdN29uJ84m6Zc",
    date: "2024.04.10 12:30",
    selectedNumber: 123456,
    ticketsQuantity: 2
  },

];
</script>

<template>
  <div id="homeDiv" class="w-11/12 h-[52rem] max-h-svh block overflow-y-scroll">
    <section class="w-full h-80 mb-10">
      <div class="w-full h-full bg-slider rounded-3xl flex">
        <div class="w-1/2 h-full flex flex-col gap-4 p-14">
          <h1 class="font-extrabold text-2xl">See the golden cat <br>and try your luck!</h1>
          <p class="font-normal text-sm"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere soluta quod fugit sed tempore, deleniti repellat, quidem in est iste exercitationem libero doloremque voluptates eligendi beatae ipsam repellendus reprehenderit hic?</p>
          <a href="/golden-cat" class="font-semibold rounded-full w-2/5 h-1/6 bg-blue-400 flex items-center justify-center cursor-pointer">Golden Cat</a>
        </div>
        <div class="w-1/2 h-full flex items-end justify-end">
          <img src="/assets/icons/goldCat.png" alt="Golden Cat" class="w-2/4 h-full object-contain ">
        </div>
      </div>
    </section>

    <section class="w-full h-96 mb-2">
      <div class="w-full h-1/4 flex items-center justify-between px-3">
        <div class="flex w-1/3 h-full items-center justify-between">
          <h1 class="text-lg font-bold text-nowrap">TOP LEADERS</h1>
          <span class="bg-white mx-4 h-2/4 w-px text-[1px]">l</span>
          <p class="text-xs">
            The top is updated whenever someone earns a fortune. Participate in the lottery and take
            first place!
          </p>
        </div>
        <HomeMiniButton href="/games" title="Lottery"/>
      </div>

      <div class="w-full h-3/4 flex items-center">
        <ul class="w-full h-full flex flex-col gap-1">
          <TopLeaders :leader="topLeaders" />
        </ul>
      </div>
    </section>

    <GameConteiner section-name="Casino Games"/>
    <GameConteiner section-name="Tente a Sorte"/>
  </div>
</template>

<style>
#homeDiv {
  :-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
