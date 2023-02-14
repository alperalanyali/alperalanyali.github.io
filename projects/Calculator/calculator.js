var numberOnScreen = document.getElementById('numberOnScreen');
console.log(numberOnScreen.value);
let firstNum;
let secondNum;
let result;
let numAfterResult;
let operatorChosen = "";
let isFirstNumberEntered = false;
let isSecondNumEntered = false;


function getNumber(num){
  debugger;
  if(isFirstNumberEntered === false ){
    if(firstNum === undefined){
      firstNum = num;
      showResScreen(firstNum);
    } else {
      firstNum = firstNum + num
      showResScreen(firstNum);
    }

  } else if (isSecondNumEntered == false){
    if(secondNum === undefined){
      secondNum = num;

    } else {
        secondNum = secondNum + num;
    }
      showResScreen(secondNum);
  } else {
      if(numAfterResult === undefined){
         numAfterResult =  num;
      } else {
        numAfterResult = numAfterResult + num
      }
      //numAfterResult =  num;
    showResScreen(numAfterResult);
  }
}

function clearAll(){
  debugger;
  firstNum = undefined;
  secondNum = undefined;
  result = undefined;
  operatorChosen = "";
  numAfterResult = undefined;
  isFirstNumberEntered = false;
  isSecondNumEntered = false;
  showResScreen(0);

}

function getOperand(operator){
  debugger;
  if(isFirstNumberEntered === false && firstNum !== undefined){
    isFirstNumberEntered = true;
  }

 operatorChosen = operator;

}


function doCalculation(){
  debugger;
  if(isSecondNumEntered == false && secondNum !== undefined){
    isSecondNumEntered = true;
  }
  if(firstNum !== undefined && secondNum !== undefined && result === undefined){
    if(operatorChosen === "+" ){
        result = parseInt(firstNum) + parseInt(secondNum);
        //numberOnScreen.innerText = result;
        showResScreen(result);
    } else if (operatorChosen === "-" ){
      result = firstNum - secondNum;
      showResScreen(result);
    } else if (operatorChosen === "*" ){
      result = firstNum * secondNum;
      showResScreen(result);
    } else if(operatorChosen == "/"){
      result = firstNum / secondNum;
      showResScreen(result);
    } else if (operatorChosen ==="%" ){
      result = parseInt(firstNum) % parseInt(secondNum);
      showResScreen(result);
    }
  } else if (result !== undefined){
    if(operatorChosen === "+" ){
        result = parseInt(result) + parseInt(numAfterResult);
        //numberOnScreen.innerText = result;
        showResScreen(result);
    } else if (operatorChosen === "-" ){
      result = parseInt(result) - parseInt(numAfterResult);
      showResScreen(result);
    } else if (operatorChosen === "*" ){
      result = parseInt(result) * parseInt(numAfterResult);
      showResScreen(result);
    } else if(operatorChosen == "/"){
      result = parseInt(result) / parseInt(numAfterResult);
      showResScreen(result);
    } else if (operatorChosen ==="%" ){
      result = parseInt(result) % parseInt(numAfterResult);
      showResScreen(result);
    }
    numAfterResult = undefined;
  }
}

function changeSign(){
  debugger;
  numberOnScreen.innerText = -numberOnScreen.innerText;
}

function addDot(){
  if(isFirstNumberEntered == false ){
    firstNum = firstNum +".";
    showResScreen(firstNum);
  } else {
    secondNum = secondNum +".";
    showResScreen(secondNum);
  }
}
function showResScreen(screen){
  numberOnScreen.innerText = screen;
}
