<template>
  <div class="settings">
    <h2>Edit Profile</h2>
    <form @submit.prevent>
      <div class="flex-three">
        <div class="input-field">
          <label for="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            v-model="user.firstName"
            @blur="v$.firstName.$touch()"
            @focus="v$.firstName.$reset()"
            :class="{ err: v$.firstName.$error }"
          />
          <small :class="{ 'err-mssg': v$.firstName.$error }" class="hide"
            >required</small
          >
        </div>
        <div class="input-field">
          <label for="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            v-model="user.lastName"
            @blur="v$.lastName.$touch()"
            @focus="v$.lastName.$reset()"
            :class="{ err: v$.lastName.$error }"
          />
          <small :class="{ 'err-mssg': v$.lastName.$error }" class="hide"
            >required</small
          >
        </div>
        <div class="input-field">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            v-model="user.email"
            @blur="v$.email.$touch()"
            @focus="v$.email.$reset()"
            :class="{ err: v$.email.$error }"
          />
          <small :class="{ 'err-mssg': v$.email.$error }" class="hide"
            >Please provide a valid email</small
          >
        </div>
      </div>
      <div class="input-field">
        <label for="address">Bio</label>
        <textarea
          type="text"
          name="address"
          id="address"
          rows="5"
          cols="5"
          v-model="user.address"
          @blur="v$.address.$touch()"
          @focus="v$.address.$reset()"
          :class="{ err: v$.address.$error }"
        ></textarea>
        <small :class="{ 'err-mssg': v$.address.$error }" class="hide"
          >Just a little info about yourself, no?</small
        >
      </div>
      <buttons>
        <div class="input-field flex-buttons">
          <button class="cancel-btn btn" @click="goHome">Cancel</button>
          <input type="submit" value="save" @click="save" />
        </div>
      </buttons>
    </form>
  </div>
</template>
<script>
import buttons from "@/components/reusables_/buttons.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
export default {
  components: {
    buttons,
  },
  setup() {
    const user = ref({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      state: "",
      city: "",
      mobileNumber: "",
      emergencyNumber: "",
      postCode: "",
      joinDate: "",
      role: "",
      gender: "",
    });
    const rules = {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      address: { required },
      state: { required },
      city: { required },
      mobileNumber: { required },
      emergencyNumber: { required },
      postCode: { required },
      joinDate: { required },
      role: { required },
      gender: { required },
    };
    const router = useRouter();
    const v$ = useVuelidate(rules, user);
    const goHome = () => {
      router.go(-1);
    };
    const save = () => {
      console.log(v$.value.firstName.$error);
      v$.value.$validate();
    };
    return {
      goHome,
      v$,
      user,
      save,
    };
  },
};
</script>
<style scoped>
form {
  margin-top: 2rem;
}
form label {
  color: gray;
}
form input,
form textarea,
form select,
form select option {
  display: block;
  width: 100%;
  margin: 0.7rem 0;
  padding: 0.8rem 1rem;
  border: solid 1px var(--gray-blue);
  transition: ease 0.4s border;
}
form input[type="submit"],
.btn {
  text-transform: uppercase;
  font-weight: bold;
  background: var(--btn);
  color: #ffffff;
  border: solid 1px var(--btn);
  transition: ease-in-out 0.5s all;
  cursor: pointer;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14);
  margin: 0.1rem;
  flex-basis: 20%;
  border-radius: 50px;
}
form input[type="submit"]:hover {
  opacity: 0.9;
}
.err {
  border: solid 1px #fa5d5d !important;
}
.err-mssg {
  color: #fa5d5d !important;
}
.hide {
  color: transparent;
  position: absolute;
  top: 0px;
  right: 0;
  transition: color ease 0.4s;
}
.cancel-btn {
  background: #333 !important;
  border: solid 1px #333 !important;
}
.flex-buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.input-field {
  margin: 1rem 0;
  position: relative;
}
@media screen and (min-width: 700px) {
  .flex-two {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .flex-two .input-field {
    flex-basis: 49%;
    margin: 0.5rem 0;
  }
  .flex-three {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .flex-three .input-field {
    flex-basis: 32.33%;
    margin: 0.5rem 0;
  }
  form input[type="submit"],
  .btn {
    flex-basis: 10%;
  }
}
</style>
