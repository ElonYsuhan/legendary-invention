<script setup lang="ts">
import { onMounted } from 'vue';
import { createViewer } from './lib/Earth';
onMounted(()=>{
  createViewer("viewer-elon");
})
</script>

<template>
  <div class="box-viewer" id="viewer-elon">
    
  </div>
</template>

<style scoped>

.box-viewer{
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
