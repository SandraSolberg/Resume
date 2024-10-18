<script setup>
import DividerComponent from './DividerComponent.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div className="container">
    <h2>{{ title }}</h2>
    <DividerComponent />

    <slot name="content"></slot>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  text-align: center;
}
</style>
