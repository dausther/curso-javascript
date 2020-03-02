var pacientes = document.querySelectorAll('.paciente');

for(i = 0; i < pacientes.length; i++){

  var paciente = pacientes[i];
  var pesoEhValido = true;
  var alturaEhValida = true;
  var msg = '';

  var tdPeso = paciente.querySelector('.info-peso');
  var tdAltura = paciente.querySelector('.info-altura');
  var tdImc = paciente.querySelector('.info-imc');

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  if(peso <= 0 || peso >= 1000) {
    msg = 'Peso é inválido!';
    console.log(msg);
    pesoEhValido = false;
    tdImc.textContent = msg;
    paciente.classList.add('paciente-invalido');
  }

  if(altura <= 0 || altura >= 5.0) {
    msg = 'Altura é inválida!';
    console.log(msg);
    alturaEhValida = false;
    tdImc.textContent = msg;
    paciente.classList.add('paciente-invalido');
  }

  if(pesoEhValido && alturaEhValida){
    tdImc.textContent = calculaImc(peso, altura);
  } else {
    tdImc.textContent = "Altura e/ou peso inválidos!";
  }

  function calculaImc(peso, altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
  }
}
