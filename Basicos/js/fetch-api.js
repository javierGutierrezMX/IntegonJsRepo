// const fetch = require('node-fetch');

function demofetchAPI() {
    let url = "http://localhost:3006/usuarios";
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        let autores = data.usuarios;
        console.table(autores);
    })
    .catch(function (error) {
        console.log("Server offline");
    });
    
}
demofetchAPI();
//npm install node-fetch para correr el llamado desde el js