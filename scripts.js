// var secretNumber = 43;
// var numberTries = 0;
//
// function looseSmall() {
//     numberTries++;
//     document.write("Liczba zbyt mała, zgaduj dalej!")
// }
// function looseBig() {
//     numberTries++;
//     document.write("Liczba zbyt duża, zgaduj dalej!")
// }
//
// var number = document.getElementById("number");
// var button = document.getElementById("button").onclick = function check() {
//     if(number.value < secretNumber) {
//         // document.write("Liczba zbyt mała, spróbuj ponownie")
//         // numberTries++;
//         looseSmall();
//
//     } else if(number.value > secretNumber) {
//         // document.write("Liczba zbyt duża, spróbuj ponownie")
//         // numberTries++;
//         looseBig();
//
//     } else {
//         document.write("Nie podałeś liczby, spróbuj ponownie");
//     }
//
// };
//
// function win() {
//     numberTries++;
//     document.write("Trafiłes, liczba prób wyniosła " + numberTries);
// }








// var secretNumber = 23;
// var numberMany = 0;
//
// while(pickNumber != secretNumber) {
//
//     var pickNumber = prompt("Zgadnij liczbę z przedziału 1-100","");
//
//     if (pickNumber < secretNumber) {
//         alert("Liczba zbyt mała, spróbuj ponownie!")
//     } else if (pickNumber > secretNumber) {
//         alert("Liczba zbyt duża, spróbuj ponownie!")
//     } else {
//         alert("TRAFIONE BRAWO!")
//     }
//     numberMany++;
// }
//
// document.write("Ilość prób wynosi " + numberMany);





var secretNumber = 23;
var selectNumber;

for (var i = 0; i<10; i++) {
    var pickNumber = prompt("Podaj liczbę z przedziału od 1-100","");

    if (pickNumber < secretNumber) {
        alert("Liczba zbyt mała, spróbuj ponownie");
    } else if (pickNumber > secretNumber) {
        alert("Liczba zbyt duża, spróbuj ponownie");
    } else {
        alert("TRAFIONE, BRAWO !!!");
    }
}

document.write("Ilość prób wyniosła " + i);