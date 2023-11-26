const value = "<h1>Dilyana Stoyanova</h1>";
$("div").first().html(value);

let counter = 0;
let hiddenEl = 0;
let fader = 0.5;

$("div").click(function (e) {
  $(this).fadeOut(1000, () => {
    counter++;
    hiddenEl++;
    const temp = `<h3>Counter ${counter}</h3>`;
    $(this).html(temp);
    $("button").text(`Show (${hiddenEl})`);
  });
});

$("button").click(() => {
  //   $("div").fadeIn("slow");
  /*$("div").fadeToggle("slow", function () {
    $(this.text("Was toggled"));
  });
  */
  $("div").toggle(1500);
  hiddenEl = 0;
  $("button").text("All showing");
  $("button").fadeTo("slow", fader, () => {
    if (fader === 0.5) {
      fader = 1;
    } else {
      fader = 0.5;
    }
  });
});
