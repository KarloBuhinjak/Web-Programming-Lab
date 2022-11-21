var x = "Pero Perić";
function vratiIme(ime) {
 var x = ime;
 function f() { return x; }
 return f;
}
var y = vratiIme("Hrvoje Horvat"); //function f
var z = vratiIme()(); //undefined

let ime = "";
(() => {
  ime = "Ivo Ivic"
  console.log("IME: ", ime);
})();