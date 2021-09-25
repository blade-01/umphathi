import firebaseApp from "@/fb/init-firebase";
import { getFirestore, collection, getDocs, query } from "firebase/firestore";
import { getAuth } from "@firebase/auth";
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const state = {
  employees: [
    {
      id: "FDGMM8",
      firstName: "Blade",
      lastName: "Barry",
      role: "Designer",
      joinedAt: "2019-02-01",
      email: "barblade@gmail.com",
      emergencyNumber: "08108667886",
      mobileNumber: "08109434224",
      fax: "E5J1F",
      city: "Agege",
      state: "Lagos",
      gender: "Male",
      address: "New Jersy, Ologo Milk",
    },
    {
      id: "JGEED7",
      firstName: "Taofiq",
      lastName: "Animashaun",
      role: "Frontend Developer",
      joinedAt: "2020-09-30",
      email: "animashauntaofiq@gmail.com",
      emergencyNumber: "08108667886",
      mobileNumber: "08106887883",
      fax: "AAA90",
      city: "Agege",
      state: "Lagos",
      gender: "Male",
      dob: "1998-04-20",
      address: "Bankole Street, Agege, Lagos",
    },
    {
      id: "KEF301",
      firstName: "Jane",
      lastName: "Doe",
      role: "Backend Developer",
      joinedAt: "2001-10-01",
      email: "janedoe@gmail.com",
      emergencyNumber: "08108667886",
      mobileNumber: "08027917838",
      fax: "E5J1F",
      city: "Agege",
      state: "Lagos",
      gender: "Female",
      address: "Jand Way, Ijaniki",
    },
    {
      id: "MK1JL3",
      firstName: "Mary",
      lastName: "Jane",
      role: "Dev Ops",
      joinedAt: "2005-10-01",
      email: "maryj@skype.com",
      emergencyNumber: "08108667886",
      mobileNumber: "08035157838",
      fax: "E5J1F",
      city: "Agege",
      state: "Lagos",
      gender: "Female",
      address: "Jand Way, Ijaniki",
    },
    {
      id: "OMO419",
      firstName: "Kane",
      lastName: "Radley",
      role: "Fullstack Developer",
      joinedAt: "2021-10-05",
      email: "kaner@gmail.com",
      emergencyNumber: "+15543224562",
      mobileNumber: "08027917838",
      fax: "E5J1F",
      city: "Reaxle",
      state: "Edinburh",
      gender: "Male",
      address: "Jand Way, Ijaniki",
    },
  ],
  test: [],
};

const getters = {
  allEmployees: (state) => state.employees,
  // searchFilter(state, param) {
  //   return state.employees.filter(employee => {
  //     return employee.role.toLowerCase().includes(param.toLowerCase());
  //   })
  // }
};
const actions = {
  // searchFilter({commit}, param) {
  //   commit('searchFilter', param)
  // }
  async employeesList({ commit }) {
    // ### One
    const q = query(collection(db, "employees"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id);
    });
    // Two
    // getDocs(query(collection(db, 'employees'))).forEach((doc) => {
    //   console.log(doc.id)
    // })
    commit("employeesList");
  },
  createEmployee({ commit }) {
    getDocs(query(collection(auth, "employees"))).forEach((doc) => {
      console.log(doc.id);
    });
    commit("createEmloyee");
  },
};

const mutations = {
  // searchFilter(state, param) {
  //   return state.employees.filter((employee) => {
  //     return employee.role.toLowerCase().includes(param.toLowerCase());
  //   });
  // },
  employeesList(state, payload) {
    state.test.unshift(payload);
  },
  createEmployee(state, payload) {
    state.test = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
