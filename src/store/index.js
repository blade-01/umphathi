import { createStore } from 'vuex'
import employees from './modules/employees'
import user from './modules/user'

export default createStore({
  modules: {
    employees,
    user
  }
})