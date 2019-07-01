/* Manejo del DOM */
const name = "Alicia";
const lastName = "Díaz";

const containerDatos = document.getElementById('container_datos');
document.getElementById('clickme').addEventListener('click', () => {
  containerDatos.innerHTML = `<h2 class="text_datos"> 
                                Tu nombre es: ${name}
                              </h2>
                              <h2 class="text_datos"> 
                                Tu Apellido es: ${lastName}
                              </h2>
                              <img src="./9BE.jpg" alt="planta del pie" class="photo">`
})

const datos = STUDENTS.student;
for(let i = 0; i < datos.length; i++){
  console.log(datos[i].name);
  console.log(datos[i].lastName);
  console.log(datos[i].hobby);
}