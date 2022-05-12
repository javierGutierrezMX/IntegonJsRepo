global.XMLHttpRequest = require('xhr2');

function AccesoAPI() {
    const url = "https://swapi.dev/api/planets/60";
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET',url);
    xhttp.setRequestHeader('Accept','application/json');
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            const data = JSON.parse(this.response);
            console.log(JSON.stringify(data));
        }
    }
    xhttp.send();
}
//Node no tiene xml por defecto, hay que descargar npm install xmlhttprequest y poner global.XMLHttpRequest = require('xhr2');
AccesoAPI();



function GetAlumnos() {
    const url = "http://localhost:3005/alumnos";
    let result;
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET',url);
    xhttp.setRequestHeader('Accept','application/json');
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            const data = JSON.parse(this.response);
            result = data;
        }
    }
    xhttp.send();
    return result;
}
// GetAlumnos();