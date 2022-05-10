function onloadUI(){
    let mainDiv =  document.getElementById("contenido");
    console.log("Loading...");

    let btn = document.createElement("input");
    btn.type="button";
    btn.value="Click Me !!!!";

    btn.addEventListener("click", function(){
        console.log("Funcion normal");
    })
    btn.addEventListener("click",()=>{
        console.log("Funcion Arrow");
    })
    console.log(btn.value);
    mainDiv.appendChild(btn);
}