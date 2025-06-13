<script setup lang="ts">
import BancoList from '@/Banco/components/BancoList.vue';
import { useRouter } from 'vue-router';
// const route = useRoute();
const router = useRouter();

// Función para volver a la lista
function volverALaLista() {
  router.push('/banco');
}
</script>

<template>
  <div class="pt-32 max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Lista de Bancos</h1>
  </div>

  <router-link
    v-if="$route.name != 'crear'"
    to="/banco/crear"
    class="border border-blue-600 text-blue-600 bg-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition shadow inline-block"
  >
    Crear Banco
  </router-link>
  <button
    v-else
    @click="volverALaLista"
    class="border border-gray-600 text-gray-600 bg-white px-4 py-2 rounded-lg hover:bg-gray-600 hover:text-white transition shadow inline-block"
  >
    ← Volver a la lista
  </button>

  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" v-if="$route.name === 'crear'" />
      <BancoList v-else />
    </transition>
  </RouterView>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
