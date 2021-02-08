<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1>
          Projektliste
        </h1>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  metaInfo: {
    title: 'Projekte'
  }
})
export default class ProjectListView extends Vue {
}
</script>
