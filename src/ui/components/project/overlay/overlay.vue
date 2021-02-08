<template>
  <div>
    <v-dialog
      v-model="dialog"
      :fullscreen="$vuetify.breakpoint.mobile"
      width="500"
    >
      <v-card
        v-if="dialog && project"
      >
        <v-card-title
          class="text--primary"
        >
          {{ project.titel }}
          <v-spacer />
          <v-btn
            @click="dialog = false"
            small
            icon
            depressed
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider />
        <v-list
          class="text--primary grey lighten-5 pt-3"
        >
          <project-list-element
            icon="mdi-content-paste"
            tooltip="Beschreibung"
            :content="project.beschreibung"
          />

          <project-list-element
            icon="mdi-account-box-outline"
            tooltip="Ansprechpartner"
            :content="contactPerson"
          />

          <project-list-element
            icon="mdi-hand-pointing-up"
            tooltip="Ziele"
            :content="project.ziele"
          />

          <project-list-element
            icon="mdi-calendar-start"
            tooltip="Beginn"
            :content="start"
          />

          <project-status-element
            :project="project"
          />
        </v-list>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { ProjectInterface } from '@/entities'
import { ProjectListElement } from './list-element'
import { ProjectStatusElement } from './status-element'
import { Vue, Component } from 'vue-property-decorator'
import { Getter, Mutation } from 'vuex-class'
import { GetterTypes } from '@/ui/store/getters'
import { MutationTypes } from '@/ui/store/mutations'

@Component({
  components: {
    ProjectListElement,
    ProjectStatusElement
  }
})
export default class ProjectOverlay extends Vue {
  @Getter(GetterTypes.SHOW) getShow!: boolean
  @Getter(GetterTypes.PROJECT) project!: ProjectInterface
  @Mutation(MutationTypes.SHOW) setShow!: (payload: boolean) => void

  get dialog (): boolean {
    return this.getShow
  }

  set dialog (value: boolean) {
    this.setShow(value)
  }

  get contactPerson (): string {
    return this.project.ansprechpartner.join(', ')
  }

  get start (): string {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }

    return this.project.beginn
      ? (new Intl.DateTimeFormat('de', options)).format(new Date(this.project.beginn))
      : '-/-'
  }
}
</script>
