// 1 toString
const Fecha = new Date().toString()
console.log(Fecha);

// 2 toDateString
const fecha = new Date().toDateString()
console.log(fecha);

// 3 toLocaleString
const fls = new Date().toLocaleString()
console.log(fls);

// 4 toLocaleDateString
const fechas = new Date().toLocaleDateString()
console.log(fechas);

const ffecha = new Date().toLocaleDateString('en-US')
console.log(ffecha);

const fechaActual = new Date()
const opciones = {weekday:'long', year:'numeric', month:'short', day:'numeric'}
console.log(fechaActual.toLocaleDateString('ar-EG', opciones));
console.log(fechaActual.toLocaleDateString('en-US', opciones));
console.log(fechaActual.toLocaleDateString('es-SV', opciones));

// 5 toGMTString
const fechaGMT = new Date().toGMTString()
console.log(fechaGMT);

// 6 toGMTString
const fechaUTCS = new Date().toUTCString()
console.log(fechaUTCS);

// 5 toGMTString
const fechaISOS = new Date().toISOString()
console.log(fechaISOS);
