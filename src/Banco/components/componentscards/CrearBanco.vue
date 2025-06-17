<template>
  <div class="space-y-6">
    <!-- 👈 NUEVO ROOT ELEMENT -->

    <!-- Formulario -->
    <div class="relative group w-full max-w-4xl mx-auto mb-6">
      <div
        class="lg:flex shadow rounded-lg border border-gray-300 transition-shadow duration-300 hover:shadow-xl overflow-hidden"
      >
        <!-- Contenido -->
        <div class="w-full py-5 px-4 flex flex-col gap-2">
          <!-- Título -->
          <label for="titulo" class="block text-sm font-medium text-gray-700">Título</label>
          <input
            type="text"
            id="titulo"
            placeholder="Escribe el título"
            class="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <!-- Descripción -->
          <label class="block text-sm font-medium text-gray-700">Descripción</label>
          <textarea
            rows="3"
            placeholder="Escribe una descripción"
            class="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          ></textarea>
        </div>
      </div>
    </div>

    <!-- Botón -->
    <div class="flex justify-center py-4">
      <button
        type="submit"
        class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Crear banco
      </button>
    </div>
  </div>
</template>
