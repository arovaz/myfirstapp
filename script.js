document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Adicione aqui a lógica de autenticação com o backend
  // Exemplo: Verifique se o e-mail e a senha são válidos

  alert("Autenticação bem-sucedida!");
});

document.getElementById("forgotPassword").addEventListener("click", function () {
  // Adicione aqui a lógica para o reset de senha
  alert("Redirecionando para a página de redefinição de senha...");
});
