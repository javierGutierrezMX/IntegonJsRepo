class Humanos{
    constructor(sexo, pais,nombre, apellido){
        this.Nombre = nombre;
        this.Apellido = apellido;
        this.Pais = pais;
        this.Sexo = sexo;
    }

    SeeInfo(humano) {
        console.log(`Ha nacido ${humano.Nombre + " "+ humano.Apellido}, su sexo es ${humano.Sexo} y es de ${humano.Pais}`);
    }
}

let nuevoHumano = new Humanos("Masculino", "México", "Javier","Gutierrez");
nuevoHumano.SeeInfo(nuevoHumano);