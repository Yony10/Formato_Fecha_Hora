const fecha1 = new Date('2023-08-21')
const fecha2 = new Date('2024-08-21')

function diferencia(f1, f2) {
    const difMili = f2 - f1;

    const milisegundosDia= 1000 * 60 * 60 * 24;
    const diferencia = Math.ceil(difMili/milisegundosDia);

    return diferencia;
}

const diferenciaDias = diferencia (fecha1, fecha2);
console.log(`La diferencia en dias es de ${diferenciaDias} dias`);
