<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1>
          Projektliste
        </h1>
      </v-col>
    </v-row>

    <project-list
      :projects="filtered"
    />

    <portal to="searchbar">
      <v-text-field
        v-model="phrase"
        hide-details
        single-line
        append-outer-icon="mdi-magnify"
        placeholder="In Projekten suchen"
      />
    </portal>

    <project-overlay />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { ProjectSearchMixin } from '@/ui/mixins'
import { ProjectList, ProjectOverlay } from '@/ui/components'
import { ProjectInterface } from '@/entities'

@Component({
  components: {
    ProjectList,
    ProjectOverlay
  },
  metaInfo: {
    title: 'Projekte'
  }
})
export default class ProjectListView extends mixins(ProjectSearchMixin) {
  phrase = ''

  get filtered (): ProjectInterface[] {
    return this
      .projectSearch
      .filter(this.phrase)
      .map(elem => elem.item)
  }
}
</script>
