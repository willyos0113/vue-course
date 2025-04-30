const app = Vue.createApp({
  data() {
    return {
      blogPosts: [
        "Vue 3.0x 入門實踐",
        "Vue 3.x 完全指南",
        "React 18 新特性介紹",
        "JavaScript 基礎語法概覽",
      ],
      newBlog: "",
    };
  },
  methods: {
    // 12.1. 將原先耗時操作 setTimeout() 等程序，改寫至 methods 中，並令為函式 addNewBLog()
    addNewBlog() {
      setTimeout(() => {
        this.blogPosts.push(this.newBlog);
      }, 2000);
    },
    // 12.2. 撰寫點擊事件 handleButtonClick() ，在 newBlog 中新增部落格
    handleButtonClick() {
      this.newBlog = "Vue 3.x methods 和 watch 的區別";
    },
  },
  // 12.4. 監聽 newBlog 響應數據的變化，執行 addNewBlog()
  watch: {
    newBlog() {
      this.addNewBlog();
    },
  },
});
app.mount("#app");
