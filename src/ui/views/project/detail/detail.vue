<template>
  <v-row>
    <v-col cols="12">

      <project-loading
        v-if="loading"
      />

      <v-card
        v-if="project"
      >
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
import { Component, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { ProjectRestClientMixin } from '@/ui/mixins'
import {
  ProjectLoading,
  ProjectDetailCarousel,
  ProjectDetailIntro,
  ProjectDetailTimeline
} from '@/ui/components'
import { ProjectInterface } from '@/entities'

@Component<ProjectDetailView>({
  components: {
    ProjectDetailCarousel,
    ProjectDetailIntro,
    ProjectDetailTimeline,
    ProjectLoading
  },
  metaInfo () {
    return {
      title: `Projekt: ${this.project?.titel}`
    }
  }
})
export default class ProjectDetailView extends mixins(ProjectRestClientMixin) {
  @Prop({ default: null }) readonly uuid!: string | null

  project: ProjectInterface|null = null
  loading = false

  async mounted () {
    try {
      this.loading = true
      this.project = await this.projectRestClient.getOne(this.uuid)
      if (this.project === undefined) {
        this.handleError(`Das Projekt [${this.uuid || 'n/a'}] konnte leider nicht gefunden werden`)
      }
    } catch (error) {
      this.project = null
      console.err('Dude? 😝')
      this.handleError()
    } finally {
      this.loading = false
    }
  }

  handleError (errorMessage?: string) {
    this.$router.push({
      name: 'error',
      params: {
        errorMessage
      }
    })
  }
}
</script>

<style lang="sass"
       scoped>
.v-tabs--vertical
  .v-tab
    justify-content: start
</style>
