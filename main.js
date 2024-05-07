<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Formulário de Contato</title>
<script>
function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    // Validar nome
    if (nome === "" || !nome.match(/^[A-Za-z\s]+$/) || nome.length > 100) {
        alert("Por favor, insira um nome válido (máximo 100 caracteres, apenas letras e espaços).");
        return false;
    }

    // Validar e-mail
    if (email === "" || !email.match(/\S+@\S+\.\S+/)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    // Validar telefone
    if (telefone === "" || !telefone.match(/^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/)) {
        alert("Por favor, insira um número de telefone válido no formato (00) 12345-6789.");
        return false;
    }

    return true;
}
</script>
</head>
<body>

<h2>Formulário de Contato</h2>

<form action="/submit_form.php" method="post" onsubmit="return validarFormulario()">
  <div>
    <label for="nome">Nome:</label><br>
    <input type="text" id="nome" name="nome" maxlength="100" required><br>
  </div>
  <div>
    <label for="email">E-mail:</label><br>
    <input type="email" id="email" name="email" required><br>
  </div>
  <div>
    <label for="telefone">Telefone:</label><br>
    <input type="tel" id="telefone" name="telefone" pattern="\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}" placeholder="(00) 12345-6789" required><br>
  </div>
  <div>
    <input type="submit" value="Enviar">
  </div>
</form>

</body>
</html>
