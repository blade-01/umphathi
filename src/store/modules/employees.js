import router from "@/router";
import firebaseApp from "@/fb/init-firebase";
import { getFirestore, addDoc, query, where, getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const state = {
  employees: [],
  employee: null,
  loading: ''
};

const getters = {
  allEmployees: (state) => state.employees,
  singleEmployee: (state) => state.employee,
  // searchFilter(state, param) {
  //   return state.employees.filter(employee => {
  //     return employee.role.toLowerCase().includes(param.toLowerCase());
  //   })
  // }
};
const actions = {
  getEmployees({ commit }) {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        getDocs(query(collection(db, "employees"), where("user_id", "==", user.uid)))
        .then((docs) => {
          docs.forEach((doc) => {
            commit("getEmployees", doc.data().employee);
          });
        })
      } else {
        const loadingState = "Wait while your employees are being fetched";
        commit("loading", loadingState)
      }
    })
  },
  async singleEmployee({ commit }, id) {
    const docRef = query(collection(db, "employees"), where("employee.id", "==", id))
    const docs = await getDocs(docRef);
    docs.forEach((doc) => {
      commit("singleEmployee", doc.data().employee)
    });
  },
  async addEmployee({ commit }, employee) {
    try {
      const docRef = await addDoc(
        collection(db, "employees"),
        { employee, user_id: auth.currentUser.uid }
      );
      console.log("Document written with ID:", docRef.id);
      router.push("/employee_list");
      commit("addEmployee", docRef);
    } catch (e) {
      console.error("Something went wrong");
    }
  },
  async deleteEmployee({commit}, id) {
    // const docRef = query(collection(db, "employees"), where("employee.id", "==", id))
    // const docs = await getDocs(docRef);
    // docs.forEach((doc) => {
    //   deleteDoc(doc.data());
    await deleteDoc(doc(db, "employees", id))
    commit("deleteEmployee")
    // });
  }
};

const mutations = {
  getEmployees(state, payload) {
    state.employees.unshift(payload);
  },
  singleEmployee(state, payload) {
    state.employee = payload;
  },
  addEmployee(state, payload) {
    state.employees.unshift(payload);
  },
  deleteEmployee(state) {
    state.employee
  },
  loading(state, payload) {
    state.loading = payload
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
