class Empleado {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
    getNombre() {
        return this.nombre;
    }
    getTelefono() {
        return this.telefono;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setTelefono(telefono) {
        this.telefono = telefono;
    }
}
let emp = new Empleado("JAvier", "4731196870");
console.log(emp.getNombre());
console.log(emp.getTelefono());
//# sourceMappingURL=oop.js.map