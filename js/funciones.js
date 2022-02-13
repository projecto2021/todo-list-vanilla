"use strict";
export const setTarea = (e) => {
  const $input = document.getElementById("input-id"),
    $fragment = document.createDocumentFragment(),
    $listaTarea = document.getElementById("listar-tareas"),
    $template = document.getElementById("template").content;
  if ($input.value.trim() === "") {
    console.log("esta vacio");
    return;
  }
  let data = {
    122334556: {
      id: 1234454656,
      texto: "Tarea #1",
      estado: false,
    },
    1223934556: {
      id: 12344054656,
      texto: "Tarea #2",
      estado: false,
    },
  };
  //console.log(data)
  let tarea = {
    id: Date.now(),
    texto: $input.value,
    estado: false,
  };
  tarea[data.id] = data;
  //console.log(data)

  
  const pintarTareas = () => {
    Object.values(data).forEach((el) => {
      const clone = $template.cloneNode(true);
      clone.querySelector("p").textContent = tarea.texto;
      $fragment.appendChild(clone);
    });
    $listaTarea.innerHTML = ""
    $listaTarea.appendChild($fragment)
  };
  pintarTareas()
};
