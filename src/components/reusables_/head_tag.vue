<template>
  <div class="head">
    <div class="flex-between">
      <div class="logo flex-between" @click="goHome">
        <img src="@/assets/img/blob.svg" alt="logo" />
        <p>Hi there 👋</p>
      </div>
      <div class="flex-between">
        <router-link
          to="/notification"
          class="mdi mdi-bell"
        ></router-link>
        <router-link to="/profile" class="user">
          <img src="@/assets/img/user.jpg" alt="user" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.head {
  padding: 0.62rem 1rem;
  background: var(--white);
  margin-bottom: 1.5rem;
  border-bottom: solid 1px #dddddd;
  position: fixed;
  width: 100%;
  z-index: 1;
}
.logo img {
  width: 35px;
}
.logo p {
  font-size: 13px;
  margin-left: 0.5rem;
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
  .head {
    padding: 0.5rem 3rem;
  }
}
</style>
