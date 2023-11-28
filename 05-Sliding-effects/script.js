$("#btn2").hide();
$("#btn1").click(() => {
  $("div").slideUp(1000, doneFun);
});

$("#btn2").click(() => {
  $("div").slideDown("normal", doneFun);
});

$("div").click(function () {
  $(this).slideToggle();
});

function doneFun() {
  $("#btn1").toggle();
  $("#btn2").toggle();
}
