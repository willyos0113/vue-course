const app = Vue.createApp({
  data() {
    // 18.2. 定義響應數據的初始值(可演算的原始資料)
    return {
      fontSize: 16,
    };
  },
  computed: {
    // 18.3. 將響應數據包裹成一個 style 物件並回傳
    pStyle() {
      return {
        color: "white",
        fontSize: this.fontSize + "px",
      };
    },
  },
});
app.mount("#app");
