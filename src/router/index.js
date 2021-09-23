import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName *home* */ "@/views/Home.vue"),
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: () =>
      import(/* webpackChunkName *sign_up* */ "@/views/auth/sign_up.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName *sign_in* */ "@/views/auth/sign_in.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(
        /* webpackChunkName *dashboard* */ "@/views/employees/dashboard.vue"
      ),
    children: [
      {
        path: "employee/:id",
        name: "employee",
        component: () =>
          import(
            /* webpackChunkName *employee* */ "@/views/employees/employee_details.vue"
          ),
        props: true,
      },
      {
        path: "/employee_list",
        name: "employees",
        component: () =>
          import(
            /* webpackChunkName *employee_list* */ "@/views/employees/employee_list.vue"
          ),
      },
      {
        path: "/add",
        name: "Add",
        component: () =>
          import(
            /* webpackChunkName *add_employee* */ "@/views/employees/add_employee.vue"
          ),
      },
      {
        path: ":id/edit",
        name: "Edit",
        component: () =>
          import(
            /* webpackChunkName *edit_employee* */ "@/views/employees/edit_employee.vue"
          ),
        props: true,
      },
      {
        path: "/profile",
        name: "profile",
        component: () =>
          import(
            /* webpackChunkName *profile* */ "@/views/user_profile/profile.vue"
          ),
      },
      {
        path: "/edit_profile",
        name: "edit_profile",
        component: () =>
          import(
            /* webpackChunkName *edit_profile* */ "@/views/user_profile/edit_profile.vue"
          ),
        props: true,
      },
      {
        path: "/message",
        name: "message",
        component: () =>
          import(
            /* webpackChunkName *message* */ "@/views/user_profile/message.vue"
          ),
      },
      {
        path: "/notification",
        name: "notification",
        component: () =>
          import(
            /* webpackChunkName *notification* */ "@/views/user_profile/notification.vue"
          ),
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
