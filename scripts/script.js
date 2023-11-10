$("#btn").click(function (e) {
  const tarefa = $("#tarefa").val();

  if (tarefa == "") {
    alert("Digite uma tarefa válida !!!");
  } else {
    $("#lista").append(`
        <li>
        <span class="material-symbols-outlined check"> check_circle </span>

        <span class="text">${tarefa}</span>
        <span class="material-symbols-outlined close">delete</span>
      </li>
        `);

    $("#tarefa").val("");
  }

  $(".close").each(function () {
    $(this).click(function () {
      $(this).parent().remove();
    });
  });

  $("#lista li").click(function () {
    $(this).find(".check").css("color", "#349223");
    $(this).find(".text").css("textDecoration", "line-through");
  });
});
