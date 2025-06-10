<template>
  <div class="relative group w-full max-w-4xl mx-auto mb-6">
    <div
      class="lg:flex shadow rounded-lg border border-gray-300 transition-shadow duration-300 hover:shadow-xl overflow-hidden"
    >
      <!-- Contenido -->
      <div class="w-full py-5 px-4 flex flex-col gap-2">
        <!-- Título con puntos suspensivos -->
        <label for="password" class="block text-sm font-medium text-gray-700">Titulo</label>
        <input
          type="text"
          id="password"
          placeholder="Escribe el titulo"
          class="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <!-- Descripción -->
        <p class="text-gray-600 text-xs">
          <label class="text-sm font-medium text-gray-700">Descripcion</label>

          <!-- <textarea
            placeholder="Escribe una descripcion"
            class="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            rows="2"
          >
          </textarea> -->
          <textarea
            name="textarea"
            rows="3"
            placeholder="Descripcion."
            class="w-full border border-gray-300 mt-2 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          ></textarea>
        </p>
      </div>
    </div>
  </div>
  <div class="flex justify-center">
    <button
      type="submit"
      class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Crear banco
    </button>
  </div>
</template>
