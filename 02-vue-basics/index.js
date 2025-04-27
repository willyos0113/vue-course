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
    };
  },
});
app.mount("#app");
