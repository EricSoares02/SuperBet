<script setup lang="ts">
import type { TopLeaderType } from "~/modules/types/topLeaders";

 defineProps<{
  leader: Array<TopLeaderType>;
}>();

const icons = {
    color: '#f2f2f2',
    size: '30px'
}
</script>

<template>
  <ol v-for="top in leader" start="1">
    <div
      class="w-56 h-5/6 bg-blue-700 rounded-2xl flex flex-col items-center justify-center"
    >
      <div class="w-full h-2/4 flex items-center justify-center">
        <img
          :src="top.photo"
          alt="User Photo"
          class="w-12 h-12 object-cover rounded-2xl"
        />
      </div>
      <div class="w-full h-2/4 flex items-start justify-around">
        {{ top.name }}
      </div>
    </div>
  </ol>
</template>
