const form = document.querySelector("#calculo");

// Capture function and convert weight and height. Also adds the result div.
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputPeso = document.querySelector("#peso");
  const inputAltura = document.querySelector("#altura");
  const Result = document.querySelector("#result");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  const calculo = peso / (altura * altura);

  const formatValue = (value) => {
    value = calculo.toFixed(1);

    return value;
  };

  const IMC = formatValue(calculo);

  if (IMC <= 18.5) {
    Result.className = "lowWeight";
    Result.innerHTML = `<p>Abaixo do peso <br/> Seu IMC é: ${IMC}</p> <img src="../images/hungry.svg"/>`;
  }
  if (IMC > 18.5 && IMC <= 24.9) {
    Result.className = "normalWeight";
    Result.innerHTML = `<p>Peso normal <br/> Seu IMC é: ${IMC}</p> <img src="../images/heartbeat.svg"/>`
  }
  if (IMC > 25 && IMC <= 29.9) {
    Result.className = "overWeight";
    Result.innerHTML = `<p>Sobrepeso <br/> Seu IMC é: ${IMC}</p> <img src="../images/fat.svg"/>`;
  }
  if (IMC > 30 && IMC <= 34.9) {
    Result.className = "obesity";
    Result.innerHTML = `<p>Obesidade Grau 1 <br/> Seu IMC é: ${IMC}</p> <img src="../images/obestity.svg"/>`;
  }
  if (IMC > 35 && IMC <= 39.9) {
    Result.className = "obesity";
    Result.innerHTML = `<p>Obesidade Grau 2 <br/> Seu IMC é: ${IMC}</p> <img src="../images/obestity.svg"/>`;
  }
  if (IMC > 40) {
    Result.className = "obesity";
    Result.innerHTML = `<p>Obesidade Grau 3 <br/> Seu IMC é: ${IMC}</p> <img src="../images/obestity.svg"/>`;
  }
});
