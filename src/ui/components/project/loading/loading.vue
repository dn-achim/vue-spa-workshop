<template>
  <v-row fill-height>
    <v-col cols="12" class="text-center ma-10">
      <v-progress-circular
        :size="160"
        :width="10"
        color="primary"
        indeterminate
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ProjectLoading extends Vue {
}
</script>
