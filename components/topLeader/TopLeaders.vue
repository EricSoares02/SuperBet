<script setup lang="ts">
import type { TopLeaderType } from "~/modules/types/topLeaders";

 defineProps<{
  leader: Array<TopLeaderType>;
}>();

const clockIcon = {
    color: '#8C8C8C',
    size: '12px'
}
const ticketIcon = {
    color: '#8C8C8C',
    size: '16px'
}
</script>

<template>
  <ol v-for="top in leader" start="1" class="w-full h-12 flex items-center justify-between px-2 bg-night-800 rounded-xl font-extrabold"> 
    <div class="w-1/6 h-full flex items-center gap-9">
      <img :src="top.avatar" alt="User Photo" class="w-10 h-10 object-cover rounded-full">
      <span class="text-xs">{{ top.nickname }}</span>
    </div>
    <div class="w-2/6 h-full flex items-center justify-between gap-9 text-xs">
      <span class="flex items-center gap-1"> <TicketIcon :size="ticketIcon.size" :color="ticketIcon.color"/>{{ top.ticketsQuantity }}</span>
      <span class="flex items-center gap-1"><ClockIcon :size="clockIcon.size" :color="clockIcon.color"/>{{ top.date }}</span>
      <span>{{ top.valueWin }}</span>
    </div>
    <div class="w-3/6 h-full flex items-center justify-end">
        <div class="w-32 h-5/6 flex items-center justify-center rounded-xl bg-blue-700">
         <span>{{ top.selectedNumber }}</span> 
        </div>
    </div>
  </ol>
</template>