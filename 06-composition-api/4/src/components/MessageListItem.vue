<template>
  <li>{{ msg }}</li>
</template>

<script>
import { ref, watch, watchEffect, toRefs } from "vue";

export default {
  // 4.1. 傳遞 props 屬性
  props: ["msg"],
  setup(props) {
    console.log(props.msg);

    return {};
  },
};
</script>
<style>
li {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
