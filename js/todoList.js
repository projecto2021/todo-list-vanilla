import { setTarea } from "./funciones.js";
const d = document;
window.navigator


export const TodoList = ()=>{
const $formulario = d.getElementById("formulario"),
  $input = d.getElementById("input-id"),
  $listaTarea = d.getElementById("lista-tareas"),
  //$template = d.getElementById('template').content,
  
  fragment = d.createDocumentFragment();
  let tareas = {
    34456788900:{
      id:5553255555434,
      texto:"tarea #1",
      estado:false
      
    },
    499939394949:{
      id:1223354646546,
      texto:"Tarea # 2",
      estado:false
    }
  }
  
  $formulario.addEventListener('submit',e=>{
    e.preventDefault();
    setTarea(e)
    
   
  })

}