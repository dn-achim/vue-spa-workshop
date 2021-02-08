<template>
  <div class="tooltip-container">
    <v-tooltip
      left
      :color="tooltipColor"
    >
      <template v-slot:activator="{ on, attrs }">
        <div
          v-bind="attrs"
          v-on="on"
          class="d-inline-block"
        >
          <v-icon :class="textColor">{{ icon }}</v-icon>
          <span
            v-if="!compressed"
            class="ml-2 caption"
          >
            {{ project.status }}
          </span>
        </div>
      </template>
      <span>{{ project.status }}</span>
    </v-tooltip>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { ProjectInterface } from '@/entities'

@Component
export default class ProjectStatus extends Vue {
  @Prop({
    type: Object,
    required: true
  }) readonly project!: ProjectInterface

  @Prop({
    type: Boolean,
    default: () => false
  }) compressed!: boolean

  static readonly ACTIVE = 'aktiv'
  static readonly PREPARATION = 'in Vorbereitung'
  static readonly DONE = 'beendet'

  get icon (): string {
    const icons: Record<string, string> = {
      [ProjectStatus.ACTIVE]: 'mdi-alpha-a-box',
      [ProjectStatus.PREPARATION]: 'mdi-alpha-v-box',
      [ProjectStatus.DONE]: 'mdi-alpha-b-box'
    }
    return icons[this.project.status] || 'mdi-help-box'
  }

  get textColor (): string {
    const colors: Record<string, string> = {
      [ProjectStatus.ACTIVE]: 'state-active--text',
      [ProjectStatus.PREPARATION]: 'state-preparation--text',
      [ProjectStatus.DONE]: 'state-done--text'
    }
    return colors[this.project.status] || 'white--text'
  }

  get tooltipColor (): string {
    const colors: Record<string, string> = {
      [ProjectStatus.ACTIVE]: 'state-active',
      [ProjectStatus.PREPARATION]: 'state-preparation',
      [ProjectStatus.DONE]: 'state-done'
    }
    return colors[this.project.status] || 'red'
  }
}
</script>

<style lang="sass" scoped>
.v-icon
  cursor: help
</style>
