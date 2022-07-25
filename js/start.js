const main = document.querySelector("#main"); // id=main이라는 css 선택자를 가진 엘레먼트를 할당받음
const qna = document.querySelector("#qna");

function begin() { // 사작하기 버튼이 눌렸을 때 함수가 실행 되어야함
    main.style.WebkitAnimation = "fadeOut 1s"; // 1초 동안 사라짐
    main.style.animation = "fadeOut 1s"; 
    
    setTimeout(() => { // setTimeout => 지정한 기간의 시간이 만료되면 특정 기능을 실행하는 함수
        qna.style.WebkitAnimation = "fadeIn 1s"; // 1초 동안 등장함
        qna.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none"; // 끔
            qna.style.display = "block"; // 킴
        }, 450)
    }, 450) // 1000은 1000 밀리 세컨드고 이는 1초이다.
}