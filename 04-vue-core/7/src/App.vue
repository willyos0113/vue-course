<template>
  <main>
    <div>
      <MessageItem
        v-for="message in messages"
        :key="message.id"
        :sender="message.sender"
        :msg="message.msg"
        :time="message.time"
      />
    </div>
  </main>
</template>

<script>
import MessageItem from "./components/MessageItem.vue";
export default {
  components: { MessageItem },
  data() {
    return {
      messages: [
        {
          id: 1,
          sender: "張三",
          msg: "你好呀!",
          time: "19:38",
        },
        {
          id: 2,
          sender: "李四",
          msg: "Hi!",
          time: "19:38",
        },
        {
          id: 3,
          sender: "王五",
          msg: "最近怎麼樣？",
          time: "19:42",
        },
      ],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: white;
}
body {
  background-color: black;
}
</style>
