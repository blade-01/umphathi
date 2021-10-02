<template>
  <div class="search">
    <div class="container flex-between">
      <form class="searchbar">
        <input
          id="search"
          type="search"
          placeholder="Search by role..."
          v-model="search"
        />
        <span class="mdi mdi-magnify search-icon"></span>
      </form>
      <div class="flex-between">
        <router-link to="/notification" class="mdi mdi-bell"></router-link>
        <router-link to="/profile" class="user">
          <img src="@/assets/img/user.jpg" alt="user" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from 'vuex'
export default {
  setup() {
    const search = ref("");
    const store = useStore();
    const employees = computed(() => store.getters.allEmployees);
    // const searchFilter = (param) => store.dispatch('searchFilter', param)
    const searchFilter = computed(() => {
      return employees.value.filter((employee) => {
        return employee.role.toLowerCase().includes(search.value.toLowerCase())
      })
    })
    return {
      search,
      searchFilter,
      employees
    };
  },
};
</script>
<style scoped>
.search {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 0;
  border-bottom: solid 1px #dddddd;
  background: var(--white);
  z-index: 10;
}
.searchbar {
  position: relative;
  flex-basis: 90%;
}
.searchbar input {
  border: solid 1px transparent;
  outline: 0;
  width: 100%;
  padding: 0.7rem 2rem;
  margin-top: 0.5rem;
  transition: border 0.4s ease-in-out;
}
.searchbar input:focus {
  border-bottom: solid 1px var(--btn);
}
.search-icon {
  position: absolute;
  top: 65%;
  left: 0;
  transform: translate(0, -65%);
  color: gray;
}
.mdi-bell {
  color: var(--text);
  margin-right: 0.5rem;
  transform: rotate(20deg);
}
.user img {
  width: 35px;
  border-radius: 50%;
  border: solid 1px var(--btn);
}
@media screen and (min-width: 700px) {
  .search {
    padding: 0 0 0.1rem;
  }
  .searchbar input {
    padding: 0.9rem 2rem;
  }
}
</style>
