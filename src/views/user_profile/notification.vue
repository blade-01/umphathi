<template>
  <div class="notification">
    <p>There is nothing here</p>
    <p>
      Your notifications would appear here once you start adding your
      employees
    </p>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.notification {
  text-align: center;
  margin-top: 5rem;
}
.notification p:first-child {
  font-weight: bold;
  margin: 1rem 0;
}
@media screen and (min-width: 700px) {
  .notification {
    width: 400px;
    margin: 5rem auto;
    font-size: 17px;
  }
}
</style>
