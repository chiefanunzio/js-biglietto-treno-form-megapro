var generaBtn = document.getElementById('gen');
var annullaBtn = document.getElementById('ann');
var costo = 0.21;
var costoBiglietto = 0;

generaBtn.addEventListener('click', function(){
    var name = document.getElementById('name-ip').value;
    var distanza = parseInt(document.getElementById('number-ip').value);
    var eta = document.getElementById('select-ip').value;

    if (name !== '' && distanza > 0 && eta !== '') {
      console.log('apposto');
    } else {
      console.log('ngul');
    }

    costoBiglietto = costo * distana;

     if (eta == 1){
       console.log('minorenne');
     }else if(eta == 3 ){
       console.log('over');
     }
  });

// annullaBtn.addEventListener('click'),
//   function() {
//
//   });
