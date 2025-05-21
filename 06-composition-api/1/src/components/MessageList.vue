<template>
  <h2>{{ options.title }}</h2>
  <p>
    用戶: {{ options.user.name }}, 活躍:
    {{ options.user.active ? "是" : "否" }}
  </p>
  <ul>
    <!-- 遍歷 messages 重複渲染 -->
    <li v-for="msg in messages" :key="msg.id">{{ msg.content }}</li>
  </ul>
  <button @click="messages = []">刪除全部</button>
  <button @click="options.title = '這是標題'">修改標題</button>
  <button @click="options.user.name = '李四'">修改用戶名</button>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    // ref() 將任何形態數據轉換成響應性數據
    const messages = ref([
      { id: 1, content: "這是一條訊息提醒1" },
      { id: 2, content: "這是一條訊息提醒2" },
      { id: 3, content: "這是一條訊息提醒3" },
      { id: 4, content: "這是一條訊息提醒4" },
    ]);
    const options = reactive({
      title: "消息列表",
      user: {
        name: "張三",
        active: true,
      },
    });
    // ref() 包裝的響應性數據 .value 才能存取他的值
    console.log(messages.value);
    // reactive() 包裝的響應性數據，可以直接存取他的值
    console.log(messages);
    // 必須回傳物件屬性，才能在模板上存取
    return { messages, options };
  },
};
</script>
<style></style>
