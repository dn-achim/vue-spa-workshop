<template>
  <v-footer
    color="primary"
  >
    <v-col
      class="text-center white--text"
      cols="12"
    >
      &copy; {{ date }} — <strong>digitalnoise GmbH</strong>
    </v-col>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class NavigationFooter extends Vue {
  get date (): number {
    return new Date().getFullYear()
  }
}
</script>
