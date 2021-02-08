<template>
  <v-row>
    <v-col cols="12">
      <v-card v-if="project">
        <v-card-title>
          <h1>{{ project.titel }}</h1>
        </v-card-title>
        <v-card-text
          class="body-1"
        >
          <p>
            {{ project.beschreibung }}
          </p>
        </v-card-text>
        <v-tabs
          show-arrows
          :vertical="$vuetify.breakpoint.mdAndUp"
        >
          <v-tab>
            <v-icon left>
              mdi-information-outline
            </v-icon>
            Übersicht
          </v-tab>
          <v-tab>
            <v-icon left>
              mdi-timeline-clock-outline
            </v-icon>
            Historie
          </v-tab>
          <v-tab>
            <v-icon left>
              mdi-folder-multiple-image
            </v-icon>
            Medien
          </v-tab>
          <v-spacer />
          <v-tab
            @click="$router.push({ name: 'project-index' })"
          >
            <v-icon left>
              mdi-backspace-outline
            </v-icon>
            Zurück
          </v-tab>

          <v-tab-item>
            <project-detail-intro
              :project="project"
            />
          </v-tab-item>

          <v-tab-item>
            <project-detail-timeline
              :project="project"
            />
          </v-tab-item>

          <v-tab-item>
            <project-detail-carousel
              :project="project"
            />
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { ProjectInterface } from '@/entities'
import { Component, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { ProjectRepositoryMixin } from '@/ui/mixins'
import { ProjectDetailCarousel, ProjectDetailIntro, ProjectDetailTimeline } from '@/ui/components'

@Component<ProjectDetailView>({
  components: {
    ProjectDetailCarousel,
    ProjectDetailIntro,
    ProjectDetailTimeline
  },
  metaInfo () {
    return {
      title: `Projekt: ${this.project?.titel}`
    }
  }
})
export default class ProjectDetailView extends mixins(ProjectRepositoryMixin) {
  @Prop({ default: null }) readonly uuid!: string | null

  get project (): ProjectInterface | undefined {
    return this.uuid
      ? this.projectRepository.getOne(this.uuid)
      : undefined
  }

  mounted () {
    if (this.project === undefined) {
      this.$router.push({
        name: 'error',
        params: {
          errorMessage: `Das Projekt [${this.uuid || 'n/a'}] konnte leider nicht gefunden werden`
        }
      })
    }
  }
}
</script>

<style lang="sass"
       scoped>
.v-tabs--vertical
  .v-tab
    justify-content: start
</style>
