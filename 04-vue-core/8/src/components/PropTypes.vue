<template>
  <p>{{ num }} - {{ typeof num }}</p>
  <p>{{ bool }} - {{ typeof bool }}</p>
  <p>{{ obj }} - {{ typeof obj }}</p>
  <p>{{ arr }} - {{ arr.constructor.name }}</p>
</template>

<script>
export default {
  props: ["num", "bool", "obj", "arr"],
};
</script>
