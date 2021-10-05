<template>
  <buttons>
    <button class="back-btn btn flex-between" @click="goBack"><span class="mdi mdi-chevron-left"></span> Back</button>
  </buttons>
  <buttons>
    <div class="input-field flex-buttons">
      <button class="del-btn btn" @click="onDelete">Delete</button>
      <button class="edit-btn btn" @click="gotoEdit(employee_id)">Edit</button>
    </div>
  </buttons>
  <div class="employee_dets" v-if="employee">
    <div class="info info_one">
      <h3>Basic Info</h3>
      <h4>{{employee.firstName}} {{employee.lastName}}</h4>
      <p>{{employee.role}}</p>
    </div>
    <div class="info info_two">
      <h3>Contact Info</h3>
      <p class="flex-between"><b>Email:</b>{{employee.email}}</p>
      <p class="flex-between">
        <b>Address:</b> 16, Odegbami Street Mafoloku, Oshodi
      </p>
      <p class="flex-between"><b>State:</b> {{employee.state}}</p>
      <p class="flex-between"><b>City:</b> {{employee.city}}</p>
      <p class="flex-between"><b>Postal Code:</b> {{employee.postCode}}</p>
      <p class="flex-between"><b>Mobile Number:</b> {{formatNumber(employee.mobileNumber)}}</p>
      <p class="flex-between"><b>Emergency Number:</b> {{formatNumber(employee.emergencyNumber)}}</p>
      <p class="flex-between"><b>Gender:</b> {{employee.gender}}</p>
      <p class="flex-between"><b>Date Joined:</b> {{formatDate(employee.joinDate)}}</p>
    </div>
  </div>
  <div class="modal" v-show="modal">
    <div class="modal-content">
      <p class="bold-font">Confirm Deletion</p>
      <p class="light-font">
        Are you sure you want to delete employee <span class="hash">#</span
        >{{ employee_id }}? This action cannot be reversed.
      </p>
      <div class="flex-end">
        <button class="cancel-btn btn" depressed @click="cancel">Cancel</button>
        <button class="del-btn btn" depressed @click="delEmployee">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
// import { onMounted } from 'vue'
import buttons from "@/components/reusables_/buttons.vue";
import moment from "moment";
export default {
  props: ["id"],
  components: {
    buttons,
  },
  setup(props) {
    const employee_id = ref(props.id);
    const modal = ref(false);
    // onMounted(() => console.log(props.id))
    const router = useRouter();
    const goBack = () => {
      router.go(-1);
    };
    const onDelete = () => {
      modal.value = true;
    };
    const cancel = () => {
      modal.value = false;
    };
    const delEmployee = () => {
      // modal.value = false;
      store.dispatch("deleteEmployee", employee_id.value)
    };
    const gotoEdit = (id) => {
      router.push({name: "Edit", params: {id}})
    }
    const store = useStore();
    const employee = computed(() => store.getters.singleEmployee);
    store.dispatch("singleEmployee", employee_id.value)
    const formatDate = (date) => {
      return moment(date).format("DD MMM YYYY");
    };
    const formatNumber = (number) => {
      return number.replace(/[^0-9]/g, '')
                   .replace(/(\d{3})(\d{4})(\d{3})/, '($1) $2-$3')
    };
    return {
      employee_id,
      employee,
      formatDate,
      formatNumber,
      goBack,
      modal,
      onDelete,
      delEmployee,
      cancel,
      gotoEdit
    };
  },
};
</script>
<style scoped>
.info {
  line-height: 1.5;
  margin: 1rem 0.2rem;
  padding: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 5px;
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: (10.5px);
  line-height: 1.7;
  background: var(--white);
}
.info h3 {
  color: gray;
  margin: 0 0 0.7rem;
  font-weight: bolder;
}
.info h4 {
  font-size: 20px;
  padding-bottom: 0.2rem;
}
.info p {
  flex-wrap: wrap;
}
.info_two p {
  padding: 0 0 0.6rem;
}
.btn {
  text-transform: uppercase;
  font-weight: bold;
  background: #fa5d5d;
  color: #ffffff;
  border: solid 1px #fa5d5d;
  transition: ease-in-out 0.5s all;
  cursor: pointer;
  box-shadow: none;
  margin: 0.1rem;
  flex-basis: 10%;
}
.back-btn {
  background: none !important;
  border: none !important;
  color: var(--text);
  padding: 0;
  text-transform: capitalize;
  margin-bottom: 2rem;
}
.cancel-btn {
  background: #333 !important;
  border: solid 1px #333 !important;
}
.edit-btn {
  background: var(--btn) !important;
  border: solid 1px var(--btn) !important;
}
.flex-buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.modal {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  z-index: 100;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: (4px);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 60px;
  left: 0;
  overflow: hidden;
}
.modal p {
  font-size: 15px;
  line-height: 1.5;
}
.modal p:first-child {
  font-size: 20px;
}
.modal-content {
  position: fixed;
  padding: 1rem;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  width: 300px;
  background: var(--white);
  transform: translate(-50%, -50%) scale(0);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  animation: scaleIn 0.4s forwards;
}
@keyframes scaleIn {
  to {
    transform: translate(-50%, -50%) scale(1);
  }
}
.flex-end {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;
}
.flex-end .btn {
  border-radius: 50px;
}
.bold-font {
  font-weight: bolder;
}
.light-font {
  font-weight: lighter;
}
@media screen and (min-width: 700px) {
  .employee_dets {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .info_one {
    flex-basis: 40%;
    margin-right: 1rem;
  }
  .info_two {
    flex-basis: 60%;
  }
}
</style>
