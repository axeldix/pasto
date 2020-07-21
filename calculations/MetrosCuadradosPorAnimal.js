// Calculo de Metros Cuadrados por Animal

export default function MetrosCuadradosPorAnimal(superficieParcela, cantidadAnimales) {
  const res = (superficieParcela / cantidadAnimales) * 10000
  return res;
}
