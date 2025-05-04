const app = Vue.createApp({
  // 10.1. 直接訪問 data() 屬性
  data() {
    return {
      msg: "您好",
      name: "張三",
    };
  },
  // 10.2. 直接訪問 computed 方法
  computed: {
    greeting() {
      return `${this.msg} ${this.name}`;
    },
  },
  // 10.3. 直接訪問 methods 方法
  methods: {
    changeName(name) {
      this.name = name;
    },
  },
});
const vm = app.mount("#app");
