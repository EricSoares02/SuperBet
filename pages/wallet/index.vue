<script setup lang="ts">

definePageMeta({
  middleware: 'auth',
  layout: 'custom-layout'
})


</script>

<template>
    <h1>main</h1>

    <a href="/login">click</a> 
</template>
