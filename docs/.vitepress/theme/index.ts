import 'virtual:uno.css'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ApiReference from './components/ApiReference.vue'
import ImageViewer from './components/ImageViewer.vue'
import Timeline from './components/Timeline.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ApiReference', ApiReference)
    app.component('ImageViewer', ImageViewer)
    app.component('Timeline', Timeline)
  }
} satisfies Theme
