<script setup lang="ts">

defineProps<{
    title: string,
    href: string
}>()

</script>
<template>
<a href="/game" class="w-16 h-8 text-xs font-semibold rounded-xl flex items-center justify-center text-nowrap bg-purple-500">{{ title }}</a>
</template>