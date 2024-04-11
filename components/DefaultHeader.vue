
<script setup lang="ts">

type MyType = {
    nickname: string,
    money: string,
    avatar: string
}

defineProps<{
    data: MyType
}>();
</script>

<template>
    <header class="w-full h-20 fixed top-0 flex justify-between shadow-lg">
      <div class="w-1/3 h-full flex items-center justify-center">
        <div class="w-4/5 h-full flex items-center justify-start">
          <img src="/assets/logo/logo.png" alt="Logo" class="w-1/3 h-full object-cover translate-y-1">
        </div>
      </div>

      <div class="w-1/3 flex">
        <div class="w-2/3 h-full flex flex-col gap-y-2 justify-center items-end font-semibold">
          <span class="text-base">{{ data.nickname }}</span>
          <span class="text-sm">{{ data.money }}</span>
        </div>
        <div class="w-1/3 h-full flex justify-start items-center pl-10">
            <img :src="data.avatar" alt="User" class="w-12 h-12 object-cover rounded-full">
        </div>
      </div>
    </header>
</template>