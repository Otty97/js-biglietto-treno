var kilometri = parseInt(prompt('Inserisci Km totali del viaggio:'));
var eta = parseInt(prompt('Inserisci la tua età:'));
var prezzoLordo = (kilometri * 0.21);
prezzoLordo = prezzoLordo.toFixed(2);

if (!isNaN(kilometri) && !isNaN(eta) && (kilometri != 0) ){

  if (eta > 65) {
    var prezzoNetto = parseFloat(prezzoLordo - (prezzoLordo * 0,4));
    prezzoNetto = prezzoNetto.toFixed(2);
    document.getElementById('finalPrice').innerHTML = 'Il prezzo del biglietto sarebbe stato: ' + prezzoLordo + '€! Ma rientri nella scontistica del 40% quindi dovrai pagare solo: ' + prezzoNetto +'€';
  }

  else if (eta < 18){
    var prezzoNetto = parseFloat(prezzoLordo - (prezzoLordo * 0,2));
    prezzoNetto = prezzoNetto.toFixed(2);
    document.getElementById('finalPrice').innerHTML = 'Il prezzo del biglietto sarebbe stato: ' + prezzoLordo + '€! Ma verrà applicato lo sconto studente quindi dovrai pagare solo: ' + prezzoNetto +'€';
  }

  else {
    document.getElementById('finalPrice').innerHTML = 'Non rientri in nessuna scontistica quindi il prezzo è di: ' + prezzoLordo +'€';
  }
} 

 else {
  document.getElementById('finalPrice').innerHTML = 'Dati inseriti errati. Aggiornare la pagina e reinserirli corretti. Grazie!'
}
