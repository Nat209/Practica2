import { checkAvg } from "./validate.js";


const cardE = document.getElementById('cardsEstudiantes');
const cardP = document.getElementById('cardseProfesores');
const students = [];
const profes = [];



const paintCard = (typ) => {
    typ = typ.toUpperCase();
    //console.log(typ);
    const fragment = document.createDocumentFragment();
    const templateStudent = document.querySelector('#templateEstudiante').content;
    const templateProfesor = document.querySelector('#templateProfesor').content;
    if (typ === "ESTUDIANTE") {

        for (let i of students) {
            const cloneTemp = templateStudent.cloneNode(true);

            cloneTemp.querySelector(".title-card").innerHTML = "Datos del  <i>Estudiante</i>";
            cloneTemp.querySelector('.data-card').innerHTML = `Nombre: ${i.nom.toUpperCase()} Apellidos: ${i.ap.toUpperCase()}`;

            cloneTemp.querySelector('.text-promedio').innerHTML = `Promedio es: ${i.prom}`;
            cloneTemp.querySelector('.text-aprobado').innerHTML = ` ${checkAvg(i.prom)}`;
            fragment.appendChild(cloneTemp);
            
        }
    }else if (typ === "PROFESOR") {
        for (let i of profes) {
            const cloneTemp = templateProfesor.cloneNode(true);

            cloneTemp.querySelector(".title-card").innerHTML = "Datos del  <i>Profesor</i>";
            cloneTemp.querySelector('.data-card').innerHTML = `Nombre: ${i.nom.toUpperCase()} Apellidos: ${i.ap.toUpperCase()}`;
            cloneTemp.querySelector('.text-profesion').innerHTML = `Profesión es: ${i.pro.toUpperCase()}`;
            fragment.appendChild(cloneTemp);
            

        }

        
    }
    cardE.appendChild(fragment);
    cardP.appendChild(fragment);
};
const addStudent = (name, lastName, avg) => {
    //Objeto literal de JS
    let student = {
        nom: name,
        ap: lastName,
        prom: avg
    }
    students.push(student);
    modalAlert('Se agrego estudiante');
};

const addProfe = (name, lastName, profesion) => {
    //Objeto literal de JS
    let profe = {
        nom: name,
        ap: lastName,
        pro: profesion
    }
    profes.push(profe);
    //console.log(profes);
    modalAlert('Se agrego Profesor')
}
const modalAlert = (cad) => {
    const alerta = document.createElement('div');
    const texto = document.createElement('p');
    const img = document.createElement('img');
    img.src = "./assets/img/xmark-solid.svg";
    img.className = "close";
    texto.setAttribute("class", "textAlerta");
    alerta.setAttribute("class", "alerta");
    alerta.setAttribute("id", "alerta");
    texto.innerHTML = `<strong>${cad}</strong>`;
    alerta.appendChild(img);
    alerta.appendChild(texto);
    document.body.appendChild(alerta);
    img.onclick = function () {
        document.getElementById('alerta').remove();
    }
}

export { paintCard, addStudent, modalAlert, addProfe }
