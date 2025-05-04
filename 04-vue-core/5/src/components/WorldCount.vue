<!-- 編寫 HTML 組件模板 -->
<template>
  <div>
    <input type="text" v-model="content" />
    <p>您共輸入了{{ count }}個字元</p>
  </div>
</template>
<!-- 編寫組件的配置物件 -->
<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  computed: {
    count() {
      return this.content.length;
    },
  },
};
</script>
<!-- 編寫組件的樣式 -->
<style scoped>
input {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
}
p {
  margin-top: 1em;
  margin-bottom: 2em;
}
</style>
