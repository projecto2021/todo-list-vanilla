import { setTarea } from "./funciones.js";
const d = document;

export const TodoList = () => {
  const $formulario = d.getElementById("formulario"),
    $input = d.getElementById("input-id"),
    $listaTarea = d.getElementById("lista-tareas"),
    //$template = d.getElementById('template').content,

    fragment = d.createDocumentFragment();
    const data = {
      122334556:{
        id:1234454656,
        texto:"Tarea #1",
        estado:false,
      },
      1223934556:{
        id:12344054656,
        texto:"Tarea #2",
        estado:false,
      }
    }

    console.log(data)

  $formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    setTarea(e);
    $formulario.reset();
    $input.focus();
  });
};
