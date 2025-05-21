<template>
  <div>
    <p>當前頁: {{ currentPage }}</p>
    <button v-for="n in totalPage" @click="changePage(n)">{{ n }}</button>
  </div>
</template>
<script>
export default {
  props: ["totalPage", "defaultCurrentPage"],
  data() {
    return {
      // 子組件唯一能做的，就是在子組件定義一個響應屬性，承接父組件的 props 為預設值
      currentPage: this.defaultCurrentPage,
    };
  },
  methods: {
    // 接下來，子組件點擊時，修改子組件的響應屬性(該動作與父組件 props 無關)
    changePage(n) {
      this.currentPage = n;
    },
  },
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
