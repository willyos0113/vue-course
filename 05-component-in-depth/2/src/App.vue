<template>
  <main>
    <div>
      <!-- 將事件函數透過 props 傳遞給子組件 -->
      <ButtonWithProps :onClick="handleClick" />
      <!-- 將事件函數帶參數透過 emits 傳遞給父組件(反方向) -->
      <ButtonWithEmits @customClick="handleClick" />
    </div>
  </main>
</template>

<script>
import ButtonWithProps from "./components/ButtonWithProps.vue";
import ButtonWithEmits from "./components/ButtonWithEmits.vue";
export default {
  components: { ButtonWithProps, ButtonWithEmits },
  methods: {
    handleClick(value) {
      alert(value);
    },
  },
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
