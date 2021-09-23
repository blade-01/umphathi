<template>
  <div class="add_employee">
    <h2>Add Employee</h2>
    <form @submit.prevent>
      <div class="flex-three">
        <div class="input-field">
          <label for="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            v-model="form.firstName"
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
            v-model="form.lastName"
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
          <input type="email" name="email" id="email" v-model="form.email" @blur="v$.email.$touch()"
          @focus="v$.email.$reset()"
          :class="{ err: v$.email.$error }"
          />
          <small :class="{ 'err-mssg': v$.email.$error }" class="hide"
            >Please provide a valid email</small
          >
        </div>
      </div>
      <div class="input-field">
        <label for="address">Address</label>
        <textarea
          type="text"
          name="address"
          id="address"
          rows="5"
          cols="5"
          v-model="form.address"
          @blur="v$.address.$touch()"
          @focus="v$.address.$reset()"
          :class="{ err: v$.address.$error }"
          ></textarea>
          <small :class="{ 'err-mssg': v$.address.$error }" class="hide"
            >You've got no place? 👀</small
          >
      </div>
      <div class="flex-two">
        <div class="input-field">
          <label for="state">State</label>
          <input type="text" name="state" id="state" v-model="form.state"  @blur="v$.state.$touch()"
          @focus="v$.state.$reset()"
          :class="{ err: v$.state.$error }"
          />
          <small :class="{ 'err-mssg': v$.state.$error }" class="hide"
            >required</small
          >
        </div>
        <div class="input-field">
          <label for="city">City</label>
          <input type="text" name="city" id="city" v-model="form.city"  @blur="v$.city.$touch()"
          @focus="v$.city.$reset()"
          :class="{ err: v$.city.$error }"
          />
          <small :class="{ 'err-mssg': v$.city.$error }" class="hide"
            >required</small
          >
        </div>
      </div>
      <div class="flex-two">
        <div class="input-field">
          <label for="mobile">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            v-model="form.mobileNumber"
           @blur="v$.mobileNumber.$touch()"
            @focus="v$.mobileNumber.$reset()"
            :class="{ err: v$.mobileNumber.$error }"
          />
          <small :class="{ 'err-mssg': v$.mobileNumber.$error }" class="hide"
            >required</small
          >
        </div>
        <div class="input-field">
          <label for="emergencyNumber">Emergency Number</label>
          <input
            type="tel"
            name="emergencyNumber"
            id="emergencyNumber"
            v-model="form.emergencyNumber"
           @blur="v$.emergencyNumber.$touch()"
            @focus="v$.emergencyNumber.$reset()"
            :class="{ err: v$.emergencyNumber.$error }"
          />
          <small :class="{ 'err-mssg': v$.emergencyNumber.$error }" class="hide"
            >required</small
          >
        </div>
      </div>
      <div class="flex-two">
        <div class="input-field">
          <label for="postCode">Postal Code</label>
          <input
            type="text"
            name="postCode"
            id="postCode"
            v-model="form.postCode"
           @blur="v$.postCode.$touch()"
            @focus="v$.postCode.$reset()"
            :class="{ err: v$.postCode.$error }"
          />
          <small :class="{ 'err-mssg': v$.postCode.$error }" class="hide"
            >required</small
          >
        </div>
        <div class="input-field">
          <label for="joinDate">Joined At</label>
          <input
            type="date"
            name="joinDate"
            id="joinDate"
            v-model="form.joinDate"
           @blur="v$.joinDate.$touch()"
            @focus="v$.joinDate.$reset()"
            :class="{ err: v$.joinDate.$error }"
          />
          <small :class="{ 'err-mssg': v$.joinDate.$error }" class="hide"
            >required</small
          >
        </div>
      </div>
      <div class="flex-two">
        <div class="input-field">
          <label for="role">Job Designation</label>
          <input type="text" name="role" id="role" v-model="form.role" @blur="v$.role.$touch()"
            @focus="v$.role.$reset()"
            :class="{ err: v$.role.$error }" />
          <small :class="{ 'err-mssg': v$.gender.$error }" class="hide"
            >required</small
          >
        </div>
        <div class="input-field">
          <label for="gender">Gender</label>
          <select id="gender" v-model="form.gender" @blur="v$.gender.$touch()"
            @focus="v$.gender.$reset()"
            :class="{ err: v$.gender.$error }">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <small :class="{ 'err-mssg': v$.gender.$error }" class="hide"
            >Genderless?</small
          >
        </div>
      </div>
      <buttons>
        <div class="input-field flex-buttons">
          <button class="cancel-btn btn" @click="goHome">Cancel</button>
          <input type="submit" value="submit" @click="addEmployee" />
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
    const form = ref({
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
    const v$ = useVuelidate(rules, form);
    const goHome = () => {
      router.go(-1);
    };
    const addEmployee = () => {
      v$.value.$validate();
    };
    return {
      goHome,
      v$,
      form,
      addEmployee
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
