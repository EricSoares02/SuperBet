<template>
  <div class="w-3/4 h-3/4 bg-white rounded-3xl flex">
    <section class="rounded-l-3xl w-3/5 bg-blue-400 flex">
      <img
        src="/assets/login/loginImage.jpg"
        alt="Login Image"
        class="w-2/5 h-full object-cover rounded-l-3xl"
      />
      <div class="w-3/5 h-full block">
        <div class="w-full h-1/5 flex justify-center items-center">
          <h1 class="font-semibold text-white text-xl">You Can use these accounts</h1>
        </div>
        <div class="w-full h-4/5">

        </div>
      </div>
    </section>
    <section class="rounded-xl w-2/5 flex justify-center">
      <slot></slot>
    </section>
  </div>
</template>
