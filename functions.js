
function count(id) {
  document.omerscalc.result.value+=id;
}

// Clears calculator input screen
function Clear() {
	var x = document.getElementById('omerscalc'); 
  document.x.result.value=+;
}

// Calculates input values
function calc() {
  try {
    var input = eval(document.omerscalc.result.value);
    document.omerscalc.result.value=input;
  } catch(err){
      document.omerscalc.result.value="Error";
    }
}