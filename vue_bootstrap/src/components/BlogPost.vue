<script setup>
    import { defineProps, defineEmits } from "vue";

    defineProps(['title'])
    const emit = defineEmits(['enlarge-text'])

</script>

<template>
    <div class="blog-post">
        <p>{{title}}</p>
        <button @click="emit('enlarge-text')">텍스트 확대</button>
    </div>
   
</template>