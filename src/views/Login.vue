<template lang="pug">
v-content
  v-container(fill-height)
    v-layout(align-center justify-center)
      v-flex(md10 lg8 xl6)
        #firebaseui-auth-container
            
</template>

<script>
import firebase from 'firebase/app'
import firebaseui from 'firebaseui'
import { get } from 'vuex-pathify'
import { ui } from '@/firebase'

export default {
  computed: {
    user: get('user')
  },
  created() {
    if (!!this.user) this.$router.replace('/account')
  },
  mounted() {
    const config = {
      'signInSuccessUrl': '/',
      'signInOptions': [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        //firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ],
      'tosUrl': 'https://www.google.com',
      'credentialHelper': firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
    }
    ui.start('#firebaseui-auth-container', config)
  }
}
</script>
