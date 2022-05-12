class Empleado{
    public nombre:string;
    private telefono:string;
    constructor(nombre:string, telefono:string){
        this.nombre =nombre;
        this.telefono = telefono;
    }

    getNombre(){
        return this.nombre;
    }
    getTelefono(){
        return this.telefono;
    }
    setNombre(nombre:string){
        this.nombre = nombre;
    }
    setTelefono(telefono:string){
        this.telefono = telefono;
    }
}

let emp :Empleado = new Empleado("JAvier","4731196870");
console.log(emp.getNombre());
console.log(emp.getTelefono());