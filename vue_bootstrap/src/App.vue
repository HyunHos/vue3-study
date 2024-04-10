<template>
  <div>
    <button @click="increment">숫자 세기: {{ count }}</button>
    <button :disabled="isShow">버튼</button>
    <div :title="formatDate()">{{formatDate()}}</div>
    <div>{{isShow}}</div>
    <button @click="changetype">타입변경</button>
  

  <p>책을 가지고 있다:</p>
  <span>{{ publishedBooksMessage }}</span>
  <button @click="removebook">책 제거</button>

  <div>{{now}}</div>
  <button @click="changenow">시간변경</button>
  <div :class="classObject">class</div>
  </div>
</template>

<script setup>
 import {ref, onMounted, computed } from 'vue'

 // 반응적인 상태의 속성
 const count = ref(0);
 const isShow = ref(true);
 const author = ref({books : ['1', '2', '3']})
 const now  = computed(() => Date.now());
 
 const classObject = ref({
  'active' : false, 
  'text-danger' : true,
 })

 // 속성 값을 변경하고 업데이트 할 수 있는 함수.
 function increment() {
  count.value++
 }

 // v-bind 용 함수
 function formatDate(){
  return "2024-04-10";
 }
 
 // number 타입 count변수를 string으로 변경
 function changetype(){
  count.value = '20'
 }

 // 계산된 속성
 const publishedBooksMessage = computed(()=> {
  return author.value.books.length > 0 ? 'Yes' : 'No'
 })

 // 책제거 함수
 function removebook (){
  author.value.books.pop();
 } 
 
 // now 값 변경 함수
 function changenow(){
  now.value = Date.now();
 }
 // 생명 주기 훅
 onMounted(()=>{
  console.log(`숫자 세기의 초기값은 ${ count.value }입니다.`)
  console.log(isShow)
  console.log(isShow.value)
 })

  // export default {
  //   name: 'App',
  //   data(){
  //     return {
  //       nav_list : [
  //         {name : "Hom", class:"text-primary"},
  //         {name : "Link", class:"text-primary"},
  //         {name : "Dropdown", class:"text-primary"},
  //         {name : "Disabled", class:"text-primary"}
  //       ],
  //       count : 0,
  //     }
  //   },

  //   methods: {
  //     increaes(){
  //       this.count++
  //     },
  //     // 모달창 show/hide
  //     open_modal(){

  //     }
    
  //   },

  //   components: {
  //   },

  //   created : function(){
  //     console.log("created!")
  //   }
  // }
</script>

<script>
export default {
  
}
</script>
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
