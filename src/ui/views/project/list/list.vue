<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1>
          Projektliste
        </h1>
      </v-col>
    </v-row>

    <project-loading
      v-if="loading"
    />
    <project-list
      v-else
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
import { Component, Watch } from 'vue-property-decorator'
import { Debounce } from 'vue-debounce-decorator'
import { mixins } from 'vue-class-component'
import { ProjectRestClientMixin } from '@/ui/mixins'
import { ProjectList, ProjectLoading, ProjectOverlay } from '@/ui/components'
import { ProjectInterface } from '@/entities'

@Component({
  components: {
    ProjectList,
    ProjectLoading,
    ProjectOverlay
  },
  metaInfo: {
    title: 'Projekte'
  }
})
export default class ProjectListView extends mixins(ProjectRestClientMixin) {
  phrase = ''
  loading = false
  filtered: ProjectInterface[] = []

  @Watch('phrase')
  @Debounce(500)
  async onChangePhrase (value: string) {
    this.filtered = await this.filter(value)
  }

  async filter (token: string): ProjectInterface[] {
    try {
      this.loading = true
      return await this.projectRestClient.filter(token)
    } catch (error) {
      console.error('Dude? 🤨')
      return []
    } finally {
      this.loading = false
    }
  }

  async mounted () {
    this.filtered = await this.filter('')
  }
}
</script>
