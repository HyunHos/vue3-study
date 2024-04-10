import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app');

const app = createApp(App);
app.mount('#app');
// TodoList 앱의 컴포넌트 트리
// App (최상위 컴포넌트)
// ├─ TodoList
// │  └─ TodoItem
// │     ├─ TodoDeleteButton
// │     └─ TodoEditButton
// └─ TodoFooter
//    ├─ TodoClearButton
//    └─ TodoStatistics