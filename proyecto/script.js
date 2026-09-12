function calcularPromedio() {
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);

    const promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 6){
        document.getElementById("resultado").textContent = "Promedio: " + promedio.toFixed(2) + " - Aprobado";
    } else {
        document.getElementById("resultado").textContent = "Promedio: " + promedio.toFixed(2) + " - Desaprobado";
    }
}
