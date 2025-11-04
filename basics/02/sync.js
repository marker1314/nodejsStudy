// 순서대로 실행하기  (결과 비교: 02\results\sync.js)
function displayA(){
    console.log('A');
}

function displayB(callback){ //매개변수가 콜백함수
    setTimeout(()=>{ //시간지연 함수
        console.log('B');
        callback(); //Callback 함수 : 함수안에다가 연결해서 지정 -> B다음에 C를 시행해라
    },2000);
}

function displayC(){
    console.log('C');
}

displayA();
displayB(displayC); 


