<template>
  <v-row>
    <v-col
      cols="12"
      sm="10"
      md="8"
      class="mx-auto"
    >
      <v-card>
        <v-card-title>
          <h2>Fehler: {{ errorCode }}</h2>
        </v-card-title>
        <v-img
          :src="require('../../assets/error.jpg')"
          class="white--text"
        >
          <v-card-text>
            <h3>{{ errorMessage }}</h3>
          </v-card-text>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component<ErrorView>({
  metaInfo () {
    return {
      title: `Fehler - ${this.errorCode}`
    }
  }
})
export default class ErrorView extends Vue {
  @Prop({ default: 404 }) errorCode!: number
  @Prop({ default: '' }) errorMessage!: string
}
</script>
