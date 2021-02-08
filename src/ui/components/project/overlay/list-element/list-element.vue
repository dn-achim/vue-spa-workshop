<template>
  <v-list-item class="project-list-element">
    <v-list-item-avatar>
      <v-tooltip
        attach=".project-list-element"
        right
        color="primary"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-icon
            v-bind="attrs"
            v-on="on"
          >
            {{ icon }}
          </v-icon>
        </template>
        <span class="tooltip-content">{{ tooltip }}</span>
      </v-tooltip>
    </v-list-item-avatar>
    <v-list-item-content
      class="caption"
      v-html="content"
    />
  </v-list-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ProjectListElement extends Vue {
  @Prop({ type: String, required: true }) readonly content!: string
  @Prop({ type: String, required: true }) readonly icon!: string
  @Prop({ type: String, required: true }) readonly tooltip!: string
}
</script>
