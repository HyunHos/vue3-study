<template>
  <div v-show="false">
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

  <div>
    <!-- <p v-if="isshow">1</p> -->
    <p v-if="true">2</p>
  </div>

  <!-- v-for -->
  <div>
    <li v-for="({message}, index) in items" :key="index">
      {{message}}
    </li>
  </div>
  
  <!-- v-for 숫자 -->
  <div>
    <li v-for="(item, index) in 10" :key="index">{{item}}, {{index}}</li>
  </div>

  <!-- 이벤트 핸들링 -->
  <button @click="greet">안녕</button>

  <!-- Form 입력 바인딩 -->
  <span>
    <input :value="text" >
    <button @click="showtext">출력
    </button>
  </span>
  
  <span>
    <input v-model="text">
  </span>
  
  <input v-model.trim="age" />

  <input ref="inputref"/>

  <div>
    <li v-for="item in items" :key="item" ref="itemRefs">{{item.message}}</li>
  </div>
  </div>
</template>

<script setup>
 import {ref, onMounted, computed, watch } from 'vue'

 // 반응적인 상태의 속성
 const count = ref(0);
 const isShow = ref(true);
 const author = ref({books : ['1', '2', '3']})
 const now  = computed(() => Date.now());
 const text = ref("abcdefg");
 const inputref = ref(null);
 
 const itemRefs = ref([]);
 const classObject = ref({
  'active' : false, 
  'text-danger' : true,
 })
 const items = ref([{message : 'Foo'}, {message : 'Bar'}]);

 items.value.forEach((element, idx) => {
  console.log(element, idx)
 });

const name = ref('Vue.js')

function showtext(){
  alert(`안녕 ${text.value}!`)
}
function greet(event) {
  alert(`안녕 ${name.value}!`)
  // 'event'는 네이티브 DOM 이벤트 객체입니다.
  if (event) {
    alert(event.target.tagName)
  }
}

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
 onMounted(() => {
    console.log('onMouteed가 호출 되었습니다.', this);

    // if(inputref.value){
    //   console.log(inputref.value)
    //   inputref.value.focus()
    // }

    console.log(itemRefs.value[0])
 })

  // 감시자
  watch(text, function(newValue, oldValue){
    console.log(`new value : ${newValue} / old value : ${oldValue}`);
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
