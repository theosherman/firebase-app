<template lang="pug">
v-content
  v-container(fluid fill-height)
    v-layout(align-center justify-center)
      v-flex(xs12 sm8 md4)
        v-card.elevation-12
          v-toolbar(dark color='primary')
            v-toolbar-title Login
          v-card-text
            v-alert(:value='!!errorMessage' outline color='error' icon='warning' style='margin-bottom: 20px;') {{ errorMessage }}
            v-form
              v-text-field(v-model='email', prepend-icon='person', label='Email', type='text')
              v-text-field(v-model='password', prepend-icon='lock', label='Password', type='password')
          v-card-actions
            v-spacer
            v-btn(@click='login()' color='primary') Login
</template>

<script>
//import { get } from 'vuex-pathify'
import firebase from '@firebase/app'

export default {
  data: () => ({
    email: '',
    password: '',
    errorMessage: null
  }),
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.email = this.password = ''
      }).catch(error => { this.errorMessage = error.message })
    }
  }
}
</script>
