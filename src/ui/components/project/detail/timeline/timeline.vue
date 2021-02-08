<template>
  <v-card flat>
    <v-card-title>
      <h3>Projekthistorie</h3>
    </v-card-title>
    <v-timeline
      dense
    >
      <v-timeline-item
        v-for="(item, idx) in items"
        :key="idx"
        :color="item.color"
        large
      >
        <template v-slot:icon>
          <v-avatar>
            <img
              :src="avatar(item.contact)"
              :alt="item.contact" />
          </v-avatar>
        </template>

        <v-card
          class="mr-5"
        >
          <v-card-title
            :class="`headline ${item.color}--text`"
          >
            {{ item.title }}
          </v-card-title>
          <v-card-text>
            <small>{{ timestamp(item.timestamp) }}h</small>
            <p>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod
              convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an
              salutandi sententiae.
            </p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ProjectDetailTimeline extends Vue {
  get items (): Record<string, string>[] {
    return [
      {
        color: 'accent',
        contact: 'p1@demo.dev',
        title: 'Kickoff',
        timestamp: '2020-02-10 10:00',
        content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.'
      },
      {
        color: 'state-preparation',
        contact: 'p2@demo.dev',
        title: 'Vorbereitungsphase - Start',
        timestamp: '2020-03-17 13:00',
        content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.'
      },
      {
        color: 'state-preparation',
        contact: 'p1@demo.dev',
        title: 'Vorbereitungsphase - Meilenstein #2',
        timestamp: '2020-03-20 16:00',
        content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.'
      },
      {
        color: 'state-active',
        contact: 'p3@demo.dev',
        title: 'Aktiv - Meilenstein #1',
        timestamp: '2020-03-20 16:00',
        content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.'
      },
      {
        color: 'state-active',
        title: 'Aktiv - Meilenstein #2',
        contact: 'p2@demo.dev',
        timestamp: '2020-03-26 14:30',
        content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.'
      },
      {
        color: 'state-done',
        contact: 'p3@demo.dev',
        title: 'Projektabschluss',
        timestamp: '2020-11-01 11:11',
        content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.'
      }
    ]
  }

  timestamp (value: string): string {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    }
    return (new Intl.DateTimeFormat('de', options)).format(new Date(value))
  }

  avatar (id: string): string {
    return `http://i.pravatar.cc/64?u=${id}`
  }
}
</script>
