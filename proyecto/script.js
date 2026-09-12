function calcularPromedio() {
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);

    const promedio = (nota1 + nota2 + nota3) / 3;

    document.getElementById("resultado").textContent =
        "El promedio es: " + promedio.toFixed(2);
}
