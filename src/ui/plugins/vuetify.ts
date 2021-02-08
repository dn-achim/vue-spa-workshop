import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    dark: false,
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#004789',
        secondary: '#424242',
        accent: '#00a3da',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        'state-preparation': '#FF3D00',
        'state-active': '#F57C00',
        'state-done': '#00E676'
      },
      dark: {
        primary: '#004789',
        secondary: '#424242',
        accent: '#00a3da',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        'state-preparation': '#FF3D00',
        'state-active': '#F57C00',
        'state-done': '#00E676'
      }
    }
  }
})
