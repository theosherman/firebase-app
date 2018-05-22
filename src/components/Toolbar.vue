<template lang="pug">
v-toolbar(dark color='secondary')
  v-toolbar-side-icon.hidden-md-and-up
  v-toolbar-title Firebase App
  
  v-spacer
  
  v-toolbar-items.hidden-sm-and-down
    v-btn(flat to='/') Home
    v-btn(flat to='/secure' v-if='!!user') Secure
  
  v-spacer

  v-toolbar-items

    v-btn(flat to='/login' v-if='!user') Login

    v-menu(v-if='!!user' :nudge-width='200' offset-x)
      v-btn(flat slot='activator')
        v-avatar
          img(v-if='user.photoURL' :src='user.photoURL')
          v-icon(v-else x-large) account_circle
      v-card
        v-card-media(v-if='user.photoURL' :src='user.photoURL' height='200')
        v-card-title.pb-0
          h3.headline.mb-0 {{ user.displayName || user.email || user.phoneNumber || 'Unknown' }}
        v-card-text.pa-0
          v-list
            v-list-tile(to='/account')
              v-list-tile-title
                v-icon.pr-3 fa-cog
                | Settings
            v-divider
            v-list-tile(@click='logout()' color='warning')
              v-list-tile-title
                v-icon(color='warning').pr-3 fa-sign-out-alt
                | Logout

</template>

<script>
import firebase from 'firebase/app'
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
