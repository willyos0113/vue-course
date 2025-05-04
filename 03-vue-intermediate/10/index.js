const app = Vue.createApp({
  data() {
    // 10.1. 在 data() 中定義初始屬性，用於儲存後續從遠端 API 獲取的資料
    return {
      posts: [],
    };
  },
  methods: {
    // 10.2. 定義一個異步函數 fetchPosts() 用於抓取遠端 API 資料
    async fetchPosts() {
      const resp = await fetch("./posts.json");
      const postsData = await resp.json();
      this.posts = postsData;
    },
  },
  // 10.3. 在 created() 生命週期鉤子中調用 fetchPosts() 函數
  created() {
    this.fetchPosts();
  },
});
app.mount("#app");
