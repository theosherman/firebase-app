<template lang="pug">
v-content
  v-container(fluid fill-height)
    v-layout(align-center justify-center)
      v-flex(sm12 md6)
        v-card.elevation-12
          v-card-text
            v-alert(:value='!!errorMessage' outline color='error' icon='warning' style='margin-bottom: 20px;') {{ errorMessage }}

            v-container(fluid)
              v-layout

                v-flex(md5)
                  v-card.elevation-0
                    v-card-text
                      v-btn(dark color='red') Login with Google

                v-flex(md1)
                  v-layout(align-center justify-center)
                    v-flex(xs12)
                      h2 OR

                v-flex(md6)
                  v-card.elevation-0
                    v-card-text
                      v-form
                        v-text-field(v-model='email', prepend-icon='person', label='Email', type='text')
                        v-text-field(v-model='password', prepend-icon='lock', label='Password', type='password')
                    v-card-actions
                      v-spacer
                      v-btn(@click='login()' color='primary') Login
            
</template>

<script>
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
        .then(() => { this.$router.push('/') })
        .catch(error => { this.errorMessage = error.message })
    }
  }
}
</script>
