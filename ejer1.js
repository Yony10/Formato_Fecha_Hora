const fecha = new Date(2012, 1, 20, 3, 12)
const opciones = {year:'numeric', month:'short', day:'numeric', hour: 'numeric',  minute: 'numeric', hour12: true}
console.log(fecha.toLocaleString('en-US', opciones));