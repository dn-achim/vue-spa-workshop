<template>
  <v-card
    class="mx-auto fill-height"
    flat
  >
    <iframe
      :src="decorated"
      width="100%"
      height="100%"
      allow="autoplay; encrypted-media"
      allowfullscreen
    >
    </iframe>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ProjectDetailCarouselVideo extends Vue {
  @Prop() src!: string
  @Prop({ default: '' }) title!: string

  get decorated () {
    return `${this.src}?controls=0&showinfo=0&rel=0`
  }
}
</script>
