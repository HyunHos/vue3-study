<template>
  <button @click="increment">숫자 세기: {{ count }}</button>
</template>

<script setup>
 import {ref, onMounted } from 'vue'

 // 반응적인 상태의 속성
 const count = ref(0);

 // 속성 값을 변경하고 업데이트 할 수 있는 함수.
 function increment() {
  count.value++
 }

 // 생명 주기 훅
 onMounted(()=>{
  console.log(`숫자 세기의 초기값은 ${ count.value }입니다.`)
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
