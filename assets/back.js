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
    Result.innerHTML = "Abaixo do peso";
  }
  if (IMC > 18.5 && IMC <= 24.9) {
    Result.className = "normalWeight";
    Result.innerHTML = "Peso normal";
  }
  if (IMC > 25 && IMC <= 29.9) {
    Result.className = "overWeight";
    Result.innerHTML = "Sobrepeso";
  }
  if (IMC > 30 && IMC <= 34.9) {
    Result.className = "obesity";
    Result.innerHTML = "Obesidade Grau 1";
  }
  if (IMC > 35 && IMC <= 39.9) {
    Result.className = "obesity";
    Result.innerHTML = "Obesidade Grau 2";
  }
  if (IMC > 40) {
    Result.className = "obesity";
    Result.innerHTML = "Obesidade Grau 3";
  }
});
