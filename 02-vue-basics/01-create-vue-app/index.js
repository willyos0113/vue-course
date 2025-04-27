// 3. 最後將 data() 函數外面在包裹一層物件，並將該物件傳入 .createApp() 當中
const app = Vue.createApp({
  // 1. 請在 js 中，創建一個 data() 函數回傳一個物件，物件中包含所有的數據，
  // 都可以動態地在 HTML 文本中存取
  data() {
    return {
      name: ["同學", "老師"],
    };
  },
});
app.mount("#app");
