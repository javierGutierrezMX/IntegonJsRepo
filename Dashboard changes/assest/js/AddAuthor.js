function LoadAutores() {
    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: 'http://localhost:3006/autores',
        success: function (data) {
            GetAuthors(data.autores);
        }
    });
}

function GetAuthors(autoresArray){
   let list = document.getElementById('MainList');
    list.innerHTML="";
    autoresArray.forEach(element => {
        let tempAutor= new Autor(element.Nombre,element.Foto,element.Correo,element.Puesto,element.Puesto2,element.FechaIngreso,element.Status);
        AddAhutorToTable(list,tempAutor);
   });
    
}

function AddAutor(request) {
    $.ajax({
        method: 'POST',
        dataType: "json",
        contentType: "application/json", 
        url: 'http://localhost:3006/autores',
        headers: { 'Access-Control-Allow-Origin': '*' },
        data: JSON.stringify({
            "Nombre": request[0],
            "Correo": request[1],
            "Puesto": request[2],
            "Puesto2": request[3],
            "Status": request[4],
            "FechaIngreso": request[5],
            "Foto": request[6]
        }),
        success: function (data) {
            LoadAutores();
            $("#clearBTN").click();
        }
    });
}

function AddAhutorToTable(list ,autor) {
    

    let newtr = document.createElement("tr");

    let newtd1 = document.createElement("td");
    let newdiv = document.createElement("div");
    newdiv.className="d-flex px-2 py-1";
    let newdiv2 = document.createElement("div");
    let newimg = document.createElement("img");
    newimg.src = autor.Foto;
    newimg.className="avatar avatar-sm me-3";
    newimg.alt="user1";
    newdiv2.appendChild(newimg);
    let newdiv3 = document.createElement("div");
    newdiv3.className = "d-flex flex-column justify-content-center";
    let newh6 = document.createElement("h6");
    newh6.className ="mb-0 text-sm";
    newh6.innerText = autor.Nombre;
    let newp =document.createElement("p");
    newp.className = "text-xs text-secondary mb-0";
    newp.innerText = autor.Correo;
    newdiv3.appendChild(newh6);
    newdiv3.appendChild(newp);
    newdiv.appendChild(newdiv2);
    newdiv.appendChild(newdiv3);
    newtd1.appendChild(newdiv);

    let newtd2 = document.createElement("td");
    let newp2 = document.createElement("p");
    newp2.className="text-xs font-weight-bold mb-0";
    newp2.innerText = autor.Puesto
    let newp3 = document.createElement("p");
    newp3.className="text-xs text-secondary mb-0";
    newp3.innerText = autor.PuestoTranslate
    newtd2.appendChild(newp2);
    newtd2.appendChild(newp3);

    
    let newtd3 = document.createElement("td");
    newtd3.className="align-middle text-center text-sm";
    let newspan = document.createElement("span");
    newspan.className=autor.Status === "ONLINE" ? "badge badge-sm bg-gradient-success": "badge badge-sm bg-gradient-secondary";
    newspan.innerText = autor.Status;
    newtd3.appendChild(newspan);


  

    let newtd4 = document.createElement("td");
    newtd4.className="align-middle text-center";
    let newspan2 = document.createElement("span");
    newspan2.className="text-secondary text-xs font-weight-bold";
    newspan2.innerText = autor.FechaIngreso;
    newtd4.appendChild(newspan2);
    let newtd5 = document.createElement("td");
    newtd5.className="align-middle";
    let newa = document.createElement("a");
    newa.href="javascript:;" ;
    newa.className="text-secondary font-weight-bold text-xs" ;
    // newa.data-toggle="tooltip" ;
    // newa.data-original-title="Edit user";
    newa.innerText="Edit";
    newtd5.appendChild(newa);
    newtr.appendChild(newtd1);
    newtr.appendChild(newtd2);
    newtr.appendChild(newtd3);
    newtr.appendChild(newtd4);
    newtr.appendChild(newtd5);
    list.appendChild(newtr);
    ; 

}


