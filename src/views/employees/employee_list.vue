<template>
  <div class="employee_list">
    <div>
      <searchbar />
    </div>
    <div class="flex-between dash">
      <h3>Dashboard</h3>
      <router-link to="/add" class="btn hide-on-sm"
        ><span class="mdi mdi-plus"></span> Add Employee</router-link
      >
    </div>
    <div v-if="employees.length">
      <div
        class="employee_dets flex-item"
        v-for="employee in employees"
        :key="employee.id"
        @click="viewEmployee(employee.id)"
      >
        <div class="flex_one">
          <p class="title_tag">Basic Info</p>
          <p>{{ employee.firstName }} {{ employee.lastName }}</p>
          <p>{{ employee.email }}</p>
        </div>
        <div class="flex-two">
          <div class="flex_two">
            <p class="title_tag">Designation</p>
            <p>{{ employee.role }}</p>
          </div>
          <div class="flex_two">
            <p class="title_tag">Phone Number</p>
            <p>{{ employee.mobileNumber }}</p>
          </div>
          <div class="flex_two">
            <p class="title_tag">Joining Date</p>
            <p>{{ formatDate(employee.joinedAt) }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="employee_list empty">
      <img src="@/assets/img/empty.svg" alt="add_smthng" />
      <button class="hide-on-lg btn" @click="addEmployee">Add Employee</button>
    </div>
  </div>
</template>
<script>
import searchbar from "@/components/reusables_/search_bar.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import moment from "moment";
export default {
  components: {
    searchbar,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const employees = computed(() => store.getters.allEmployees);
    const viewEmployee = (id) => {
      router.push({ name: "employee", params: { id } });
    };
    const addEmployee = () => {
      router.push('/add')
    }
    const formatDate = (date) => {
      return moment(date).format("DD MMM YYYY")
    };
    return {
      employees,
      viewEmployee,
      formatDate,
      addEmployee
    };
  },
};
</script>
<style scoped>
.employee_dets {
  border: 1px solid #f4f4f4;
  background: var(--white);
  margin: 0.5rem 0.1rem;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all ease 0.4s;
}
.employee_dets:hover {
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
}
.dash {
  margin: 1rem 0;
  align-items: flex-end;
}
.dash a {
  text-transform: capitalize;
}
.dash .btn {
  padding: 0.5rem;
  background: var(--btn);
  color: var(--white);
  border: solid 1px var(--btn);
  box-shadow: none;
}
.dash .btn:hover {
  background: var(--white);
  color: var(--btn);
  border: solid 1px var(--btn);
}
.title_tag {
  margin-bottom: 0.2rem;
  color: gray;
  font-size: small;
}
.flex-two {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  justify-content: space-between;
}
.flex_two {
  margin: 0.5rem 1rem 0.5rem 0;
}
.empty {
  text-align: center;
}
.empty .btn {
  margin: 1rem auto;
}
.empty img {
  width: 300px;
  margin-top: 1rem;
}
@media screen and (min-width: 700px) {
  .flex_two {
    flex-basis: 35.33%;
    margin: 0;
  }
  .employee_list {
    margin: 1rem auto 1rem;
  }
}
@media screen and (min-width: 1000px) {
  .employee_dets {
    flex-direction: row;
    align-items: flex-end;
  }
  .flex_one {
    flex-basis: 30%;
  }
  .flex-two {
    flex-wrap: nowrap;
    text-align: left;
    flex-basis: 70%;
    margin: 0;
  }
  .flex_two {
    justify-content: space-between;
    flex-basis: 33.33%;
  }
}
</style>
