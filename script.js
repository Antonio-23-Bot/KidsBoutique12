document.getElementById("formCuenta").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombreCuenta").value;
  const tipo = document.getElementById("tipoCuenta").value;
  const monto = parseFloat(document.getElementById("montoCuenta").value);

  const cuenta = { nombre, tipo, monto };

  let cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];
  cuentas.push(cuenta);
  localStorage.setItem("cuentas", JSON.stringify(cuentas));

  alert("Cuenta agregada correctamente");
  this.reset();
});

function verEstadoFinanciero() {
  window.location.href = "estado-financiero.html";
}
