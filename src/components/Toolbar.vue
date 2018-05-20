<template lang="pug">
v-toolbar(dark color='secondary')
  v-btn(flat round icon)
    v-icon fa-bars
  v-toolbar-title Firebase App
  
  v-spacer
  
  v-toolbar-items.hidden-sm-and-down
    v-btn(flat to='/') Home
    v-btn(flat to='/secure') Secure
  
  v-spacer

  v-toolbar-items

    v-btn(flat to='/login' v-if='!user') Login

    v-menu(v-if='!!user' :nudge-width='200' offset-x)
      v-btn(flat slot='activator')
        v-avatar
          img(v-if='user.photoURL' :src='user.photoURL')
          v-icon(v-else x-large) fa-user-circle
      v-card
        v-card-media.white--text(v-if='user.photoURL' :src='user.photoURL' height='250px')
          v-container(fill-heigth): v-layout(fill-height): v-flex(xs12): span.headline {{ user.displayName }}
        v-card-title
          h3.headline.mb-0 {{ (user.displayName ?  user.email : user.displayName) || 'Unknown' }}
        v-card-actions
          v-spacer
          v-btn(flat @click='logout()') Logout

</template>

<script>
import firebase from '@firebase/app'
import { get } from 'vuex-pathify'

export default {
  methods: {
    logout() {
      firebase.auth().signOut().catch(console.error)
    }
  },
  computed: {
    user: get('user')
  }
}
</script>
