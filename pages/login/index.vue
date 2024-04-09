<script setup>
definePageMeta({
  middleware: 'redirect-me'
})

</script>

<template>
  <div>
    <div class="w-screnn h-screen flex justify-center items-center bg-blue-700">
      <LoginCase>
        <LoginForm />
      </LoginCase>
    </div>
  </div>
</template>
