const app = Vue.createApp({
  data() {
    return {
      username: "",
    };
  },
  methods: {
    // 13.2. methods 中架設 input 監聽函式，並透過事件物件 e 存取輸入內容
    handleInput(e) {
      // console.log(e.target.value);
      // 13.4. input 事件發生時，將當前輸入內容更新至 username(數據同步給 username)
      this.username = e.target.value;
    },
  },
});
app.mount("#app");
