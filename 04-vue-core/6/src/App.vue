<script>
import MessageItem from "./components/MessageItem.vue";
export default {
  components: { MessageItem },
};
</script>

<template>
  <main>
    <div>
      <MessageItem sender="張三" msg="你好呀!" time="19:38" />
      <MessageItem sender="李四" msg="Hi!" time="19:40" />
      <MessageItem sender="王五" msg="最近怎麼樣？" time="19:42" />
    </div>
  </main>
</template>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
