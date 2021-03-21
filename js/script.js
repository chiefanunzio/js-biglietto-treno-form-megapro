var generaBtn = document.getElementById('gen');
var annullaBtn = document.getElementById('ann');
var costo = 0.21;
var costoBiglietto = 0;

generaBtn.addEventListener('click', function () {
  var distanza = parseInt(document.getElementById('number-ip').value);
  var name = document.getElementById('name-ip').value;
  var eta = document.getElementById('select-ip').value;

  if (name !== '' && distanza > 0 ) {
    console.log('apposto');
  } else {
    console.log('ngul');
  }

  costoBiglietto = costo * distanza;

  if (eta == 1) {
    
    costoBiglietto = costoBiglietto *80/100;
  } else if (eta == 3) {
    
    costoBiglietto = costoBiglietto *60/100;
  }

  console.log(costoBiglietto);
});

// annullaBtn.addEventListener('click'),
//   function() {
//
//   });