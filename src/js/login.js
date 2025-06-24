function logar() {
  var login = document.getElementById('login').value;
  var senha = document.getElementById('senha').value;

  if (login === "joão" && senha === "123456") {
    location.href = "area.html";} 

  else {
    alert("Usuário ou senha incorretos");}
  }