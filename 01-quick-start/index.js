const Playlist = {
  // 2. vue 接管的資料: 包含用戶輸入值(searchTerm)，播放清單(playlist)
  data() {
    return {
      // 保存播放歌曲名
      playlist: ["What about now", "一千萬個可能", "Me llamas"],
      // 保存用戶搜尋輸入
      searchTerm: "",
    };
  },
  // 3. vue 的程式邏輯: 根據用戶輸入，變化下方列表(操作 (searchTerm, playlist))
  computed: {
    // (searchTerm, playlist) 任一數值發生變化時，computed中的函數都會重新執行
    filteredPlaylist() {
      if (this.searchTerm) {
        // 過濾 playlist 陣列的所有元素，用 .includes() 比對與 searchTerm 是否相同
        return this.playlist.filter((song) =>
          song.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else {
        // 如果搜尋輸入沒有值，則返回原 playlist
        return this.playlist;
      }
    },
  },
};

// 1. Playlist 物件交給 Vue，並將 Vue 掛載至 #app 元素
Vue.createApp(Playlist).mount("#app");
