import router from "@/router";
import firebaseApp from "@/fb/init-firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const state = {
  user: [],
  error: "",
};

const getters = {
  errorMssg: (state) => state.error,
};

const actions = {
  signIn({ commit }, { email, password }) {
    const auth = getAuth(firebaseApp);
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
        } else {
          errorMessage = "";
        }
        commit("showError", errorMessage);
      });
  },
  signUp({ commit }, { email, password }) {
    const auth = getAuth(firebaseApp);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user.email;
        console.log(user, 'account has been created');
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
};

const mutations = {
  signIn(state, payload) {
    state.user = payload;
  },
  signUp(state, payload) {
    state.error = payload;
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
