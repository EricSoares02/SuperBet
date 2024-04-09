<script setup lang="ts">

import HomeIcon from '~/components/icons/HomeIcon.vue';
import UserIcon from '~/components/icons/UserIcon.vue';



const user = {
  name: 'Eric Soares',
  money: '$ 1000' ,
}

const buttonSettings = {
  color: '#fafafa',
  size: '22px'
}


</script>

<template>
  <div class="w-screen h-screen bg-midnight block text-white">
    <header class="w-full h-20 flex justify-between shadow-lg ">

      <div class="w-1/3 h-full flex items-center justify-center">
        <div class="w-4/5 h-full flex items-center justify-start">
          <img src="/assets/logo/logo.png" alt="Logo" class="w-1/3 h-full object-cover translate-y-1">
        </div>
      </div>

      <div class="w-1/3 flex">
        <div class="w-2/3 h-full flex flex-col gap-y-2 justify-center items-end font-semibold">
          <span class="text-base">{{ user.name }}</span>
          <span class="text-sm">{{ user.money }}</span>
        </div>
        <div class="w-1/3 h-full flex justify-start items-center pl-10">
            <img src="/public/dog.jpg" alt="User" class="w-12 h-12 object-cover rounded-full">
        </div>
      </div>

    </header>
    <main class="h-auto min-h-screen flex absolute">
      <aside class="w-64 fixed left-0 flex flex-col items-center pt-2">
        <div class="w-5/6 h-12 flex gap-3 items-center justify-evenly rounded-xl px-2 mb-2 bg-night-800">
          <button class="w-2/4 h-4/5 rounded-lg flex items-center justify-evenly text-sm font-semibold bg-purple-500">Casino</button>
          <button class="w-2/4 h-4/5 rounded-lg flex items-center justify-evenly text-sm font-semibold">Games</button>
        </div>
        <nav class="w-5/6 h-2/5 flex flex-col rounded-xl">
          <ul class="w-full h-full flex flex-col gap-1">
            

            <NavButtons name-page="Home" url-page="/">
              <HomeIcon :color="buttonSettings.color" :size="buttonSettings.size"/>
            </NavButtons>

            <NavButtons name-page="Golden Cat" url-page="/golden-cat">
              <img src="/assets/icons/goldCat.png" alt="Gold Cat" class="w-6 h-6 object-contain">
            </NavButtons>

            <NavButtons name-page="Wallet" url-page="/wallet">
              <WalletIcon :color="buttonSettings.color" :size="buttonSettings.size"/>
            </NavButtons>

            <NavButtons name-page="Account" url-page="/account">
              <UserIcon :color="buttonSettings.color" :size="buttonSettings.size"/>
            </NavButtons>

          </ul>
        </nav>
      </aside>
      <div class="w-5/6 relative left-80">
          <slot/>
      </div>   
    </main>
  </div>
</template>
