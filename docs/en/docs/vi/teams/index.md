---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/62163604',
    name: 'Son Hong Do',
    title: 'Frontend Developer',
    links: [
      { icon: 'github', link: 'https://github.com/sondh0127' }
    ]
  },
  {
    avatar: 'https://github.com/vietkute02.png',
    name: 'Viet Anh Luu',
    title: 'Tech Lead / Product Manager',
    links: [
      { icon: 'github', link: 'https://github.com/vietkute02' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title></template>
    <template #lead></template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  /></VPTeamPage>
