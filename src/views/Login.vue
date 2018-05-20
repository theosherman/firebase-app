<template lang="pug">
v-content
  v-container(fill-height)
    v-layout(align-center justify-center)
      v-flex(md10 lg8 xl6)
        v-card.elevation-12
          v-card-text
            v-alert(:value='!!errorMessage' color='error' icon='fa-exclamation-circle' transition="scale-transition" style='margin-bottom: 20px;') {{ errorMessage }}

            v-container(fluid)
              v-layout

                v-flex(md6)#line
                  v-card.elevation-0
                    v-card-title
                      h3 Login with other methods
                    v-card-text
                      v-btn(dark block round large color='red' @click='signInWithGoogle()') Google
                      v-btn(dark block round large color='primary') Facebook
                      v-btn(dark block round large color='secondary') SMS Text

                v-flex(md6)
                  v-card.elevation-0
                    v-card-title
                      h3 Login with email and password
                    v-card-text
                      v-form
                        v-text-field(v-model='email', prepend-icon='fa-envelope', label='Email', type='text')
                        v-text-field(v-model='password', prepend-icon='fa-lock', label='Password', type='password')
                    v-card-actions
                      v-btn(@click='register()' color='red' flat) Register                    
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
        .catch(error => { this.errorMessage = error.message })
    },
    register() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => { this.errorMessage = error.message })
    },
    signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    }
  },
  created() {
    if (!!this.$store.get('user')) {
      this.$router.push('/account')
    }

    if (!this.$store.get('alreadyRedirected')) {
      firebase.auth().getRedirectResult().then(result => {
        if (!!result.user) {
          this.$store.set('alreadyRedirected', true)
        }
      }).catch(console.error)
    }
    
  }
}
</script>

<style>
#line {
  border-right: 1px;
  border-right-color: #333;
  border-right-style: solid;
}
</style>
