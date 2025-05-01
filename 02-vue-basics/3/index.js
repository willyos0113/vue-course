const app = Vue.createApp({
  data() {
    return {
      blogPosts: [
        "Vue 3.0x 入門實踐",
        "Vue 3.x 完全指南",
        "React 18 新特性介紹",
        "JavaScript 基礎語法概覽",
      ],
      // 11.5. 手動定義響應式數據 count 起始為 4
      count: 4,
    };
  },
  // 11.2. 透過 computed 定義 count() 函式計算陣列 blogPosts 長度並回傳
  computed: {
    // count() {
    //   return this.blogPosts.length;
    // },
  },
  watch: {
    // 11.6. 改為透過 watch 定義 blogPosts{} 物件計算陣列 blogPosts 長度，並更新 count 數值
    blogPosts: {
      handler(newVal) {
        this.count = newVal.length;
      },
      // 其中，監聽對象為陣列的元素時，需要加上 deep 屬性，不然 watch 只會監聽陣列的引用，而非內部元素
      deep: true,
    },
  },
});
app.mount("#app");
