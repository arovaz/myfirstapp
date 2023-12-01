document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Adicione aqui a lógica de autenticação com o backend
  // Exemplo: Verifique se o e-mail e a senha são válidos

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Verificação de exemplo
  if (email === "logistica@sete-sta.com.br" && password === "Log@2023") {
    alert("Autenticação bem-sucedida!");
    window.location.href = "inicial.html"; // Redireciona para a tela inicial
  } else {
    alert("Falha na autenticação. Verifique o e-mail e a senha.");
  }
});

document.getElementById("forgotPassword").addEventListener("click", function () {
  // Adicione aqui a lógica para o reset de senha
  alert("Redirecionando para a página de redefinição de senha...");
});
