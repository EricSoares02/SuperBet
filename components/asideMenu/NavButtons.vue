<script setup lang="ts">
const props = defineProps<{
  namePage: string;
  urlPage: string;
}>();

const route = useRoute();

function NavButtonsIsActive(currentUrl: string, urlPage: string) {
  const defaultStyle =
    "w-full h-[3rem] flex gap-5 items-center px-4 rounded-lg text-sm";

  if (currentUrl === urlPage) {
    return `${defaultStyle} bg-purple-500 font-semibold`;
  }

  return `${defaultStyle} font-normal bg-night-800`;
}

const style = NavButtonsIsActive(
  route.fullPath.split("/")[1],
  props.urlPage.slice(1)
);

</script>

<template>
  <li :class="style">
    <slot />
    <a :href="urlPage">{{ namePage }}</a>
  </li>
</template>
