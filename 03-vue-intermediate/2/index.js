const app = Vue.createApp({
  data() {
    return {
      blogPost: {
        title: "Vue 3.x 完全指南",
        author: "張旭乾",
        pubDate: "2021-12-12",
      },
      todos: [
        { id: 1, content: "待辦1" },
        { id: 2, content: "待辦2" },
        { id: 3, content: "待辦3" },
      ],
    };
  },
  methods: {
    blogFetch() {
      fetch().then();
    },
  },
});
app.mount("#app");
