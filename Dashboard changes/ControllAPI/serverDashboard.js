const {response,request} = require("express");
const cors = require('cors');
const express = require("express"); //requerimos el modulo de express
const mongo = require("mongodb").MongoClient;
let ObjectId = require('mongodb').ObjectId;

//npm init // crea proyecto node js
//npm install express
//npm instal mongodb
//npm cors
//npm xhrs

const app = express();//definimos una app de express
app.use(express.json());//Middleware

app.use(cors({
    origin: "*",
    origin: 'http://127.0.0.1:5500',
 methods: "GET,PUT,POST,DELETE"
}));


const url = "mongodb://localhost:27017";

let db
mongo.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},
(err, client)=>{
    if(err){
        console.log(err);
        return;
    }
    db = client.db("cursoJavaScript");
    console.log("conectado a cursoJavaScript");
    autores = db.collection("Autores");
    usuarios = db.collection("Usuarios");
})

//METODOS PARA AUTORES
app.get("/autores",(request,response)=>{
    autores.find().toArray((err,items)=>{
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({autores:items});
    });
});

app.get("/autores/:id",(request,response)=>{
    console.log("Se ejecuto la ruta autores");
    let autorId = request.params.id;
    autores.findOne({_id:ObjectId(autorId)},function(err,autor){
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({autor:autor});
    });
});

app.post("/autores",(request,response)=>{
    autores.insertOne(
        {   
            Nombre: request.body.Nombre,
            Correo: request.body.Correo,
            Puesto: request.body.Puesto,
            Puesto2: request.body.Puesto2,
            Status: request.body.Status,
            FechaIngreso: request.body.FechaIngreso,
            Foto : request.body.Foto
   
       },
       (err,items)=>{
        if(err){
            console.log(err);
            response.sendStatus(500);
            return;
        }
        return response.status(200).json({autores:items});
    })
});
//Fin de Autores

//Usuarios
app.get("/usuarios",(request,response)=>{
    usuarios.find().toArray((err,items)=>{
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({usuarios:items});
    });
});
//


app.listen(3006, ()=>{
    console.log("Escuchando en el puerto 3006...");
})

