<template>
  <div class="card">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <!-- 先進行佔位 -->
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.card {
  border: 1px solid hsl(250deg, 50%, 60%);
  padding: 20px;
  border-radius: 8px;
}
.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 12px;
}
</style>
