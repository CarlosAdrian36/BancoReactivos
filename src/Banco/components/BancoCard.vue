<template>
  <div class="w-full max-w-4xl mx-auto mb-6">
    <div
      class="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <!-- Barra superior con botones -->
      <div class="flex justify-between items-center px-5 pt-4">
        <h2 class="text-xl font-semibold text-gray-900 truncate max-w-[80%]">
          Matemáticas I
          zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
        </h2>

        <div class="flex gap-3">
          <!-- Eliminar -->
          <button
            class="text-gray-500 hover:text-red-600 transition cursor-pointer"
            title="Eliminar"
          >
            <i class="fas fa-trash"></i>
          </button>

          <!-- Editar -->
          <button
            class="text-gray-500 hover:text-yellow-400 transition cursor-pointer"
            title="Editar"
          >
            <i class="fas fa-pen"></i>
          </button>

          <!-- Copiar -->
          <button
            class="text-gray-500 hover:text-blue-600 transition cursor-pointer"
            title="Copiar"
          >
            <i class="fas fa-copy"></i>
          </button>

          <!-- Compartir -->
          <button
            class="text-gray-500 hover:text-green-600 transition cursor-pointer"
            title="Compartir"
          >
            <i class="fas fa-share-alt"></i>
          </button>
        </div>
      </div>

      <!-- Contenido -->
      <div class="px-5 pb-5 pt-2">
        <p class="text-sm text-gray-600">
          Esta es una descripción secundaria del contenido, mostrando más detalles o contexto.
        </p>
      </div>
    </div>
  </div>
</template>
