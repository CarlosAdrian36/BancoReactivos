<script setup lang="ts">
// import BancoCard from '@/Banco/components/BancoCard.vue';
import { fetchBancos } from '@/api/mock/mockBancoAPI';
import BancoList from '@/Banco/components/BancoList.vue';
import { useQuery } from '@tanstack/vue-query';
import { useRouter } from 'vue-router';
// const route = useRoute();
const router = useRouter();

// Función para volver a la lista
function volverALaLista() {
  router.push('/banco');
}

const {
  data: bancos = [],
  // isLoading,
  // isError,
} = useQuery({
  queryKey: ['bancos'],
  queryFn: fetchBancos,
});
</script>

<template>
  <div class="pt-26 max-w-4xl mx-auto flex items-center justify-between">
    <!-- Título ocupa todo el espacio disponible -->
    <h1 class="flex-1 text-2xl font-bold text-center text-gray-800 mb-6">Lista de Bancos</h1>

    <!-- Botón pegado a la derecha -->
    <div class="pr-6">
      <router-link
        v-if="$route.name !== 'crear'"
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
    </div>
  </div>

  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" v-if="$route.name === 'crear'" />
      <section v-else class="py-10 bg-gray-100">
        <div
          class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
        >
          <BancoList :bancos="bancos ?? []" />
        </div>
      </section>
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
