<template>
  <main>
    <div>
      <!-- 父組件調用子組件自定義事件 deletePost -->
      <BlogPostItem
        v-for="item in posts"
        :key="item.id"
        v-bind="item"
        class="blogLink"
        @deletePost="handleDeletePost"
      />
    </div>
  </main>
</template>

<script>
import BlogPostItem from "./components/BlogPostItem.vue";
export default {
  components: { BlogPostItem },
  data() {
    return {
      posts: [
        { id: 1, title: "Post 1", link: "https://some.url.com" },
        { id: 2, title: "Post 2", link: "https://some.url.com" },
        { id: 3, title: "Post 3", link: "https://some.url.com" },
      ],
    };
  },
  methods: {
    // 子組件傳遞來的 id
    handleDeletePost(id) {
      this.posts = this.posts.filter((p) => p.id != id);
    },
  },
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
button {
  background-color: #ec4899;
  padding: 2px;
  margin: 2px 10px;
}
</style>
