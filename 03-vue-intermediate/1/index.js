const app = Vue.createApp({
  data() {
    return {
      // 1.1. 將要插入 HTML 片段定義為一個響應變數 content
      content: `<p>這是一段<span style="color: hsl(0, 80%, 70%)">HTML</span>代碼</p>`,
    };
  },
});
app.mount("#app");
