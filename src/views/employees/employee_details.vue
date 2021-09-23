<template>
  <buttons>
    <div class="input-field flex-buttons">
      <button class="back-btn btn" @click="goBack">Back</button>
      <button class="del-btn btn"  @click="delEmployee" >Delete</button>
    </div>
  </buttons>
  <div class="employee_dets">
    <div class="info info_one">
      <h3>Basic Info</h3>
      <h4>Animashaun Taofiq</h4>
      <p>Frontend Developer</p>
    </div>
    <div class="info info_two">
      <h3>Contact Info</h3>
      <p class="flex-between"><b>Email:</b>animashauntaofiq@me.com</p>
      <p class="flex-between"><b>Address:</b> 16, Odegbami Street Mafoloku, Oshodi</p>
      <p class="flex-between"><b>State:</b> Lagos State</p>
      <p class="flex-between"><b>City:</b> Oshodi</p>
      <p class="flex-between"><b>Postal Code:</b> KDF15</p>
      <p class="flex-between"><b>Mobile Number:</b> +2348108667883</p>
      <p class="flex-between"><b>Emergency Number:</b> 08108667883</p>
      <p class="flex-between"><b>Gender:</b> Male</p>
      <p class="flex-between"><b>Date Joined:</b> 01 Feb 2019</p>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
// import { onMounted } from 'vue'
import buttons from "@/components/reusables_/buttons.vue";
export default {
  props: ["id"],
  components: {
    buttons
  },
  setup(props) {
    const employee_id = ref(props.id);
    // onMounted(() => console.log(props.id))
    const router = useRouter();
    const goBack = () => {
      router.go(-1);
    };
    return {
      employee_id,
      goBack
    };
  },
};
</script>
<style scoped>
.info {
  line-height: 1.5;
  margin: 1rem 0.2rem;
  padding: 1.5rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: (10.5px);
  line-height: 1.7;
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
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14);
  margin: 0.1rem;
  flex-basis: 10%;
}
.back-btn {
  background: #333 !important;
  border: solid 1px #333 !important;
}
.flex-buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
