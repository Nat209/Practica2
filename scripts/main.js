import { validateString, vAvg, checkAvg } from "./validate.js";
import { addStudent, paintCard, modalAlert, addProfe } from './paint.js';

const btnAgregar = document.getElementById('btnAgregar');
const btnMostrar = document.getElementById('btnMostrar');
const select = document.getElementById('opcion');


const labelProfesion = document.querySelector('.labelProfesion');
const profesion = document.getElementById('profesion');
const labelPromedio = document.querySelector('.labelPromedio');
const promedio = document.getElementById('promedio');

const op = document.getElementById('opcion').value;

select.onchange = () => {
    let opcion = select.value;

    if (opcion === "estudiante") {
        promedio.style.display = 'inline-block';
        labelPromedio.style.display = 'inline-block';
        profesion.style.display = 'none';
        labelProfesion.style.display = 'none';
    }
    if (opcion === "profesor") {
        profesion.style.display = 'inline-block';
        labelProfesion.style.display = 'inline-block'
        promedio.style.display = 'none';
        labelPromedio.style.display = 'none';
    }
}

/* Generar eventos
1. Colocando el metodo(evento) en el atrivuto onClick, onmouseover, onmouseour...
2. Por propiedad onclick, on..
3. Madiante el addeven...
*/

btnAgregar.onclick = function () {
    const form = document.getElementById('form');
    const name = document.getElementById('nombre').value;
    const lastName = document.getElementById('apellido').value;

    const op = document.getElementById('opcion').value;

    //console.log(name,lastName, avg, op);
    if (op === "estudiante") {
        const avg = parseFloat(document.getElementById('promedio').value);
        if (validateString(name) && validateString(lastName) && op != 0) {
            if (!isNaN(avg) && vAvg(avg)) {
                addStudent(name, lastName, avg);

            } else {
                document.querySelector('#promedio').value = "";
                modalAlert('Promedio Invalido');
            }
        } else {
            modalAlert('Datos Invalidos, revisar datos');
        }
    } if (op === "profesor") {
        const profesion = document.getElementById('profesion').value;
        if (validateString(name) && validateString(lastName) && op != 0) {

            addProfe(name, lastName, profesion);

        } else {
            modalAlert('Datos Invalidos, revisar datos');

        }
    }
    // resetear formulario
    form.reset()
    profesion.style.display = 'none';
    labelProfesion.style.display = 'none';
    promedio.style.display = 'none';
    labelPromedio.style.display = 'none';
}

btnMostrar.addEventListener("click", function () {
    if (op === "estudiante") {
        paintCard("ESTUDIANTE");
    } else {
        paintCard("PROFESOR");
    }
    
});