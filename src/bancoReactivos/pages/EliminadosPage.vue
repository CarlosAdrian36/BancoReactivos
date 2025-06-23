<script setup lang="ts">
import BancoCard from '@/Banco/components/BancoCard.vue';
</script>

<template>
  <div class="pt-36 max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Lista de Bancos Eliminados</h1>
  </div>

  <section class="py-10 bg-gray-100">
    <div
      class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
    >
      <!--Bancos-->
      <BancoCard />
    </div>
  </section>
</template>
