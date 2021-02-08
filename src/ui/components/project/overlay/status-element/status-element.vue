<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-tooltip
        right
        color="primary"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-icon
            v-on="on"
            v-bind="attrs"
          >
            mdi-list-status
          </v-icon>
        </template>
        <span>Status</span>
      </v-tooltip>
    </v-list-item-avatar>
    <v-list-item-content>
      <project-status
        :project="project"
      />
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { ProjectInterface } from '@/entities'
import { Vue, Component, Prop } from 'vue-property-decorator'
import ProjectStatus from '../../status/status.vue'

@Component({
  components: {
    ProjectStatus
  }
})
export default class ProjectStatusElement extends Vue {
  @Prop({ type: Object, required: true }) readonly project!: ProjectInterface
}
</script>
