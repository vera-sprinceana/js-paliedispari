//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma



let parola= prompt("inserisci una parola");
let sptParola=parola.split("");
console.log(sptParola);
let parolaDivisa=sptParola.reverse();
console.log(parolaDivisa);
let parolaInvertita=parolaDivisa.join("");
console.log(parolaInvertita);

if(parola == parolaInvertita){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  function parolaPalindroma(str){
    let strInversa = str.split('').reverse().join('');  
    return strInversa;
  }

//document.getElementById("parola").innerHTML=parolaPalindroma;