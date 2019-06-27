// input에 숫자를 입력하고 + 버튼을 클릭하면 결과값에 입력한 숫자 만큼 더해지고 input의 값은 없어진다.
// input에 숫자를 입력하고 - 버튼을 클릭하면 결과값에 입력한 숫자 만큼 빼지고 input의 값은 없어진다.
// input에 유효하지 않은 숫자를 입력하고 +, - 버튼을 클릭하면 동작은 무되되고 input의 값은 없어진다.
// undo를 클릭하면 이전 값으로 돌아간다.
// redo를 클릭하면 이후 값으로 되돌린다.
// undo와 redo는 동작이 가능할때만 활성화 상태가 된다.

var result = document.getElementById('value');

var undoButton = document.getElementById('undoButton'),
  addButton = document.getElementById('addButton'),
  subButton = document.getElementById('subButton'),
  redoButton = document.getElementById('redoButton'),
  inputValue = document.getElementById('inputbox');

// =====  ===== //
function onload() {
  undoButton.onclick = handleClick;
  addButton.onclick = handleClick;
  subButton.onclick = handleClick;
  redoButton.onclick = handleClick;
}
var num1,num2;
var stack1 = new Array();
var stack2 = new Array();

// ===== handlClick ===== //
function handleClick(event) {
  num1 = parseInt(result.innerHTML);
  num2 = parseInt(inputValue.value);
  
  switch (event.target.id) {
    // === Undo === //
    case 'undoButton': 
       var popNum = stack1.pop();
       stack2.push(num1);
       result.innerHTML = popNum;
       redoButton.disabled = false;
       if(stack1.length==0){
         undoButton.disabled = true;
       }
      break;

    // === Add === //
    case 'addButton':
        if(Number.isInteger(num2)){
          inputValue.value = null;
          
          stack1.push(result.innerHTML);
          result.innerHTML = num1+num2;
          undoButton.disabled = false;
          redoButton.disabled = true;
      }else{
        document.getElementById('inputbox').value = null;
      }
      break;

    // === Sub === //
    case 'subButton':
        if(Number.isInteger(num2)){
          inputValue.value = null;
          
          stack1.push(result.innerHTML);
          result.innerHTML = num1-num2;
          undoButton.disabled = false;
          redoButton.disabled = false;
          
        }else{
          document.getElementById('inputbox').value = null;
        }  
      break;

    // === Redo === //
    case 'redoButton':
        var popNum = stack2.pop();
        stack1.push(num1);
        result.innerHTML = popNum;
        undoButton.disabled = false;
        if(stack2.length==0){
          redoButton.disabled=true;
        }
        
      break;

    default:
      return;
  } // switch
} // func
