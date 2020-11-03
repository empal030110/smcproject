//패스워드를 맞추는 프로그램
//1. 패스워드와 아이디를 미리 지정한다(const 사용 추천)
//2. prompt로 패스워드와 아이디를 받는다.
//3.1 만약 맞췄다면 "로그인 되었습니다." 출력
//3.2 만약 틀렸다면 "로그인에 실패하였습니다." 출력
//3.3 만약 아이디가 틀렸다면 "아이디가 틀렸습니다." 출력
//3.4 만약 패스워드가 틀렸다면 "패스워드가 틀렸습니다." 출력

const ID = "empal03"
const PASSWORD = "qweasdzxc12~";
let id = prompt("ID", ["ID"]);
let password = prompt("password", ["password"]);
if(id === ID && password === PASSWORD){
    alert("로그인 되었습니다.");
}
else if(id !== ID && password === PASSWORD){
    alert("아이디가 틀렸습니다");
}
else if(id === ID && password !== PASSWORD){
    alert("패스워드가 틀렸습니다.");
}
else{
    alert("로그인에 실패하였습니다.");
}