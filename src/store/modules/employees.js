const state = {
  employees: [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
};

const mutations = {
  searchFilter(state, param) {
    return state.employees.filter((employee) => {
      return employee.role.toLowerCase().includes(param.toLowerCase());
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
