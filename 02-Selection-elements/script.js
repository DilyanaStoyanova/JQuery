console.log($("div"));
$("div").html("Hello");
console.log($(".div2"));
console.log($("#div3"));
console.log($(".div2, #div3"));

const $ele1 = $("div");
console.log($ele1);

$("div").html("Hello 2");

const $ele2 = $(".div2");
console.log($ele2);

const $ele3 = $("#div3");
console.log($ele3);

const $ele4 = $(".div2, #div3");
console.log($ele4);
