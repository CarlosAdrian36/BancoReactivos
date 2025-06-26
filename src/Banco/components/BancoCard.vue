<template>
  <div class="mb-4">
    <div
      class="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      <!-- Barra superior con botones -->
      <div class="flex justify-between items-center px-4 pt-4">
        <h2 class="text-xl font-semibold text-gray-900 truncate max-w-[80%]">
          {{ banco.titulo }}
        </h2>

        <div class="flex gap-3">
          <!-- Eliminar -->
          <button
            class="text-gray-500 hover:text-red-600 transition cursor-pointer"
            title="Eliminar"
          >
            <i class="fa-regular fa-xmark"></i>
          </button>

          <!-- Editar -->
          <button
            class="text-gray-500 hover:text-yellow-400 transition cursor-pointer"
            title="Editar"
          >
            <i class="fa-regular fa-pencil"></i>
          </button>

          <!-- Copiar -->
          <button
            class="text-gray-500 hover:text-blue-600 transition cursor-pointer"
            title="Copiar"
          >
            <i class="fa-regular fa-copy"></i>
          </button>

          <!-- Compartir -->
          <button
            class="text-gray-500 hover:text-green-600 transition cursor-pointer"
            title="Compartir"
          >
            <i class="fa-regular fa-share"></i>
          </button>
        </div>
      </div>

      <!-- Contenido -->
      <div class="px-4 pb-5 pt-2">
        <p class="text-sm text-gray-600">
          {{ banco.descripcion }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { BancoReactivo } from '../interface/banco.interface';

interface Props {
  banco: BancoReactivo;
}
defineProps<Props>();
</script>
