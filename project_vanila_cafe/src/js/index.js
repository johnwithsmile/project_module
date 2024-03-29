// step 1 요구사항 구현을 위한 전략
// 무조건 개발을 시작하기 보다는 어떻게 할지 고민해보면서 계획을 하는게 좋음

// todo메뉴 추가
// 메뉴의 이름을 입력받고 엔터키입력으로 추가한다.
// 추가되는 메뉴의 마크업은 '<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>' 안에 삽입해야한다.
// 총 메뉴 갯수를 count하여 상단에 보여준다.
// 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
// 사용자 입력값이 빈 값이라면 추갸되지 않는다.

function App() {
  // form태그가 자동으로 전송되는걸 막아준다
  document
    .querySelector("#espresso-menu-form")
    .addEventListener("submit", (e) => {
      e.preventDefault;
    });

  // 메뉴의 이름을 입력받는건
  document
    .querySelector("#espresso-menu-name")
    .addEventListener("keyp ress", (e) => {
      // console.log(e.key) // e.key로 이벤트값을 받아올 수 있게됨, 근데 한번에 하나만 받게되므로 한번에 해야하므로 enter키일떄로 바꾼다
      if (e.key === "Enter") {
        console.log(document.querySelector("espresso-menu-name").value);
      }
    });
}

App();

// todo메뉴 수정
// 메뉴의 수정 버튼클릭 이벤트를 받고, 메뉴를 수정하는 모달창이 뜬다.
// 모달창에서 신규메뉴명을 입력받고, 확인버튼을 누르면 메뉴가 수정된다.

// todo메뉴 삭제
// 메뉴 삭제 버튼 클릭 이벤트를 받고, 메뉴 삭제 컴펌 모달창이 뜬다.
// 메뉴 확인 버튼을 클릭하면 메뉴가 삭제된다.
// 총 메뉴 갯수를 count하여 상단에 보여준다.
