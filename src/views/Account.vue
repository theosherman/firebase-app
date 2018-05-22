<template lang="pug">

mixin panel(title)
  v-expansion-panel-content
    div(slot='header')
      strong= title
    v-card: v-card-text
      block

v-content
  v-container(fill-height)
    v-layout(justify-center)
      v-flex(md8 lg5)
        v-card
          v-card-title: h3.headline Manage Account
          v-card-text
        
            v-expansion-panel(popout)

              +panel('Update Profile')
                v-form(ref='form')
                  v-text-field(v-model='displayName' label='Display Name' required)
                  v-text-field(v-model='photoUrl' label='Photo URL' required)
                  v-btn(@click='updateProfile()' color='primary') Update

              +panel('Change Password')
                | Blah blah blah

              +panel('Change Email')
                | Blah blah blah

              +panel('Link Accounts')
                | Blah blah blah

</template>

<script>
import firebase from '@firebase/app'
import { sync } from 'vuex-pathify'

export default {
  data: () => ({
    displayName: '',
    photoUrl: ''
  }),
  methods: {
    updateProfile() {
      this.user.updateProfile({ displayName: this.displayName, photoURL: this.photoUrl })
        .then(() => {
          console.log('currentUser', firebase.auth().currentUser)
          //this.user.displayName = this.displayName
          //this.user.photoURL = this.photoUrl
        }).catch(error => console.error)
    }
  },
  computed: {
    user: sync('user')
  },
  created() {
    if (!this.user) this.$router.replace('/login')
  }
}
</script>
