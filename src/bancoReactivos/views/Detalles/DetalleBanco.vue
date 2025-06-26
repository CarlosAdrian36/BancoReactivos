<template>
  <div class="max-w-4xl mx-auto p-6 mt-4 bg-white shadow rounded">
    <div v-if="loading" class="text-center text-gray-500">Cargando banco...</div>

    <div v-else-if="banco">
      <h2 class="text-2xl font-bold mb-2">{{ banco.titulo }}</h2>
      <p class="text-gray-700">{{ banco.descripcion }}</p>
    </div>

    <div v-else class="text-red-500 text-center">Banco no encontrado</div>

    <button
      @click="$router.push('/banco')"
      class="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      ← Volver a la lista
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { fetchBancos } from '@/api/mock/mockBancoAPI'; // ajusta esta ruta si es necesario
import type { BancoReactivo } from '@/Banco/interface/banco.interface';

const route = useRoute();
const banco = ref<BancoReactivo | null>(null);
const loading = ref(true);

onMounted(async () => {
  const id = Number(route.params.id);
  const bancos = await fetchBancos();
  banco.value = bancos.find((b) => b.bancoId === id) ?? null;
  loading.value = false;
});
</script>
