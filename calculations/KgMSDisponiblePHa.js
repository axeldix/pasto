import Promedio from './Promedio.js';


export default function KilosDeMSDisponiblePorHectarea(
  arrMateriaVerdeDisponible,
  areaCuadrante,
  porcentajeMateriaSeca,
) {
  const res =
    (( Promedio(arrMateriaVerdeDisponible) / areaCuadrante) *
    porcentajeMateriaSeca *
    100);
    console.log(res);
  return res;
}
