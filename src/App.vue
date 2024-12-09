<script setup>
import { ref } from 'vue';

let message = ref('Hello Vue!')
setTimeout(() => {
   message.value = "Hello";
   console.log('message changed');
},10_000)
</script>
<template>
    <div class="container">
        <div class="content"><h1>{{ message }}</h1>
        </div>
    </div>
<h1>{{ message }}</h1>
</template>
<style>
 
</style>