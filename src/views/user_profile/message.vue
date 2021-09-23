<template>
  <div class="message">
    <p>There is nothing here</p>
    <p>
      Your messages would appear here once you start chatting with your
      employees
    </p>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.message {
  text-align: center;
  margin-top: 5rem;
}
.message p:first-child {
  font-weight: bold;
  margin: 1rem 0;
}
@media screen and (min-width: 700px) {
  .message {
    width: 400px;
    margin: 5rem auto;
    font-size: 17px;
  }
}
</style>
