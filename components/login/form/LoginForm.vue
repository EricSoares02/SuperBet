<script setup lang="ts">
const formStyle = {
  default: {
    input:
      "appearance-none flex border-gray-300 border rounded rounded-lg w-3/4 py-2 px-3 text-text-gray leading-tight focus:outline-none focus:shadow-outline bg-gray-200 mb-4",
    label: "block text-text-gray text-sm font-bold mb-2 w-3/4 text-start",
  },
  email: {
    for: "Email",
    type: "email",
  },
  password: {
    for: "Password",
    type: "password",
  },
};
</script>

<template>
  <section class="w-4/5 h-full">
    <div class="w-full h-2/5 flex flex-col items-center justify-center">
      <img
        src="/assets/logo/logo.png"
        alt="Logo"
        class="rounded-full w-16 bg-midnight"
      />
      <h1 class="text-2xl font-semibold">Hi, Welcome Back!</h1>
      <h2 class="text-center text-xs w-4/5 text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laudantium
        ducimus cumque. Ut dolores nobis recusandae velit aliquam, praesentium
        sit aut fugit nam.
      </h2>
    </div>

    <div class="w-full h-3/5 flex justify-center items-center">
      <form action="submit" class="block w-full h-full items-center">
        <div class="w-full h-4/5 flex flex-col items-center mb-6">
          <LoginInput
            :class-label="formStyle.default.label"
            :class-input="formStyle.default.input"
            :for="formStyle.email.for"
            :type="formStyle.email.type"
          />

          <LoginInput
            :class-label="formStyle.default.label"
            :class-input="formStyle.default.input"
            :for="formStyle.password.for"
            :type="formStyle.password.type"
          />
          <span class="w-4/5 flex text-right mt-6"
            ><a
              class="w-full text-end inline-block align-baseline font-bold text-sm text-blue-400 hover:text-blue-700"
              href="#"
            >
              Forgot Password?
            </a></span
          >

          <div class="mt-6 w-full h-1/5 translate-y-16">
            <LoginSubmitButton />
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
