const app = Vue.createApp({
  data() {
    return {
      todos: [
        { id: 1, content: "待辦1" },
        { id: 2, content: "待辦2" },
        { id: 3, content: "待辦3" },
      ],
    };
  },
  methods: {
    // 5.1. click 函數中傳入多個參數 (id, e)
    handleClick(id, e) {
      alert(id + ", " + e.clientX + ", " + e.clientY);
    },
    showContent(content) {
      alert(content);
    },
  },
});
app.mount("#app");
