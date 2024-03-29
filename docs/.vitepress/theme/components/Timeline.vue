<script lang="ts" setup>
import { useData } from 'vitepress';
import TimelineCard from './TimelineCard.vue'
import { computed } from 'vue'

const { frontmatter } = useData()

const sample = {
  number: '01',
  title: 'Understand',
  description: 'With APIG, you can integrate your internal systems and selectively expose and monetize your service capabilities with minimal cost and risk.',
  group: [
    {
      title: 'Learn more',
      links: [
        {
          title: 'API Gateway',
          url: '/en/sigma-media-server/02-introduction/sigma-media-server'
        },
        {
          title: 'API Gateway',
          url: '/en/sigma-media-server/02-introduction/sigma-media-server'
        }
      ]
    },
    {
      title: 'Learn more',
      links: [
        {
          title: 'API Gateway',
          url: '/en/sigma-media-server/02-introduction/sigma-media-server'
        },
        {
          title: 'API Gateway',
          url: '/en/sigma-media-server/02-introduction/sigma-media-server'
        }
      ]
    }
  ]
}

const lists = [
  sample,
  sample,
  sample,
  sample,
  sample
]

const groupListsBy2 = (list: any[]) => {
  const result = []
  for (let i = 0; i < list.length; i += 2) {
    result.push(list.slice(i, i + 2))
  }
  return result
}

const listsGrouped = computed(() => groupListsBy2(frontmatter.value.features))
</script>

<template>
  <div class="w-full max-w-3xl mx-auto py-5">
    <div class="relative py-12">
      <div class="i-ri:book-open-fill absolute left-1/2 top-0 -translate-x-1/2" />
      <div
        class="absolute inset-0 ml-5 -translate-x-px md:mx-auto md:translate-x-0 h-full w-0.25 bg-gradient-to-b from-transparent via-$vp-c-text-3 to-transparent">
      </div>
      <div class="i-ri:book-open-fill absolute left-1/2 bottom-0 -translate-x-1/2" />
      <li v-for="item in listsGrouped" class="relative not-last:mb-10 grid grid-cols-[1fr_auto_auto_1fr] item-start">
        <TimelineCard v-if="item[0]" :item="item[0]" />
        <div class="w-5 border-$vp-c-text-3 border-dashed mt-10 border-0 border-t-1 shrink-0 ">
        </div>
        <div :class="[item[1] ? 'opacity-100' : 'opacity-0']"
          class="w-5 border-$vp-c-text-3 border-dashed mt-10 border-0 border-t-1 shrink-0 ">
        </div>
        <TimelineCard v-if="item[1]" :item="item[1]" />
      </li>
    </div>

  </div>
</template>
