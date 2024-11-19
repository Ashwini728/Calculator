const display = document.getElementById("display")
function displayyy(input){
     display.value += input;
}
function clearr(){
  display.value ="";
}

function calculate(){
    try{
        display.value= eval(display.value);
    }
      catch(error){

        display.value="Error"
      }
}