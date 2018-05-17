<template lang="pug">
v-toolbar(dark color='secondary')
  v-toolbar-side-icon
  v-toolbar-title Firebase App
  
  v-spacer
  
  v-toolbar-items.hidden-sm-and-down
    v-btn(flat to='/') Home
    v-btn(flat to='/secure') Secure
  
  v-spacer

  v-toolbar-items
    v-btn(flat to='/login' v-if='!user') Login
</template>

<script>
import { get } from 'vuex-pathify'

export default {
  computed: {
    user: get('user')
  }
}
</script>
