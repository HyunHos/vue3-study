<script setup>
  import { ref } from 'vue';
  import BlogPost from './components/BlogPost.vue';
  import NoteBook from './components/NoteBook.vue';

  const posts = ref([
    { id : 1, title : "Vue와 함께한 나의 여행" },
    { id : 2, title : "Vue로 블로깅하기" },
    { id : 3, title : "Vue가 재미있는 이유" }
  ])

  const postFontSize = ref(1);

</script>

<template>
  <div :style="{fontSize : postFontSize + 'em'}">
    <BlogPost v-for="post in posts" :key="post.id" :title="post.title" @enlarge-text='postFontSize += 1'></BlogPost>

    <NoteBook></NoteBook>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
