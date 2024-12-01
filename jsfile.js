/*Navigation Code */

let fabshow = document.querySelector(".fabshow");
let fabcancel = document.querySelector(".fabcancel");
let mynav = document.querySelector(".mynav");

fabshow.addEventListener("click", function () {
  mynav.style.display = "block";
});

fabcancel.addEventListener("click", function () {
  mynav.style.display = "none";
});
