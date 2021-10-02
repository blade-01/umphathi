import router from "@/router";
import firebaseApp from "@/fb/init-firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const state = {
  user: [],
  error: "",
};

const getters = {
  errorMssg: (state) => state.error,
};

const actions = {
  signIn({ commit }, { email, password }) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user.email;
        console.log(user, 'account has signed in');
        router.push("/employee_list");
        commit("signIn");
      })
      .catch((error) => {
        let errorMessage = error.code;
        if (errorMessage == "auth/user-not-found") {
          errorMessage = "Account doesn't exist";
        } else if (errorMessage == "auth/wrong-password") {
          errorMessage = "Provide a valid password";
        } else {
          errorMessage = "";
        } 
        commit("showError", errorMessage);
      });
  },
  signUp({ commit }, { email, password}) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const data = {
          email: email
        }
        return setDoc(doc(db, "users", userCredential.user.uid), data)
      })
      .then(() => {
        router.push("/employee_list");
        commit("signUp");
      })
      .catch((error) => {
        let errorMessage = error.code;
        if (errorMessage == "auth/email-already-in-use") {
          errorMessage = "Account already exists";
        } else {
          errorMessage = "";
        }
        commit("showError", errorMessage);
      });
  },
  signOut({commit}) {
    signOut(auth).then(() => {
      router.push("/login")
      console.log("User Signed Out")
    }).catch((error) => {
      console.log(error)
    })
    commit("signOut")
  }
};

const mutations = {
  signIn(state) {
    state.user
  },
  signUp(state, payload) {
    state.error = payload;
  },
  signOut(state) {
    state.user
  },
  showError(state, payload) {
    state.error = payload;
    setTimeout(() => {
      state.error = "";
    }, 2000);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
