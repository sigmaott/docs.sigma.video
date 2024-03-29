<script lang="ts" setup>
import { ApiReference } from '@scalar/api-reference'
import { useData, } from 'vitepress'
import { watch, onMounted } from 'vue'

const props = defineProps<{
  url: string
}>()

const { isDark } = useData()

watch(isDark, () => {
  document.body.classList.toggle('dark-mode', isDark.value)
  document.body.classList.toggle('light-mode', !isDark.value)
})

onMounted(() => {
  document.body.classList.toggle('dark-mode', isDark.value)
  document.body.classList.toggle('light-mode', !isDark.value)
})

</script>

<template>
  <div class="api-reference-content">
    <ApiReference :configuration="{ spec: { url: url } }" />
  </div>
</template>

<style>
.api-reference-content {
  height: calc(100dvh - var(--vp-nav-height));
}

.darklight {
  display: none !important;
}

.darklight-reference-promo {
  opacity: 0;
}
</style>
