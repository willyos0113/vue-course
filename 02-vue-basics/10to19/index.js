// 1.3. 最後將 data() 函數外面在包裹一層物件，並將該物件傳入 .createApp() 當中
const app = Vue.createApp({
  // 1.1. 請在 js 中，創建一個 data() 函數回傳一個物件，物件中包含所有的數據，
  // 都可以動態地在 HTML 文本中存取
  data() {
    return {
      name: ["同學", "老師"],

      // 2.1. 創建一個連結變數，用來插入元素屬性值
      link: "https://zxuqian.cn",

      // 3.1. 創建一個包含多個待辦事項的陣列 todos，用來渲染列表內容
      todos: ["把項目做完", "去超市購物", "看10分鐘的書"],

      // 4.1. 創建一個包含多個物件(待辦事項, 完成與否)的陣列 todos2，用來渲染列表內容
      todos2: [
        { content: "把項目做完", complete: true },
        { content: "去超市購物", complete: false },
        { content: "看10分鐘的書", complete: false },
      ],

      // 5.1. 創建多本讀書的陣列 books，用來條件式渲染元素
      // books: ["JavaScript 基礎語法詳解", "Vue 入門實戰", "React 入門到精通"],
      books: ["JavaScript 基礎語法詳解"],

      // 6.1. 創建一個布林 showAnswer，用來判斷顯示答案與否
      showAnswer: false,

      // 9.1. 新增響應式數據計時器 timer 倒數用 countDown
      countDown: 5, // 倒數用
      timer: null, // 用於清除定時器
    };
  },
  computed: {
    // 7.1. 在 computed 屬性中，寫入判斷布林 showAnswer 的函式 label()
    label() {
      // 9.2. 將倒數數字 countdown 插入 label() 模板文字中
      return this.showAnswer ? "隱藏答案" + this.countDown : "顯示答案";
    },
  },
  methods: {
    // 8.1. 在 methods 屬性中，將 click 邏輯寫進函式 toggleAnswer()
    toggleAnswer() {
      this.showAnswer = !this.showAnswer;
    },
  },
  watch: {
    // 9.3. 撰寫倒數計時邏輯函式 showAnswer() (思考：計時器的創建到銷毀流程)
    showAnswer(newVal, oldVal) {
      // 點擊後 showAnswer 為 true，才開始判斷
      if (newVal) {
        this.countDown = 5;
        // 前次有計時器時，先清除
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
        // 計時開始
        this.timer = setInterval(() => {
          this.countDown--;
          // 計時結束
          if (this.countDown === 0) {
            this.showAnswer = false;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
  },
});
app.mount("#app");
