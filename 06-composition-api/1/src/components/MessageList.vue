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

    // 1.4. watch() - 監聽 ”基本型態” 響應式數據的變化
    // watch(
    //   () => options.title,
    //   (newVal, oldVal) => {
    //     console.log(newVal, oldVal);
    //   }
    // );
    // watch(
    //   () => options.user.name,
    //   (newVal, oldVal) => {
    //     console.log(newVal, oldVal);
    //   }
    // );

    // 1.5. watch() - 監聽 ”代理物件” 中的響應屬性變化
    // 1.6. 改進無法監聽到 oldVal，使新舊值都可被存取
    // watch(
    //   () => JSON.parse(JSON.stringify(options)),
    //   (newVal, oldVal) => {
    //     console.log(newVal, oldVal);
    //   },
    //   {
    //     deep: true,
    //   }
    // );

    // 1.7. watch() - 同時監聽多個響應數據
    // watch(
    //   [() => options.title, () => options.user.name],
    //   (newVals, oldVals) => {
    //     console.log(newVals, oldVals);
    //   }
    // );

    // 1.8. watchEffect() - 會先執行一次後，響應數據變化時再執行
    watchEffect(() => {
      console.log(options.title);
      console.log(options.user.name);
    });

    const searchTerm = ref("");
    // 1.3. 定義 computed() 函數回傳計算結果
    const searchedMessages = computed(() => {
      if (searchTerm.value === "") return messages.value;
      return messages.value.filter((msg) => {
        return msg.content.includes(searchTerm.value); // 包含 searchTerm 的部分才顯示
      });
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
