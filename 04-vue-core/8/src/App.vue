<template>
  <main>
    <div>
      <!-- <PropTypes
        :num="10"
        :bool="true"
        :obj="{ name: '張三' }"
        :arr="[1, 2, 3, 4]"
      /> -->
      <TypeValidation name="張三" :age="-20" />
    </div>
  </main>
</template>

<script>
import PropTypes from "./components/PropTypes.vue";
import TypeValidation from "./components/TypeValidation.vue";
export default {
  components: { PropTypes, TypeValidation },
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
