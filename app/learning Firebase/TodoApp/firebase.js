import firebase from "firebase"
import "@firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyABg7IEzJbh_EgwkWaARKL_cvQKFJ_o1gE",
//   authDomain: "easy-shop-42753.firebaseapp.com",
//   databaseURL: "https://easy-shop-42753.firebaseio.com",
//   projectId: "easy-shop-42753",
//   storageBucket: "easy-shop-42753.appspot.com",
//   messagingSenderId: "893648098228",
//   appId: "1:893648098228:web:c3bcac3c8053b75c8518e1",
// }
class Firebase {
  constructor(callback) {
    this.init(callback)
  }
  init(callback) {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        callback(null, user)
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .catch((error) => {
            callback(error)
          })
      }
    })
  }

  getLists(callback) {
    let ref = firebase
      .firestore()
      .collection("users")
      .doc(this.userId)
      .collection("lists")

    this.unsubscribe = ref.onSnapshot((snapshot) => {
      lists = []

      snapshot.forEach((doc) => {
        console.log("DOCCCC", doc)
        lists.push({ id: doc.id, ...doc.data() })
      })

      callback(lists)
    })
  }

  get userId() {
    return firebase.auth().currentUser.uid
  }
}

export default Firebase
