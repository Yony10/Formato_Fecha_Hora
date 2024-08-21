//accediendo a las horas
const hrs = new Date()
const horas = hrs.getHours()
console.log(horas);

//accediendo a los minutos
const min = new Date()
const minut = min.getMinutes()
console.log(minut);

//accediendo a los segundos
const seg = new Date()
const segundos = seg.getSeconds()
console.log(segundos);


// ejercicio 1 Mostrar fecha con los dias de la semana en español con el siguiente formato 
// Lunes 19 de agosto del 2024

let fecha = new Date()
console.log(fecha.getDay());
console.log(fecha.getDate());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());

let diaSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
console.log(diaSemana[fecha.getDay()]);

let mesAnyo = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septeimbe','Octubre','Noviembre','Diciembre']
console.log(mesAnyo[fecha.getMonth()]);

console.log(`${diaSemana[fecha.getDay()]}, ${fecha.getDay()} de ${mesAnyo[fecha.getMonth()]} del ${fecha.getFullYear()} `);

//Ejemplo 2 Mostrar la hora actual en formato 03:15:15
let hora = new Date()
console.log(hora.toLocaleTimeString());
