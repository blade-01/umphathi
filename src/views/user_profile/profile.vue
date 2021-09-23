<template>
  <div class="user_profile" v-if="edit">
    <div class="profile">
      <div class="profile-content">
        <img src="@/assets/img/user.jpg" alt="" srcset="">
        <div class="flex-user">
          <h3>Animashaun Taofiq <router-link to="/settings" class="mdi mdi-pencil"></router-link></h3>
          <small>animashauntaofiq@gmail.com</small>
        </div>
      </div>
    </div>
    <div class="profile-dets">
      <p>Hi 👋. I'm a frontend developer with passion for creating user-friendly, interactive and pixel-perfect user interface.  creating user-friendly, interactive and pixel-perfect user interface creating user-friendly, interactive and pixel-perfect user interface creating user-friendly, interactive and pixel-perfect user interface creating user-friendly, interactive and pixel-perfect user interface</p>
    </div>
  </div>
  <div class="add_user" v-else>
    <p>You haven't setup your profile fam, click here 👇 to setup</p>
    <button class="btn" @click="editPage">Setup Profile</button>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const edit = ref(false)
    const router = useRouter()
    const editPage = () => {
      router.push('/edit_profile')
    }
    return {
      edit,
      editPage
    }
  }
}
</script>
<style scoped>
.profile {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  z-index: 1;
  background: url('@/assets/img/bg-03.jpg') no-repeat center center/cover;
  background-color: var(--mainbar);
  height: 150px;
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: (10.5px);
  padding: 1rem 0;
}
.profile img {
  width: 80px;
  border-radius: 50%;
  border: solid 2px var(--btn);
  margin-right: 0.5rem;
  object-fit: cover;
}
.profile-content {
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.profile-dets {
  text-align: center;
  line-height: 1.5;
  margin: 22rem 0.2rem 1rem;
  padding: 1.5rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: (10.5px);
}
.flex-user {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
}
.flex-user h3 {
  padding: 0.2rem 0 0.3rem;
}
.flex-user small {
  font-size: 12px;
}
.flex-user a {
  font-size: 15px;
}
.add_user {
  text-align: center;
}
.add_user .btn {
  /* padding: 1rem; */
  background: var(--btn);
  border: solid 1px var(--btn);
  margin: 2rem 0.2rem;
  color: var(--white);
}
@media screen and (min-width: 700px) {
  .profile {
    top: 55px;
  }
  .profile img {
    width: 100px;
    border-radius: 50%;
  }
  .profile-content {
    bottom: -50px;
    left: 10%;
    transform: translate(0);
    align-items: flex-end;
    flex-direction: row;
  }
  .profile-dets {
    width: 90%;
    margin: 19rem auto 1rem;
  }
  .flex-user {
    align-items: flex-start;
    margin-top: 0;
  }
}
</style>