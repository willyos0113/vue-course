<script>
import WorldCount from "./components/WorldCount.vue";
export default {
  components: { WorldCount },
};
</script>

<template>
  <main>
    <div>
      <h1>字元統計應用程式</h1>
      <WorldCount />
    </div>
  </main>
</template>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
