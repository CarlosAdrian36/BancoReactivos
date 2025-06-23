<template>
  <section class="bg-gray-100">
    <div
      class="mx-auto grid max-w-6xl grid-cols-1 gap-3 p-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
    >
      <!--Bancos-->
      <BancoCard v-for="banco in bancos" :key="banco.bancoId" :banco="banco" />
    </div>
  </section>
</template>
<script setup lang="ts">
import BancoCard from './BancoCard.vue';
import type { BancoReactivo } from '../interface/banco.interface';
interface Props {
  bancos: BancoReactivo[];
}
defineProps<Props>();
</script>
