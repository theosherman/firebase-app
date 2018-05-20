<template lang="pug">
v-content
  v-container(fill-height)
    v-layout(justify-center)
      v-flex(md8 lg5)
        v-card
          v-card-title
            h3.headline Manage Account
          v-card-text
        
            v-expansion-panel(popout)

              v-expansion-panel-content
                div(slot='header') Update Profile
                v-card
                  v-card-text Blah blah blah

              v-expansion-panel-content
                div(slot='header') Change Password
                v-card
                  v-card-text Blah blah blah

              v-expansion-panel-content
                div(slot='header') Change Email
                v-card
                  v-card-text Blah blah blah
        
        


          
</template>

<script>
import firebase from '@firebase/app'
import { get } from 'vuex-pathify'

export default {
  data: () => ({
    menu: false
  }),
  methods: {
  },
  computed: {
    user: get('user')
  },
  created() {
    if (!this.user) {
      this.$router.push('/login')
    }
  }
}
</script>
