<template>
  <div>
    <input type="text" placeholder="搜索訊息" v-model="searchTerm" />
    <h2>{{ options.title }}</h2>
    <p>
      用戶: {{ options.user.name }}, 活躍:
      {{ options.user.active ? "是" : "否" }}
    </p>
    <ul>
      <!-- <li v-for="msg in searchedMessages" :key="msg.id">{{ msg.content }}</li> -->
      <MessageListItem
        v-for="msg in messages"
        :key="msg.id"
        :msg="msg.content"
      />
    </ul>
    <button @click="messages = []">刪除全部</button>
    <button @click="options.title = '這是標題'">修改標題</button>
    <button @click="options.user.name = '李四'">修改用戶名</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";
import MessageListItem from "./MessageListItem.vue";

export default {
  components: { MessageListItem },
  setup() {
    // 1.1. ref() 將任何形態數據轉換成響應性數據
    const messages = ref([
      { id: 1, content: "這是一條訊息提醒1" },
      { id: 2, content: "這是一條訊息提醒2" },
      { id: 3, content: "這是一條訊息提醒3" },
      { id: 4, content: "這是一條訊息提醒4" },
    ]);

    // 1.2. reactive() 只能將物件轉換成響應性數據
    const options = reactive({
      title: "消息列表",
      user: {
        name: "張三",
        active: true,
      },
    });

    // 1.1. ref() 包裝的響應性數據 .value 才能存取他的值
    console.log(messages.value);

    // 1.2. reactive() 包裝的響應性數據，可以直接存取他的值
    console.log(messages);

    // ※ 必須回傳物件屬性，才能在模板上存取
    return { messages, options, searchTerm, searchedMessages };
  },
};
</script>
<style>
button {
  margin: 0 10px 0 10px;
}
</style>
