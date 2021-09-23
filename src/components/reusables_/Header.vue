<template>
  <div class="header">
    <img src="@/assets/img/blob.svg" alt="" />
    <router-link to="/"><h1 class="title">Umphathi</h1></router-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");
.header {
  display: flex;
  justify-content: start;
  align-items: center;
}
.header h1 {
  font-size: 20px;
  font-family: "Space Mono", monospace;
  color: var(--text);
}
.header img {
  width: 30px;
}
</style>
