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

const { data: bancos, isLoading } = useQuery({
  queryKey: ['bancos'],
  queryFn: () => fetchBancos(),
});
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="pl-3 grid h-30 grid-cols-2 place-content-stretch">
      <h1 class="flex items-center flex-1 text-xl font-bold">Lista de Bancos</h1>

      <div class="flex items-center justify-end">
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
      </div>
    </div>
  </div>

  <div v-if="isLoading" class="flex justify-center items-center p-10">
    <svg
      class="w-15 h-15"
      version="1.1"
      id="cog9_1_"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="-13 -13 45 45"
      enable-background="new 0 0 96 96"
      xml:space="preserve"
    >
      <g>
        <circle class="box5631" cx="13" cy="1" r="5" />
        <circle class="box5631" cx="13" cy="1" r="5" />
        <circle class="box5631" cx="25" cy="25" r="5" />
        <circle class="box5631" cx="13" cy="13" r="5" />
        <circle class="box5631" cx="13" cy="13" r="5" />
        <circle class="box5631" cx="25" cy="13" r="5" />
        <circle class="box5631" cx="1" cy="25" r="5" />
        <circle class="box5631" cx="13" cy="25" r="5" />
        <circle class="box5631" cx="25" cy="25" r="5" />
      </g>
    </svg>
  </div>
  <div v-if="!isLoading">
    <RouterView v-slot="{ Component }">
      <component :is="Component" v-if="$route.name === 'crear'" />
      <div v-else class="bg-gray-100">
        <div class="mx-auto grid max-w-4xl grid-cols-1">
          <BancoList :bancos="bancos ?? []" />
        </div>
      </div>
    </RouterView>
  </div>
</template>

<style>
.box5631 {
  transform-origin: 50% 50%;
  fill: currentColor;
}

@keyframes moveBox5631-1 {
  9.0909090909% {
    transform: translate(-12px, 0);
  }

  18.1818181818% {
    transform: translate(0px, 0);
  }

  27.2727272727% {
    transform: translate(0px, 0);
  }

  36.3636363636% {
    transform: translate(12px, 0);
  }

  45.4545454545% {
    transform: translate(12px, 12px);
  }

  54.5454545455% {
    transform: translate(12px, 12px);
  }

  63.6363636364% {
    transform: translate(12px, 12px);
  }

  72.7272727273% {
    transform: translate(12px, 0px);
  }

  81.8181818182% {
    transform: translate(0px, 0px);
  }

  90.9090909091% {
    transform: translate(-12px, 0px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

.box5631:nth-child(1) {
  animation: moveBox5631-1 4s infinite;
}

@keyframes moveBox5631-2 {
  9.0909090909% {
    transform: translate(0, 0);
  }

  18.1818181818% {
    transform: translate(12px, 0);
  }

  27.2727272727% {
    transform: translate(0px, 0);
  }

  36.3636363636% {
    transform: translate(12px, 0);
  }

  45.4545454545% {
    transform: translate(12px, 12px);
  }

  54.5454545455% {
    transform: translate(12px, 12px);
  }

  63.6363636364% {
    transform: translate(12px, 12px);
  }

  72.7272727273% {
    transform: translate(12px, 12px);
  }

  81.8181818182% {
    transform: translate(0px, 12px);
  }

  90.9090909091% {
    transform: translate(0px, 12px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

.box5631:nth-child(2) {
  animation: moveBox5631-2 4s infinite;
}

@keyframes moveBox5631-3 {
  9.0909090909% {
    transform: translate(-12px, 0);
  }

  18.1818181818% {
    transform: translate(-12px, 0);
  }

  27.2727272727% {
    transform: translate(0px, 0);
  }

  36.3636363636% {
    transform: translate(-12px, 0);
  }

  45.4545454545% {
    transform: translate(-12px, 0);
  }

  54.5454545455% {
    transform: translate(-12px, 0);
  }

  63.6363636364% {
    transform: translate(-12px, 0);
  }

  72.7272727273% {
    transform: translate(-12px, 0);
  }

  81.8181818182% {
    transform: translate(-12px, -12px);
  }

  90.9090909091% {
    transform: translate(0px, -12px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

.box5631:nth-child(3) {
  animation: moveBox5631-3 4s infinite;
}

@keyframes moveBox5631-4 {
  9.0909090909% {
    transform: translate(-12px, 0);
  }

  18.1818181818% {
    transform: translate(-12px, 0);
  }

  27.2727272727% {
    transform: translate(-12px, -12px);
  }

  36.3636363636% {
    transform: translate(0px, -12px);
  }

  45.4545454545% {
    transform: translate(0px, 0px);
  }

  54.5454545455% {
    transform: translate(0px, -12px);
  }

  63.6363636364% {
    transform: translate(0px, -12px);
  }

  72.7272727273% {
    transform: translate(0px, -12px);
  }

  81.8181818182% {
    transform: translate(-12px, -12px);
  }

  90.9090909091% {
    transform: translate(-12px, 0px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

.box5631:nth-child(4) {
  animation: moveBox5631-4 4s infinite;
}

@keyframes moveBox5631-5 {
  9.0909090909% {
    transform: translate(0, 0);
  }

  18.1818181818% {
    transform: translate(0, 0);
  }

  27.2727272727% {
    transform: translate(0, 0);
  }

  36.3636363636% {
    transform: translate(12px, 0);
  }

  45.4545454545% {
    transform: translate(12px, 0);
  }

  54.5454545455% {
    transform: translate(12px, 0);
  }

  63.6363636364% {
    transform: translate(12px, 0);
  }

  72.7272727273% {
    transform: translate(12px, 0);
  }

  81.8181818182% {
    transform: translate(12px, -12px);
  }

  90.9090909091% {
    transform: translate(0px, -12px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

.box5631:nth-child(5) {
  animation: moveBox5631-5 4s infinite;
}

@keyframes moveBox5631-6 {
  9.0909090909% {
    transform: translate(0, 0);
  }

  18.1818181818% {
    transform: translate(-12px, 0);
  }

  27.2727272727% {
    transform: translate(-12px, 0);
  }

  36.3636363636% {
    transform: translate(0px, 0);
  }

  45.4545454545% {
    transform: translate(0px, 0);
  }

  54.5454545455% {
    transform: translate(0px, 0);
  }

  63.6363636364% {
    transform: translate(0px, 0);
  }

  72.7272727273% {
    transform: translate(0px, 12px);
  }

  81.8181818182% {
    transform: translate(-12px, 12px);
  }

  90.9090909091% {
    transform: translate(-12px, 0px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

.box5631:nth-child(6) {
  animation: moveBox5631-6 4s infinite;
}

@keyframes moveBox5631-7 {
  9.0909090909% {
    transform: translate(12px, 0);
  }

  18.1818181818% {
    transform: translate(12px, 0);
  }

  27.2727272727% {
    transform: translate(12px, 0);
  }

  36.3636363636% {
    transform: translate(0px, 0);
  }

  45.4545454545% {
    transform: translate(0px, -12px);
  }

  54.5454545455% {
    transform: translate(12px, -12px);
  }

  63.6363636364% {
    transform: translate(0px, -12px);
  }

  72.7272727273% {
    transform: translate(0px, -12px);
  }

  81.8181818182% {
    transform: translate(0px, 0px);
  }

  90.9090909091% {
    transform: translate(12px, 0px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

.box5631:nth-child(7) {
  animation: moveBox5631-7 4s infinite;
}

@keyframes moveBox5631-8 {
  9.0909090909% {
    transform: translate(0, 0);
  }

  18.1818181818% {
    transform: translate(-12px, 0);
  }

  27.2727272727% {
    transform: translate(-12px, -12px);
  }

  36.3636363636% {
    transform: translate(0px, -12px);
  }

  45.4545454545% {
    transform: translate(0px, -12px);
  }

  54.5454545455% {
    transform: translate(0px, -12px);
  }

  63.6363636364% {
    transform: translate(0px, -12px);
  }

  72.7272727273% {
    transform: translate(0px, -12px);
  }

  81.8181818182% {
    transform: translate(12px, -12px);
  }

  90.9090909091% {
    transform: translate(12px, 0px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

.box5631:nth-child(8) {
  animation: moveBox5631-8 4s infinite;
}

@keyframes moveBox5631-9 {
  9.0909090909% {
    transform: translate(-12px, 0);
  }

  18.1818181818% {
    transform: translate(-12px, 0);
  }

  27.2727272727% {
    transform: translate(0px, 0);
  }

  36.3636363636% {
    transform: translate(-12px, 0);
  }

  45.4545454545% {
    transform: translate(0px, 0);
  }

  54.5454545455% {
    transform: translate(0px, 0);
  }

  63.6363636364% {
    transform: translate(-12px, 0);
  }

  72.7272727273% {
    transform: translate(-12px, 0);
  }

  81.8181818182% {
    transform: translate(-24px, 0);
  }

  90.9090909091% {
    transform: translate(-12px, 0);
  }

  100% {
    transform: translate(0px, 0);
  }
}

.box5631:nth-child(9) {
  animation: moveBox5631-9 4s infinite;
}
</style>
