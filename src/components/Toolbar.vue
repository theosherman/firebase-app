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
    v-btn(flat to='/account' v-if='!!user')
      v-avatar
        img(v-if='user.photoURL' :src='user.photoURL')
        v-icon(v-else x-large) fa-user-circle

</template>

<script>
import { get } from 'vuex-pathify'

export default {
  computed: {
    user: get('user')
  }
}
</script>
