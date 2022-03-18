/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/
let pariDispari=prompt("Vuoi giocare pari o dispari?");
let numeroInserito=Number(prompt("Inserisci un numero da 1 a 5"));
console.log(numeroInserito);
let min=1;
let max=5;

function getRandomInt(min, max) {
    min = Math.ceil();
    max = Math.floor();
    return Math.floor(Math.random() * (max - min) + min);
  }
  let somma=numeroInserito+Math.floor(Math.random() * (max - min) + min);;
  console.log(somma);

  function numeroPariDispari(somma){
    if(somma % 2==0){
        return"pari"
    }else{
       
        return "dispari";
    }
} console.log(numeroPariDispari(somma))

if(numeroPariDispari(pariDispari)=="pari"){
    document.getElementById("numero").innerHTML=`${pariDispari}L'utente ha vinto`;
}else{
    document.getElementById("numero").innerHTML=` L'utente ha perso`;
}