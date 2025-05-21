<template>
  <main>
    <div class="container">
      <MessageList />
    </div>
  </main>
</template>

<script>
import MessageList from "./components/MessageList.vue";
export default {
  // 非響應屬性部分，仍舊同 option API 寫法
  components: { MessageList },
  // 響應部分，改為放入 setup() 函數
  setup() {},
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
}
body {
  background-color: #0f141c;
  opacity: 1;
  background-image: radial-gradient(
    #212943 0.6000000000000001px,
    #0f141c 0.6000000000000001px
  );
  background-size: 12px 12px;
  color: white;
}
</style>
