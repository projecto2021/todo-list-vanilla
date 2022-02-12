export const setTarea = (e) => {
  const $input = document.getElementById('input-id')
   if ($input.value.trim() === "") {
     console.log("esta vacio");
     return
   }
   console.log("diste click")
};
