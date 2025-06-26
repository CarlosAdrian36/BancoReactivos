<script setup lang="ts">
import FooterCustom from '../components/FooterCustom.vue';
import TopMenu from '../components/TopMenu.vue';
</script>

<template>
  <TopMenu />
  <div class="pt-19 not-first-of-type:min-h-[calc(100vh-64px-56px)]">
    <RouterView />
  </div>
  <FooterCustom />
</template>
