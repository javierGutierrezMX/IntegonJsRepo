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
    alumnos = db.collection("alumnos");
    autores = db.collection("Autores");
})

app.get("/demo",(req,res)=>{
    console.log("Escuchando en el puerto 3005...");
    res.status(200).json({ok:true});
});

app.get("/alumnos",(request,response)=>{
    alumnos.find().toArray((err,items)=>{
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({alumnos:items});
    });
});

app.get("/alumnos/:id",(request,response)=>{
    let alumnoId = request.params.id;
    console.log(alumnoId);
    alumnos.findOne({_id:ObjectId(alumnoId)},function(err,alumno){
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({alumno:alumno});
    });
});

app.post("/alumnos",(request,response)=>{
    alumnos.insertOne(
        {   
           nombre : request.body.nombre,
           apellido: request.body.apellido,
           Ciudad: request.body.ciudad
   
       },
       (err,items)=>{
        if(err){
            console.log(err);
            response.sendStatus(500);
            return;
        }
        return response.status(200).json({alumnos:items});
    })
});



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
    console.log("ENapi");
    console.log(request.body);
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


app.listen(3005, ()=>{
    console.log("Escuchando en el puerto 3005...");
})
