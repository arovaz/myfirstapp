function submitForm() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
  
    var outputText = "Nome: " + name + "<br>Telefone: " + phone;
  
    document.getElementById('outputText').innerHTML = outputText;
    document.getElementById('outputBox').classList.remove('hidden');
  }
  