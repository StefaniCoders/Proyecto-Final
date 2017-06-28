var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;

}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    my_student = {  name: "",
                    tech_points: "",
                    hse_points: ""};

    var nombre = prompt("Ingrese su nombre: ");
    var puntos_tecnicos = prompt("Puntos tecnicos: ");
    var puntos_hse = prompt("Puntos hse: ");

    // SE VERIFICA QUE LOS 3 DATOS HAYAN SIDO INGRESADOS CORRECTAMENTE, DE LO CONTRARIO NO SE INSERTAN EN LA
    // LISTA DE ESTUDIANTES Y SE MUESTRA UN MENSAJE DE ALERTA

    if (nombre == null || nombre == "" || puntos_tecnicos == null || puntos_tecnicos == "" || puntos_hse == null || puntos_hse == "")
    {
        my_student.name = "Sin definir";
        my_student.tech_points = "Sin definir";
        my_student.hse_points = "Sin definir";

        alert("Datos ingresados erróneamente");
    } else
    {
        puntos_tecnicos = parseInt(puntos_tecnicos);
        puntos_hse = parseInt(puntos_hse);

        my_student.name = nombre;
        my_student.tech_points = puntos_tecnicos;
        my_student.hse_points = puntos_hse;
        estudiantes.push(my_student);
    }

    return my_student;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante

    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.name + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.tech_points + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.hse_points + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var global_result = "";
    var i;
    for (i = 0; i<estudiantes.length; i++) {
        global_result += mostrar(estudiantes[i]);
    }
    return global_result;
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    var tmp_students = [];
    var comp;
    for (var i = 0; i<estudiantes.length; i++) {
        comp = nombre.toLowerCase().localeCompare(estudiantes[i].name.toLowerCase());
        if( comp == 0 )
        {
            tmp_students.push(estudiantes[i]);
        }
    }
    return tmp_students;
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    estudiantes.sort(function(a, b) {
        return b.tech_points - a.tech_points;
    });

    return estudiantes;

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    estudiantes.sort(function(a, b) {
        return b.hse_points - a.hse_points;
    });

    return estudiantes;
}
