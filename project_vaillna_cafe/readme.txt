바닐라 자바스크립트를 이용한 상태관리 카페 페이지

1단계
에스프레소 메뉴판 만들기
돔조작 및 이벤트 핸들링으로 메뉴 관리하기

에스프레소 메뉴에 새로운 메뉴를 확인버튼 또는 엔터키 입력으로 추가
-메뉴가 추가되고나면 input은 빈 값으로 초기화
-사용자 입력값이 빈 값이라면 추가되지 않는다.

메뉴의 수정 보튼을 눌러 메뉴 이름을 수정할 수 있다.
-메뉴 수정시 브라우저에서 제공하는 prompt인터페이스를 활용한다.

메뉴 삭제 버튼을 이용하여 메뉴를 삭제할 수 있다.
-메뉴 수정시 브라우저에서 제공하는 comfirm인터페이스를 활용한다.

총 메뉴 갯수를 count하여 상단에 보여준다.
-추가되는 메뉴의 아래 마크업은 '<ul id="espresso-menu-list" class="mt-3 pl-0"> </ul> 안에 삽입해야한다.

<li class="menu=list-item d-flex items-center py-2">
    <span class="w-100 pl-2 menu-name">${name}</span>
    <button
    type="button"
    class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
    >
    수정
    </button>
    <button
    type="button"
    class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
    >
    삭제
    <button>
</li>

2단계
여러개의 메뉴판 만들기

3단계 
웹서버에 api요청

각 단계별로 리팩토링을 하는 과정도 곁들여볼 것

하나의 앱을 완성해보는 단계라고 생각해본다.

-> 자바스크립트를 잘 사용하기 위한 과정이라고 생각한다. 
