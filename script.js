const formulario = document.querySelector("#formulario");

//crear el evento
formulario.addEventListener( "submit", validarFormulario )


//mis funciones
function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#Nombre").value
    const apellido = document.querySelector("#Apellido").value
    const apodo = document.querySelector("#Apodo").value

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `Nombre: ${nombre} Apellido: ${apellido} Apodo: ${apodo}`
}

function limpiar (){

}
