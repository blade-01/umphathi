<template>
  <div class="container">
    <div class="sign_in">
      <Header />
      <form class="card" @submit.prevent="signIn(state.email, state.password)">
        <h2>Sign in to your account</h2>
        <div class="error" :class="{ err: errMssg }" v-if="errMssg">
          {{ errMssg }}
        </div>
        <div class="input-field">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="state.email"
            @blur="v$.email.$touch()"
            @focus="v$.email.$reset()"
            :class="{ err: v$.email.$error }"
          />
          <small
            :class="{ 'err-mssg': v$.email.$error }"
            v-if="v$.email.$error"
            class="hide"
            >Please provide a valid email</small
          >
        </div>
        <div class="input-field">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="state.password"
            @blur="v$.password.$touch()"
            @focus="v$.password.$reset()"
            :class="{ err: v$.password.$error }"
          />
          <small
            :class="{ 'err-mssg': v$.password.$error }"
            v-if="v$.password.$error"
            class="hide"
            >Ensure your password is correct</small
          >
        </div>
        <input type="submit" value="SIGN IN" />
      </form>
      <div class="redirect">
        <p>
          Don't have an account?
          <span class="color"
            ><router-link to="/signup">Create Account</router-link></span
          >
        </p>
        <small>&copy; Umphathi</small>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/reusables_/Header.vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { required, email, minLength } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
export default {
  components: {
    Header,
  },
  setup() {
    const store = useStore();
    const state = ref({
      email: "",
      password: "",
    });
    const validations = {
      email: { required, email },
      password: {
        required,
        minLength: minLength(6),
      },
    };
    const validate = () => {
      v$.value.$validate();
    };
    const signIn = (email, password) => {
      store.dispatch("signIn", { email, password });
      validate();
    };
    const v$ = useVuelidate(validations, state);
    const errMssg = computed(() => store.getters.errorMssg);
    return {
      state,
      signIn,
      errMssg,
      v$,
    };
  },
};
</script>
<style scoped>
.sign_in {
  background: url("@/assets/img/blob.svg") no-repeat top 30px right 0px,
    url("@/assets/img/blob.svg") no-repeat bottom 20px left 0px;
  background-size: 30%;
  margin-top: 1.5rem;
}
.card {
  margin: 4rem 0.1rem 2rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 5px;
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: (10.5px);
}
.card .input-field {
  margin: 2rem 0;
}
.card input {
  display: block;
  width: 100%;
  margin: 0.7rem 0;
  border: solid 1px var(--gray-blue);
}
.card label {
  color: gray;
}
.card input[type="submit"] {
  text-transform: uppercase;
  font-weight: bold;
  background: var(--btn);
  color: #ffffff;
  border: solid 1px var(--btn);
  transition: ease-in-out 0.5s all;
  cursor: pointer;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14);
  margin: 0.1rem;
}
.card h2 {
  font-size: 20px;
}
.redirect {
  margin: 1rem 0;
}
.redirect p {
  margin: 0.5rem 0;
}
.color a {
  color: var(--btn);
}
.error {
  text-align: center;
  margin-top: 1rem;
  background: #fa5d5d;
  color: var(--white);
  padding: 0.5rem;
  border-radius: 5px;
}
.err {
  border: solid 1px #fa5d5d !important;
}
.err-mssg {
  color: #fa5d5d !important;
}
.hide {
  color: transparent;
  transition: color ease 0.4s;
}
@media screen and (min-width: 700px) {
  .sign_in {
    width: 500px;
    margin: 1.5rem auto 0;
  }
  .card {
    margin: 3rem 0 2rem;
  }
  .card input[type="submit"] {
    font-size: 15px;
  }
  .card h2 {
    font-size: 25px;
  }
}
</style>
