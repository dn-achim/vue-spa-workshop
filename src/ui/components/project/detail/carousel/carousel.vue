<template>
  <v-card flat>
    <v-card-title>
      <h3>Medien des Projekts</h3>
    </v-card-title>
    <div class="pa-2">
      <v-carousel
        hide-delimiters
      >
        <v-carousel-item
          v-for="item in items"
          :key="item.id"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <component
            :is="`project-${item.type}`"
            :src="item.src"
            :title="item.title"
          />
        </v-carousel-item>
      </v-carousel>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ProjectDetailImage from './image/image.vue'
import ProjectDetailVideo from './video/video.vue'

@Component({
  components: {
    'project-image': ProjectDetailImage,
    'project-video': ProjectDetailVideo
  }
})
export default class ProjectDetailCarousel extends Vue {
  get items () {
    const n = 10
    return Array.from(Array(n).fill(null), (val, idx) => {
      return idx < n - 1
        ? {
          id: idx,
          type: 'image',
          title: `Bild #${idx + 1}`,
          src: `https://loremflickr.com/600/400/elbe,ship/all?random=${idx}`
        }
        : {
          id: idx,
          type: 'video',
          src: 'https://www.youtube.com/embed/5ERYOIraSwc'
        }
    })
  }
}
</script>
