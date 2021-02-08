<template>
  <v-app>
    <navigation-main />
    <v-main>
      <v-container>
        <v-fade-transition
          mode="out-in"
        >
          <router-view />
        </v-fade-transition>
      </v-container>
    </v-main>
    <navigation-footer />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { NavigationMain, NavigationFooter } from '@/ui/components'

@Component({
  components: {
    NavigationMain,
    NavigationFooter
  },
  metaInfo: {
    title: 'Willkommen',
    titleTemplate: '%s | digitalnoise'
  }
})
export default class App extends Vue {
}
</script>

<style lang="sass">
@import "styles/main"
</style>
