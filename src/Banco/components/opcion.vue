<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="relative w-full max-w-4xl mx-auto mb-6">
    <!-- Card -->
    <div
      class="shadow rounded-lg border border-gray-300 transition-shadow duration-300 hover:shadow-xl overflow-hidden"
    >
      <!-- Encabezado con botones -->
      <div class="flex justify-between items-start px-4 py-3 bg-gray-100">
        <h2
          class="font-semibold text-gray-800 text-xl truncate max-w-full"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        >
          Matemáticas I
          zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
        </h2>

        <!-- Botones tipo toolbar -->
        <div class="flex gap-2">
          <button
            class="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600"
            title="Eliminar"
          >
            🗑️
          </button>
          <button
            class="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-yellow-600"
            title="Editar"
          >
            ✏️
          </button>
          <button
            class="bg-gray-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-600"
            title="Copiar"
          >
            📋
          </button>
          <button
            class="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-600"
            title="Compartir"
          >
            📤
          </button>
        </div>
      </div>

      <!-- Contenido -->
      <div class="px-4 py-4">
        <p class="text-gray-600 text-sm">
          Esta es una descripción secundaria del contenido, mostrando más detalles o contexto. Lorem
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
