<template>
  <v-row>
    <v-col
      v-for="(project, idx) in projects"
      :key="idx"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <project-card
        :project="project"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { ProjectInterface } from '@/entities'
import { ProjectCard } from '../card'

@Component({
  components: {
    ProjectCard
  }
})
export default class ProjectList extends Vue {
  @Prop({
    type: Array,
    default: () => []
  }) readonly projects!: ProjectInterface[]
}
</script>
