var global = 2;
function submitForm() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    global = global + 1;
    
    var teste1 = "S";
    var teste2 = 2;
    var resultado = teste1 + teste2;
    var loucura = arthurSomaNumeros(15, 9, 23);
    var outputText = "Nome: " + name + "<br>Telefone: " + phone + resultado + loucura;
    document.getElementById('outputText').innerHTML = outputText;
    document.getElementById('outputBox').classList.remove('hidden');
    console.log("O pai tá on!");

  }
  
  function arthurSomaNumeros (a,b,c){
    global = global + 1;
    var resultado = a + b + c;
    return resultado;
  }