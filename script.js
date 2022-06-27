var realmSpan = document.querySelector("#realm");
var tvaSpan = document.querySelector("#tva");


function quanta() {
    var element = document.querySelector("#realm-1, #realm-2");
    realmSpan.innerText--;
    tvaSpan.innerText++;
    element.remove();
}
function mania() {
    var element = document.querySelector("#realm-2, #realm-1");
    realmSpan.innerText--;
    element.remove();
}
function hero() {
    newname.innerText = "Kevin Bacon";
}
