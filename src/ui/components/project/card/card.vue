<template>
  <v-card>
    <v-card-title
      class="primary white--text d-inline-block text-truncate"
    >
      {{ project.titel }}
    </v-card-title>

    <v-card-text
      class="text-justify text--primary grey lighten-5 pt-3"
    >
      <p>
        {{ description }}
      </p>
      <ul v-if="contactPersons.length > 0">
        <li
          v-for="(cp, idx) in contactPersons"
          :key="idx"
        >
          {{ cp }}
        </li>
      </ul>
      <i v-else>Keine Ansprechpartner definiert</i>
    </v-card-text>

    <v-divider />

    <v-card-actions class="pl-3">
      <v-spacer />
      <project-status
        :project="project"
        compressed
      />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { ProjectInterface } from '@/entities'
import { ProjectStatus } from '../status'

@Component({
  components: {
    ProjectStatus
  }
})
export default class ProjectCard extends Vue {
  @Prop({ required: true }) readonly project!: ProjectInterface

  get description (): string {
    const length = 100
    return this.project.beschreibung.length > length
      ? `${this.project.beschreibung.substring(0, length)}...`
      : this.project.beschreibung
  }

  get contactPersons (): string[] {
    return this.project.ansprechpartner.length > 3
      ? [
        ...this.project.ansprechpartner.slice(0, 3),
        '...'
      ]
      : this.project.ansprechpartner
  }
}
</script>

<style
  lang="sass"
  scoped
>
.v-card
  &:hover
    .v-card__title
      background-color: var(--v-accent-base) !important

  .v-card__title
    width: 100%

  .v-card__text
    height: 214px
</style>
