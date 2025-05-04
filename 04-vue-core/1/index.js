const app = Vue.createApp({}); // 必須要傳空物件，不然 vue 會報錯
app.component("WordCount", {
  // 1.1. 模板文本，描述 HTML 的某部分組件
  template: `
  <div>
    <input v-model="content"/>
    <p>您共輸入了{{ count }}個字符</p>
  </div>
  `,
  // 1.2. 各項配置屬性(先前學習過的...)
  data() {
    return { content: "" };
  },
  computed: {
    count() {
      return this.content.length;
    },
  },
});
app.mount("#app");
