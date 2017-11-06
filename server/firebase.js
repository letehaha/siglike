import Vue from 'vue'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import config from './config'

Vue.use(VueFire)

const app = Firebase.initializeApp(config)
let db = app.database()

let providers = db.ref('providers')

export default providers
