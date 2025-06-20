<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="pt-26 mx-auto">
    <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Bancos Compartidos</h1>

    <!-- Tabs -->
    <div class="flex justify-center border-b border-gray-300 mb-4">
      <RouterLink
        to="/compartidos/compartido"
        class="px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-200"
        :class="
          route.path === '/compartidos/compartido'
            ? 'text-blue-600 border-blue-600'
            : 'text-gray-600 border-transparent hover:text-blue-600 hover:border-blue-600'
        "
      >
        Compartidos conmigo
      </RouterLink>

      <RouterLink
        to="/compartidos/bancospormi"
        class="px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-200"
        :class="
          route.path === '/compartidos/bancospormi'
            ? 'text-blue-600 border-blue-600'
            : 'text-gray-600 border-transparent hover:text-blue-600 hover:border-blue-600'
        "
      >
        Compartidos por mí
      </RouterLink>
    </div>

    <!-- Aquí se mostrará el contenido de cada tab -->
    <RouterView />
  </div>
</template>
