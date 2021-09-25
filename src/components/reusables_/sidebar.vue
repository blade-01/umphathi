<template>
  <div class="sidebar">
    <div class="container">
      <div class="logo hide-on-sm" @click="goHome">
        <img src="@/assets/img/blob.svg" alt="logo" />
      </div>
      <div class="icons">
        <router-link to="/employee_list" class="mdi mdi-home"></router-link>
        <router-link to="/profile" class="mdi mdi-account"></router-link>
        <span
          @click="showMore"
          class="mdi mdi-view-dashboard hide-on-lg more"
        ></span>
        <router-link to="/message" class="mdi mdi-forum"></router-link>
        <router-link
          to="/add"
          class="mdi mdi-plus-circle-outline hide-on-lg"
        ></router-link>
        <router-link
          to="/edit_profile"
          class="mdi mdi-cog hide-on-sm"
        ></router-link>
      </div>
      <div class="logout hide-on-sm">
        <router-link to="/" class="mdi mdi-logout"></router-link>
      </div>
    </div>
  </div>
  <aside
    class="aside hide-on-lg"
    id="aside-tab"
    :class="{ open: open }"
    @click="closeTab"
  >
    <div class="container">
      <div class="aside-icons">
        <router-link to="/edit_profile" class="mdi mdi-cog tag" @click="close">
          <p>Settings</p>
        </router-link>
        <router-link to="/" class="mdi mdi-logout tag" @click="close">
          <p>Logout</p>
        </router-link>
      </div>
    </div>
  </aside>
</template>
<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  setup() {
    const router = useRouter();
    const goHome = () => {
      router.push("/employee_list");
    };
    let open = ref(false);
    const showMore = () => {
      open.value = !open.value;
    };
    const close = () => {
      open.value = !open.value;
    };
    const closeTab = () => {
      window.addEventListener("click", (e) => {
        if (e.target.id == "aside-tab") {
          open.value = !open.value;
        }
      });
    };
    return {
      goHome,
      router,
      showMore,
      open,
      close,
      closeTab,
    };
  },
};
</script>
<style scoped>
.sidebar {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 15px 15px 0 0;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  z-index: 100;
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: (10.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icons .mdi {
  font-size: 20px;
}
.head {
  margin-top: 1rem;
}
.main-content {
  margin-top: 1rem;
}
.more {
  transition: color ease 0.4s;
  cursor: pointer;
}
.more:hover,
.more:focus,
.more:active,
.more:visited {
  color: var(--btn);
}
.aside {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  z-index: 100;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: (4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: none;
}
.aside-icons {
  position: fixed;
  bottom: -100%;
  left: 0;
  width: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 15px 15px 0 0;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  background: var(--bg);
  animation: bottom 0.5s ease forwards;
  z-index: 1000;
}
@keyframes bottom {
  to {
    bottom: 0;
  }
}
.open {
  bottom: 0;
  display: block;
}
.aside-icons .tag {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}
.aside-icons .tag p {
  margin-left: 0.7rem;
  color: var(--text);
}
@media screen and (min-width: 700px) {
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 60px;
    padding: 1.5rem 1rem;
    border-radius: 0;
    box-shadow: none;
    border-right: solid 1px #dddddd;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--white);
  }
  .icons {
    flex-direction: column;
  }
  .icons a {
    margin: 1rem 0;
  }
  .logo img {
    width: 35px;
  }
  .logo {
    position: fixed;
    top: 15px;
    left: 50%;
    transform: translate(-50%, 0);
    border-bottom: solid 1px #dddddd;
    width: 100%;
    text-align: center;
  }
  .logout {
    position: fixed;
    bottom: 15px;
    left: 50%;
    transform: translate(-50%, 0);
    border-top: solid 1px #dddddd;
    width: 100%;
    text-align: center;
    padding-top: 1rem;
    font-size: 20px;
  }
}
</style>
