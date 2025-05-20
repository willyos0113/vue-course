<template>
  <div>
    <a :href="link">{{ title }}</a>
    <!-- $emit() 調用自定義事件，注意這邊的 id 同父組件的 props -->
    <button @click="$emit('deletePost', id)">刪除</button>
  </div>
</template>

<script>
export default {
  props: ["id", "link", "title"],
  // 自定義事件名
  emits: ["deletePost"],
  mounted() {
    console.log(this.$attrs.class);
  },
};
</script>
