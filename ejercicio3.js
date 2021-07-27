// Ciclo For
let ejemploFor = document.getElementById("ejemploFor");

const emergente = () => {
  for (let i = 0; i < 3; i++) {
    //alert("Activa las ventanas emergentes para detener este SPAM");
    window.open(
      "https://informaticos.co/wp-content/uploads/2013/10/virus-de-computador1-1.jpg"
    );
  }
};

ejemploFor.onclick = function () {
  emergente();
};
