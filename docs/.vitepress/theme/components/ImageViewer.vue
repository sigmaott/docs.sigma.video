<script setup lang="ts">
import { ref } from 'vue'
import { withBase } from 'vitepress'

defineProps<{
  src: string
  alt?: string
}>()

const show = ref(false)
</script>

<template>
  <img class="cursor-pointer" :src="withBase(src)" :alt="alt ?? alt" @click="show = true" />
  <Teleport to="body">
    <div v-if="show" class="size-full bg-black/50 inset-0 flex items-center justify-center px-20 fixed z-51 of-hidden"
      @click="show = false">
      <img class="cursor-pointer" :src="withBase(src)" :alt="alt ?? alt" @click="show = true" />
    </div>
  </Teleport>
</template>

<style scoped></style>
