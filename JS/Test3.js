/*
let x;
for(x = 1; x <= 12; x++){
    console.log(x + `월`);
}
*/

/*2번 문제
let x;
for(x = 1; x <= 12; x++){
    if(x % 2 ===0){
        console.log(x + `월`);
    }
}
*/

/*3번 문제
let a = 1;
let b = 1;
let inputNumber = prompt("number", [""]) * 1;
while(b < inputNumber){
    let temp = a + b;
    a = b;
    b = temp;
    console.log(temp);
    
}
*/

/*4번 문제
const A = 1000;
const B = 70;
const C = 100;
let count;
for(count = 1; A+B * count > C * count; count++){

}
console.log(count);
*/

/*
const A = 5;
const B = 3;
let sugar = 16;
let bagCount = 0;
while(true){
    if(sugar % 5=== 0){
        bagCount = sugar / 5;
        break;
    }
    else if(sugar <= 0){
        bagCount = -1;
        break;
    }
    sugar -= 3;
    bagCount++;
}
*/

/*
const TARGET_STRING = "AAABBBCCC";
let result = "";
let nowCharacter = "";
let nowCharacterCount = 0;

for (const char of TARGET_STRING) {
    console.log(char);
    if (!nowCharacter) {
        console.log(`Refresh ${char}`)
        nowCharacter = char;
        nowCharacterCount ++;
    } else {
        if (nowCharacter === char) {
            nowCharacterCount ++;
        }
        else {
            if (nowCharacterCount === 1) {
                result += `${nowCharacter}`;    
            }
            else {
                result += `${nowCharacterCount}${nowCharacter}`;
            }
            nowCharacter = char;
            nowCharacterCount = 1;
        }
    }
}
if (nowCharacterCount === 1) {
    result += `${nowCharacter}`;    
}
else {
    result += `${nowCharacterCount}${nowCharacter}`;
}

console.log(result);
*/