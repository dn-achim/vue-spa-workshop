<template>
  <v-card
    class="mx-auto fill-height"
    flat
  >
    <v-img
      class="white--text align-end"
      cover
      height="100%"
      :src="src"
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0 primary"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="accent"
            size="150"
            width="10"
          />
        </v-row>
      </template>
      <v-card-title
        v-if="title"
      >
        {{ title }}
      </v-card-title>
    </v-img>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ProjectDetailCarouselImage extends Vue {
  @Prop() src!: string
  @Prop({ default: '' }) title!: string
}
</script>
