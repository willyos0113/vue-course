<template>
  <button @click="onClick('點擊了按鈕')">按鈕</button>
</template>
<script>
export default {
  props: ["onClick"],
};
</script>
<style>
button {
  border: none;
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 1em 2em;
  margin-top: 24px;
  margin-right: 12px;
  border-radius: 4px;
  color: white;
}
</style>
