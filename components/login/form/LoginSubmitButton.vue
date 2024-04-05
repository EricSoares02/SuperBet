
<script setup lang="ts">


defineProps<{
    prop?: string
}>();



</script>


<template>
    <div class="flex flex-col w-full h-full items-center">
          <button
            class="w-4/5 hover:bg-blue-700 bg-blue-400 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-700"
            type="submit"
          >
            Login
          </button>
        </div>
</template>