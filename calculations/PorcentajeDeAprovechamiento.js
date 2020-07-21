// Calculo de PorcentajeDeAprovechamiento

export default function PorcentajeDeAprovechamiento(ConsumoDeMateriaSecaPorHa, MateriaSecaDisponiblePorHa) {
  const res = (ConsumoDeMateriaSecaPorHa / MateriaSecaDisponiblePorHa) * 100
  return res;
}
