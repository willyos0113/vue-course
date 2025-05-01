const app = Vue.createApp({
  data() {
    return {
      username: "",
      gender: "",
      interests: [],
      occupation: "",
      intro: "",
    };
  },
  methods: {
    // 17.2. 撰寫 handleSubmit() 函式
    handleSubmit() {
      // e.preventDefault();
      console.log(this.username);
      console.log(this.gender);
      console.log(this.interests);
      console.log(this.occupation);
      console.log(this.intro);
    },
  },
});
app.mount("#app");
