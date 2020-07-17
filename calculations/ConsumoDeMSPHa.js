// Calculo de Consumo de Materia Seca por Hectarea (en Kg)

export default function ConsumoMSPorHectarea(MSDisponible, MSRemanente) {
  const res = MSDisponible - MSRemanente
  return res;
}
