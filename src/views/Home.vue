<template>
  <div class="home">
    <div class="container">
      <Header />
      <div class="home-content">
        <div class="text">
          <h2>Umphathi - The online manager for managing your employees</h2>
          <p>
            Umphathi helps to organize your employees data and assess them with
            ease without having to visit a logbook.
          </p>
          <div class="links">
            <router-link to="/signup"
              ><button class="btn signup_btn">
                Get Started For Free
              </button></router-link
            >
          </div>
        </div>
        <div class="illus">
          <img src="@/assets/img/illustration-mockups.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/reusables_/Header.vue";
export default {
  components: {
    Header,
  },
  setup() {},
};
</script>
<style scoped>
.home {
  height: 100vh;
  width: 100%;
  margin-top: 1.5rem;
}
.home-content {
  margin: 3rem 0;
}
.links .btn {
  display: block;
  margin: 0.5rem auto 0;
  border-radius: 50px;
  border: solid 1px var(--btn);
  background: var(--btn);
  color: var(--white);
  text-transform: capitalize;
  font-size: 15px;
  padding: 0.8rem 2rem;
}
.home-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;
  text-align: center;
}
.home-content .text p {
  margin: 1.5rem 0;
  line-height: 1.5;
}
.home-content .text h2 {
  font-size: 23px;
}
.illus {
  margin-bottom: 1rem;
}
@media screen and (min-width: 500px) {
  .home-content .text h2 {
    font-size: 35px;
  }
  .links {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (min-width: 700px) {
  .home-content {
    flex-direction: row;
    text-align: left;
    margin: 5rem 0 0;
  }
  .home-content .text {
    flex-basis: 40%;
  }
  .home-content .text p {
    font-size: 12px;
  }
  .home-content .text h2 {
    font-size: 20px;
  }
  .illus {
    flex-basis: 60%;
    padding-left: 2rem;
    margin: 0;
  }
  .links {
    display: flex;
    justify-content: start;
  }
  .links .btn {
    margin: 0;
  }
}
@media screen and (min-width: 1000px) {
  .home-content {
    margin: 1rem 0 0;
  }
  .home-content .text {
    flex-basis: 40%;
  }
  .home-content .text p {
    font-size: 16px;
  }
  .home-content .text h2 {
    font-size: 25px;
  }
}
@media screen and (min-width: 1200px) {
  .home-content {
    margin-top: 2rem;
  }
  .home-content .text h2 {
    font-size: 30px;
  }
  .home-content .text p {
    font-size: 17px;
  }
}
</style>
