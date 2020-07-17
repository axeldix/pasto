export default function Promedio(arr) {
  const suma = arr.reduce((acc, red) => acc+=red)
  return suma / arr.length
}
