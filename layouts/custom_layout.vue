<script setup lang="ts">

import HomeIcon from '~/components/icons/HomeIcon.vue';
import UserIcon from '~/components/icons/UserIcon.vue';
import type { UserHeaderType } from '~/modules/types/user';
import { ref, watch } from 'vue';

const user: UserHeaderType = {
  nickname: 'Eric Soares',
  money: '$ 1000',
  avatar: '/public/dog.jpg'
}

const buttonSettings = {
  color: '#fafafa',
  size: '22px'
}



</script>

<template>
  <div class="w-screen h-screen bg-midnight block text-white ">
    
    <DefaultHeader :data="user"/>


    <main class="w-full max-h-screen flex absolute top-24">
      <aside class="w-2/12 h-full max-h-screen fixed left-0 flex flex-col items-center pt-2 shadow-xl max-xl:w-1/5">
        <div class="w-5/6 h-12 flex gap-3 items-center justify-between rounded-xl px-2 mb-2">
          <p class="text-[12px] text-gray-400">Menu Bar</p>
          <button class="w-1/4 h-4/5 rounded-lg flex items-center justify-evenly text-sm font-semibold bg-night-800">X</button>
        </div>
        <nav class="w-5/6 h-[500px] flex flex-col rounded-xl">
          <ul class="w-full h-full flex flex-col gap-1">
            

            <NavButtons name-page="Home" url-page="/">
              <HomeIcon :color="buttonSettings.color" :size="buttonSettings.size"/>
            </NavButtons>

            <NavButtons name-page="Golden Cat" url-page="/golden-cat">
              <img src="/assets/icons/goldCat.png" alt="Gold Cat" class="w-10 h-10 object-contain">
            </NavButtons>

            <NavButtons name-page="Games" url-page="/games">
              <GameIcon :color="buttonSettings.color" :size="buttonSettings.size"/>
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

      <div class="relative left-80 w-10/12 h-full max-2xl:left-60 max-xl:w-4/5">
          <slot/>
      </div>   
    </main>
  </div>
</template>
