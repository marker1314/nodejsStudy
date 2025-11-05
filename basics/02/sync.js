// 순서대로 실행하기  (결과 비교: 02\results\sync.js)
function displayA(){
    console.log(`A`);
}
function displayB(callback){
    setTimeout(()=>{ 
        console.log(`B`);
        callback();
    },2000)//2초 후에 실행  

}
function displayC(){
    console.log(`C`);
}
displayA();//소괄호 쓰는거 잊지 마셈
displayB(displayC);


//timer함수라고 지정된 시간 이후에 실행되는 함수가 있음__B에 적용을 했음
//A,C는 바로 됐지만 B는 2초 후에
//이것이 자바스크립트의 가장 큰 특징 : 빨리 끝낼 수 있는거 먼저 한다.
//[***비동기처리***]
//그래서 좀 느린 애가 있더라도 얘 먼저 하고 난 후 다른 애를 해라 라고 수정해주는게 비동기처리
//비동기 처리==> 함수들이 서로 어떤 순서대로 실행하라고 정해주는거

//[비동기 처리 예제]
//B가 좀 느리지만 B먼저 하고 C하도록 하겠음 _콜백 함수를 사용해서
//**콜백함수 */
//displayB(displayC); 이런식으로 함수 안에 매개변수로 들어감