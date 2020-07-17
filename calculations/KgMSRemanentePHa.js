import Promedio from './Promedio.js';

export default function KilosDeMSRemanentePorHectarea(
  arrMateriaVerdeRemanente,
  areaCuadrante,
  porcentajeMateriaSeca,
) {
  const res =
    (Promedio(arrMateriaVerdeRemanente) / areaCuadrante) *
    porcentajeMateriaSeca *
    100;
  return res;
}
