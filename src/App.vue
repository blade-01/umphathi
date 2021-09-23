<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");
body {
  background: url("@/assets/img/bg-hero-mobile.svg") no-repeat center
    center/cover;
  background-color: var(--bg);
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text);
  line-height: 1.3;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Poppins", sans-serif;
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --mainbar: #f8f9fd;
  --text: #3b3b3e;
  --outline: #a4cbc5;
  --outline-two: #cef4ee;
  --btn: #ff52bf;
  --search: #e3e3e3;
  --bg: #ebfbff;
  --v-dark-cyan: #00252e;
  --gray-blue: #808d99;
  --white: #ffffff;
}
.container {
  width: 90%;
  margin: auto;
  overflow: hidden;
}
.hide-on-sm {
  display: none;
}
.hide-on-lg {
  display: block;
}
.router-link-exact-active {
  color: var(--btn);
}
img {
  width: 100%;
}
button,
input,
textarea,
select {
  outline: none;
  background: transparent;
  padding: 0.7rem 1rem;
  border-radius: 5px;
}
a {
  text-decoration: none;
  color: var(--text);
}
.btn {
  text-transform: uppercase;
  font-weight: bold;
  transition: ease-in-out 0.5s all;
  cursor: pointer;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -1px rgba(0, 0, 0, 0.2);
  margin: 0.1rem;
}
.box-shadow {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-around {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
@media screen and (min-width: 700px) {
  body {
    background: url("@/assets/img/bg-hero-desktop.svg") no-repeat center
      center/cover;
    background-color: var(--bg);
  }
  .container {
    width: 80%;
  }
  .hide-on-lg {
    display: none;
  }
  .hide-on-sm {
    display: block;
  }
}
@media screen and (min-width: 1000px) {
  .container {
    width: 900px;
  }
}
@media screen and (min-width: 1200px) {
  .container {
    width: 1100px;
  }
}
</style>
