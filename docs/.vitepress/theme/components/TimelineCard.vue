<script lang="ts" setup>
import { VPLink } from 'vitepress/theme'
const props = defineProps<{
  item: any
}>()
</script>

<template>
  <div
    class="bg-$vp-c-bg-soft rounded-t of-hidden border border-$vp-c-bg-soft shadow">
    <div class="bg-$vp-c-brand-3 flex flex-wrap gap-2 w-full min-h-12 py-4">
      <div class="bg-$vp-c-brand-1 rounded-r py-0.5 text-$vp-c-white px-3 inline font-bold">
        {{ item.number }}
      </div>
      <div class="text-lg font-bold text-$vp-c-white">
        {{ item.title }}
      </div>
    </div>

    <div class="px-5 py-4">
      <div class="text-$vp-c-text-2">
        {{ item.description }}
      </div>

      <div class="my-4 grid gap-4">
        <div v-for="grp in item.group">
          <div class="font-bold text-base mb-2">{{ grp.title }}</div>
          <ul class="grid grid-cols-2 gap-x-2 gap-y-3">
            <li v-for="l in grp.links" class="text-$vp-c-brand-1 text-sm font-medium hover:underline">
              <VPLink class="line-clamp-1 min-w-0 break-words"
                :href="l.url">
                <span class="text-8px align-middle mr-1">&#9679;</span>
                {{ l.title }}
              </VPLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
