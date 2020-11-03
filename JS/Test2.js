const NUMBER = 21;
let sum = 0;
while(true){
    let inputNumber = prompt("number", [""]);
    sum += inputNumber * 1;
    alert(sum);
    if(sum > NUMBER){
        alert("숫자가 21보다 큽니다.");
        break;
    }
    else if(sum === NUMBER){
        alert("승리하였습니다.");
        break;
    }
}