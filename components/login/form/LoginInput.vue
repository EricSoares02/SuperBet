
<script setup lang="ts">


defineProps<{
    classLabel: string,
    classInput: string,
    for: string,
    type: string
}>();



</script>


<template>
          <label :class="$props.classLabel" :for="$props.for">
            {{ $props.for }}
          </label>
          <input
            :class="$props.classInput"
            :id="$props.for"
            :type="$props.type"
            :placeholder="$props.for"
          ><slot></slot></input>
</template>