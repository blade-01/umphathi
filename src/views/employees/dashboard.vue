<template>
  <div class="dash">
    <sidebar />
    <div class="mainbar">
      <headtag />
      <div class="container">
        <div class="main-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import sidebar from "@/components/reusables_/sidebar.vue";
import headtag from "@/components/reusables_/head_tag.vue";
import { useRouter } from "vue-router";
import { useStore } from 'vuex';
export default {
  components: {
    sidebar,
    headtag,
  },
  setup() {
    const router = useRouter();
    const goHome = () => {
      router.push("/employee_list");
    };
    const store = useStore()
    store.dispatch("getEmployees")
    return {
      goHome,
      router,
    };
  },
};
</script>
<style scoped>
.mainbar {
  padding-bottom: 70px;
  /* background: var(--mainbar); */
  height: 100%;
}
.main-content {
  margin-top: 6rem;
}
@media screen and (min-width: 700px) {
  .mainbar {
    margin-left: 2rem;
  }
}
@media screen and (min-width: 1200px) {
}
</style>
