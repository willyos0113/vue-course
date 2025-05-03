const app = Vue.createApp({
  data() {
    return {};
  },
  methods: {
    handleUlClick() {
      alert("ul");
    },
    handleLiClick() {
      alert("li");
    },
  },
});
app.mount("#app");
