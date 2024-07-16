$(document).ready(function () {
  $("#btn-continuar").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#formulario").offset().top,
      },
      1000
    );
  });

  $("#telefone").mask("(00) 00000-0000");

  $("#formulario").submit(function (e) {
    e.preventDefault();

    let nome = $("#nome").val();
    let sobrenome = $("#sobrenome").val();
    let email = $("#email").val();
    let telefone = $("#telefone").val();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        telefone: telefone,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao enviar os dados.");
        }
        return response.json();
      })
      .then((data) => {
        alert("Sucesso: " + JSON.stringify(data));
        $("#formulario")[0].reset();
      })
      .catch((error) => {
        alert("Erro: " + error.message);
      });
  });
});
