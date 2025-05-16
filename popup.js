let valor = 0;
const button = document.getElementById("agregar");
const panel =document.getElementById("contador");

button.addEventListener("click", ()=>{
    valor++;
    panel.innerHTML=valor;
})