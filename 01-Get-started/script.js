$("div").html();

$("div").html("Dilyana Stoyanova");

$("div")
  .on("click", () => {
    $("div").html("Dilyana Stoyanova");
  })
  .html("Click me!");
