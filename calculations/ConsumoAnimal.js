// Calculo de Metros Cuadrados por Animal

export default function ConsumoAnimal(ConsumoDeMateriaSecaPorHa, superficieParcela, cantidadAnimales) {
  const res = (ConsumoDeMateriaSecaPorHa * superficieParcela) / cantidadAnimales
  return res;
}
