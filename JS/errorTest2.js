let json = "{ bad json}";

try{
    let user = JSON.parse(json);
    alert( user.name);

} catch(a){
    alert("데이터에 에러가 있어 재요청을 시도합니다.");
    alert(o.name);
    alert(o.message);
}
