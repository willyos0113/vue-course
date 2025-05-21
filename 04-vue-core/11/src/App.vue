<template>
  <main>
    <div>
      <BaseCard>
        <!-- 填充 slot 將安插的模板內容 -->
        <template v-slot:title>
          <h2>卡片標題</h2>
        </template>
        <template v-slot:content>
          <p>這是卡片內容</p>
          <p>可以插入任何 HTML 模板</p>
          <a href="#">這是一個超連結</a>
        </template>
      </BaseCard>
    </div>
  </main>
</template>

<script>
import BaseCard from "./components/BaseCard.vue";
export default {
  components: { BaseCard },
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

.blogLink a {
  color: #ec4899;
}
</style>
