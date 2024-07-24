document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data_inicio = document.querySelector("#data_inicio").value;
    var data_final = document.querySelector("#data_final").value;
    var horario_inicio = document.querySelector("#horario_inicio").value;
    var horario_final = document.querySelector("#horario_final").value;
    var finalidade = document.querySelector("#finalidade").value;

    // Check if end date is greater than or equal to start date
    if (data_final < data_inicio) {
      alert("A data final deve ser maior ou igual à data inicial.");
      return; // Stop execution if the condition is not met
    }

    // Check if end time is greater than start time
    if (horario_final <= horario_inicio) {
      alert("O horário final deve ser maior que o horário inicial.");
      return; // Stop execution if the condition is not met
    }

    // Get the current date and time
    var currentDate = new Date();
    var currentDateString = currentDate.toISOString().split('T')[0];
    var currentTimeString = currentDate.toTimeString().split(' ')[0];

    // Check if the selected date and time are greater than the current date and time
    if (data_inicio < currentDateString || (data_inicio === currentDateString && horario_inicio <= currentTimeString)) {
      alert("Não é possível realizar reservas em datas ou horários anteriores ao momento atual.");
      return; // Stop execution if the condition is not met
    }

    const urlParams = new URLSearchParams(window.location.search);
    const idespaço_fisico = urlParams.get('id');
    const idusuario = sessionStorage.getItem('idusuario');

    axios
      .post("https://reservar.glitch.me/reservar", {
        data_inicio: data_inicio,
        data_final: data_final,
        horario_inicio: horario_inicio,
        horario_final: horario_final,
        finalidade: finalidade,
        idespaço_fisico: idespaço_fisico,
        idusuario: idusuario
      })
      .then(function (response) {
        console.log(response);
        alert("Reserva feita com sucesso!");
        window.location.href = "minhas_reservas.html";
      })
      .catch(function (error) {
        console.log(error);
        alert("Ocorreu um erro ao fazer a reserva.");
      });
  });
});
