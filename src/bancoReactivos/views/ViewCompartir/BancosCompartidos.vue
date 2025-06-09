<script setup lang="ts"></script>

<template>
  <div class="w-full max-w-4xl mx-auto mb-6">
    <div
      class="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <!-- Barra superior con botones -->
      <div class="flex justify-between items-center px-5 pt-4">
        <h2 class="text-xl font-semibold text-gray-900 truncate max-w-[80%]">
          Matemáticas I
          zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
        </h2>

        <div class="flex gap-3">
          <!-- Usa tus propios íconos SVG si gustas -->
          <button class="text-gray-500 hover:text-red-600 transition" title="Eliminar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button class="text-gray-500 hover:text-yellow-600 transition" title="Editar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.232 5.232l3.536 3.536M9 13l6-6 3 3-6 6H9v-3z"
              />
            </svg>
          </button>

          <button class="text-gray-500 hover:text-blue-600 transition" title="Copiar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 16h8M8 12h8m-6 4h6a2 2 0 002-2V7a2 2 0 00-2-2h-6a2 2 0 00-2 2v10z"
              />
            </svg>
          </button>

          <button class="text-gray-500 hover:text-green-600 transition" title="Compartir">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 12v-1a9 9 0 019-9h1m0 0v5m0-5l-5 5m9 6a9 9 0 01-9 9H4m0 0v-5m0 5l5-5"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Contenido -->
      <div class="px-5 pb-5 pt-2">
        <p class="text-sm text-gray-600">
          Esta es una descripción secundaria del contenido, mostrando más detalles o contexto. Lorem
          ipsum dolor sit amet, consectetur.
        </p>
      </div>
    </div>
  </div>
</template>
