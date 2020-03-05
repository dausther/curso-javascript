
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

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if(!pesoEhValido) {
    msg = 'Peso é inválido!';
    console.log(msg);
    pesoEhValido = false;
    tdImc.textContent = msg;
    paciente.classList.add('paciente-invalido');
  }

  if(!alturaEhValida) {
    msg = 'Altura é inválida!';
    console.log(msg);
    alturaEhValida = false;
    tdImc.textContent = msg;
    paciente.classList.add('paciente-invalido');
  }

  if (pesoEhValido && alturaEhValida) {
      var imc = calculaImc(peso, altura);
      tdImc.textContent = imc;
  }
}

function calculaImc(peso, altura){
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}
