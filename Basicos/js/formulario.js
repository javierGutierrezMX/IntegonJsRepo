function CreateUser(n, e, i) {
    newUser = {
        Nombre : n != "" ? n : (alert("Nombre esta vacio")),
        Edad : (typeof e === 'number' && !isNaN(e)) || e > 0   ? e : alert("Edad debe ser un numero y/o  mayor a cero"),
        Ingreso : (typeof i === 'number' && !isNaN(i)) || i > 0 ? i :  alert("Ingreso debe ser un numero"),
    }
}