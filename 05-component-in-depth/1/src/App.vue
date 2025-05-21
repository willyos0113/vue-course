<template>
  <main>
    <div class="container">
      <!-- 作為 props 傳遞給組件 -->
      <PaginationComponent
        :totalPage="totalPage"
        :defaultCurrentPage="currentPage"
      />
      <button @click="totalPage += 1">增加頁數</button>
    </div>
  </main>
</template>

<script>
import PaginationComponent from "./components/PaginationComponent.vue";
export default {
  components: { PaginationComponent },
  data() {
    return {
      // 響應屬性
      totalPage: 6,
      currentPage: 4,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
}
body {
  background-color: #0f141c;
  opacity: 1;
  background-image: radial-gradient(
    #212943 0.6000000000000001px,
    #0f141c 0.6000000000000001px
  );
  background-size: 12px 12px;
  color: white;
}
</style>
