const app = Vue.createApp({
  data() {
    return {
      // 19.1. class 屬性名定義為響應變數
      textClass: "text-blue",
      stateClass: "danger",
      // 19.4. 定義切換用響應變數
      isHidden: false,
    };
  },
});
app.mount("#app");
