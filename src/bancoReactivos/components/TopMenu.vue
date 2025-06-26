<template>
  <nav class="w-full border-b border-gray-200 bg-white py-2 px-6 sm:px-4 fixed top-0 left-0">
    <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-evenly">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-2">
        <svg
          class="h-8 w-8 text-black"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="0,0.663 9.401,0.663 15.882,7.146 15.882,14.127 5.307,3.608 5.274,22.969 0,22.969"
          />
          <polygon
            points="23.631,22.969 14.232,22.969 7.752,16.485 7.752,9.501 18.327,20.018 18.359,0.662 23.631,0.662"
          />
        </svg>
        <span class="text-xl font-semibold text-gray-800">exus</span>
      </a>

      <!-- Botón y avatar -->
      <div class="mt-2 sm:mt-0 sm:flex md:order-2 items-center gap-4">
        <div class="relative group">
          <div
            class="w-10 h-10 rounded-full cursor-pointer ring-2 ring-gray-300 flex items-center justify-center"
          >
            <i class="fa-light fa-user-bounty-hunter"></i>
          </div>
          <div
            class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
          >
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Perfil</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >Configuración</a
            >
            <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-red-100"
              >Cerrar sesión</a
            >
          </div>
        </div>
      </div>

      <!-- Menú lateral original -->
      <div class="">
        <!-- <ul
          class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium"
        >
          <li>
            <RouterLink to="/banco"> Bancos</RouterLink>
          </li>
          <li>
            <RouterLink to="/compartidos">Compartidos</RouterLink>
          </li>
          <li>
            <RouterLink to="/eliminar">Eliminados</RouterLink>
          </li>
        </ul> -->

        <div class="w-full">
          <nav class="flex space-x-2 p-2 rounded-t-lg">
            <RouterLink to="/banco" :class="linkClasses('/banco')"> Bancos </RouterLink>
            <RouterLink to="/compartidos" :class="linkClasses('/compartidos/compartido')">
              Compartidos
            </RouterLink>
            <RouterLink to="/eliminar" :class="linkClasses('/eliminar')"> Eliminados </RouterLink>
          </nav>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();

function linkClasses(path: string) {
  const isActive = route.path === path;
  return [
    'px-4 py-2 rounded-t-md transition-all duration-300',
    isActive
      ? 'text-blue-600 font-semibold border-b-2 border-blue-600 bg-white'
      : 'text-gray-600 hover:text-blue-600 hover:bg-white',
  ];
}
</script>
