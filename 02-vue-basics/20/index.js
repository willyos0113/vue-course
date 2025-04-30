const app = Vue.createApp({
  data() {
    return {
      blogPosts: [
        "Vue 3.0x 入門實踐",
        "Vue 3.x 完全指南",
        "React 18 新特性介紹",
        "JavaScript 基礎語法概覽",
      ],
      counter: 0,
    };
  },
  // 10.1. 只想顯示標題包含 Vue 的文章
  computed: {
    // 10.2. 透過 computed 定義 vueBlogs() 過濾陣列元素
    vueBlogs() {
      console.log("調用了 vueBlogs()... 這個 computed");
      return this.blogPosts.filter((blog) => blog.includes("Vue"));
    },
  },
  methods: {
    // 10.4. 改為透過 methods 定義 getVueBlogs() 過濾陣列元素
    getVueBlogs() {
      console.log("調用了 getVueBlogs()... 這個 method");
      return this.blogPosts.filter((blog) => blog.includes("Vue"));
    },
  },
});
app.mount("#app");
