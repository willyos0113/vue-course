const app = Vue.createApp({
  data() {
    return {
      // 1.1. 將要插入 HTML 片段定義為一個響應變數 content
      content: `<p>這是一段<span style="color: hsl(0, 80%, 70%)">HTML</span>代碼</p>`,

      // 2.1. 定義一個 list 陣列為響應變數
      list: [1, 2, 3],

      // 3.1. 為模板屬性名設置動態變數
      attr: "placeholder",
      value: "請輸入一些字元",
      event: "change",
    };
  },
  methods: {
    // 3.3. 撰寫簡單的 change 事件用函數，測試語法是否可行
    handleChange() {
      console.log("input 變化");
    },
  },
});
app.mount("#app");
