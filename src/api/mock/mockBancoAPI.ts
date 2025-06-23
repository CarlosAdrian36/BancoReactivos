import type { BancoReactivo } from '@/Banco/interface/banco.interface';

// Simulación de respuesta de API
const bancosMock: BancoReactivo[] = [
  {
    bancoId: 1,
    titulo: 'Matemáticas I',
    descripcion: 'Banco de reactivos para examen de Matemáticas I',
    esCompartido: true,
  },
  {
    bancoId: 2,
    titulo: 'Física Básica',
    descripcion: 'Preguntas de física nivel básico',
    esCompartido: false,
  },
  {
    bancoId: 3,
    titulo: 'Historia Universal',
    descripcion: 'Banco de reactivos sobre historia mundial',
    esCompartido: true,
  },
  {
    bancoId: 4,
    titulo: 'Química Avanzada',
    descripcion: 'Reactivos de química para nivel avanzado',
    esCompartido: false,
  },
];

// Simula un `fetch` a la API con delay
export const fetchBancos = (): Promise<BancoReactivo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(bancosMock);
    }, 500); // 500ms de retraso para simular red
  });
};
