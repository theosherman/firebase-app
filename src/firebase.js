import firebase from '@firebase/app'
import '@firebase/auth'
import store from '@/store'

const config = {
  apiKey: "AIzaSyDmH_W-pqxk4K1SOVeUtYHvxOFk_wq5yI4",
  authDomain: "fir-app-74949.firebaseapp.com",
  databaseURL: "https://fir-app-74949.firebaseio.com",
  projectId: "fir-app-74949",
  storageBucket: "fir-app-74949.appspot.com",
  messagingSenderId: "95712634216"
}

firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(user => {
  store.set('user', user)
})