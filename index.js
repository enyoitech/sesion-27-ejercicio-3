import { empleados } from "./empleados.js";

/**
 * aqui accedemos al document.
 * utilizamos el selector 'getElementById' el cual recibe el id del nodo o elemento
 * del document que queremos accesar.
 * y  utilizamos el metodo addEventListener() el cual sirve para escuchar y recibe 2 argumentos
 * 1er argumento es el nombre del evento que pondremos a escuchar
 * 2do argumento es una expresion funcion anonima o tambien puede recibir una funcion arrow
 */
document
  .getElementById("encryptacion-form")
  .addEventListener("submit", function (event) {
    /**
     * (event)  hace referencia al evento que se captura tambien es habitual usar (e)
     * event.preventDefault() se utiliza para evitar que el evento se ejecute por default
     *al cargar la pagina evitando que se envie el formulario vacio.
     */
    event.preventDefault();
    // hacemos el llamado a nuestra funcion buscarEmpleado()
    buscarMayorSalario();
  });

function buscarMayorSalario() {
  /**
   * guardamos en constantes los nodos que contienen los datos que iremos trabajando y los guardaremos en variables para poder modificarlos,
   * estos nodos contienes los campos en el formulario que se encuentra en la vista,también guardamos el nodo donde mostraremos un mensaje
   * que indique que se encontró al empleado con mayor salario.
   */ 

  const nodoNombre = document.getElementById("nombre");
  const nodoDepartamento = document.getElementById("departamento");
  const nodoSalario = document.getElementById("salario");
  const mensajeResultado = document.getElementById("resultado");

  /**
   * Crearemos un empleado temporal para tener una referencia inicial de comparación, podemos hacerlo de esta forma también asignar un valor de 
   * nuestro arreglo de empleados.
   */

  let empleadoTemp = {
        id: 0,
        name: '',
        salary: 0,
        department: ""
  };
  
  /**
   * para el desarrollo de este requerimiento usaremos un 'forEach()', de esta manera recorreremos el arreglo empleados y validaremos mediante un condicional
   * si el salario del empleado temporal es menor que el empleado de nuestra iteración del arreglo empleados, si esto se cumple asignaremos el empleado con
   * mayor salario a nuestra variable empleado temporal y continuaremos con la iteración, de este modo al final del ciclo tendremos como resultado el empleado 
   * con mayor salario. 
   */

  empleados.forEach((empleado) => {
    if(empleadoTemp.salary < empleado.salary){
      empleadoTemp = empleado;
    }
  });

  /**
   * empleadoTemp tendrá el empleado con mayor salario, solo resta leer sus propiedades y asignar los valores a las variables que contienen los nodos y de esta forma
   * ya mostraríamos en la vista el resultado, adicionalmente modificaremos el mensaje resultado para mostrar un mensaje adicional que indique que se ha encontrado
   * el empleado.  
   */
  
  console.log(empleadoTemp);
  
      nodoNombre.value = empleadoTemp.name;
      nodoDepartamento.value = empleadoTemp.department;
      nodoSalario.value = empleadoTemp.salary;
      mensajeResultado.innerHTML = `<strong>${empleadoTemp.name} es el empleado con mayor salario. </strong>`

  }


