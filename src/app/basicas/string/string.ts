
// Archivo de TS donde realizaremos la logica, para luego evaluarla en el archivo spec
// Realizamos la prueba de esta function
// Nos debe devolver un string junto con el valor del parametro que mandamos
// Colocamos export al principio para poder usarl la function fuera de este archivo
export function mensaje (nombre: string) {
    return `Saludos ${nombre}`
}