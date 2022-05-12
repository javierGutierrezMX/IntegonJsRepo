function FillTable(mainDiv) {
    const Alumnos = GetAlumnos();
    console.log("Vienen los alumnos");
    console.table(Alumnos);
}