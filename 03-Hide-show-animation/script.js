console.log($("div").first());

const value = "<h1>Dilyana Stoyanova</h1>";

$("div").first().html(value);

$("div").last().text(value);

$("div").click((e) => {
  $(e.target).text("Ready");
  $(e.target).hide("slow");
});

$("button").click(() => {
  $("div").show("fast");
  $("h1").show(4000);
});
