<script setup lang="ts">
import BancoList from '@/Banco/components/BancoList.vue';
</script>

<template>
  <div class="pt-32 max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Lista de Bancos</h1>
  </div>

  <router-link
    to="/banco/crear"
    class="border border-blue-600 text-blue-600 bg-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition shadow inline-block"
  >
    Crear Banco
  </router-link>

  <RouterView />
  <BancoList />
</template>
