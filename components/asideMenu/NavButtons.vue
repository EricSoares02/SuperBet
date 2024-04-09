<script setup lang="ts">

import NavButtonsIsActive from '~/utils/navbuttons/activelink';

const props = defineProps<{
    namePage: string,
    urlPage: string
}>();

const route = useRoute();

const style = NavButtonsIsActive(route.fullPath.split('/')[1], props.urlPage.slice(1));

</script>

<template>

    <li :class="style">
        <slot/>
        <a :href="urlPage">{{ namePage }}</a>
    </li>

</template>