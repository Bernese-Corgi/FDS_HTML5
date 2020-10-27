var section = $('.board section');
var tab = $('.board .tab a');
// tab이라고 썼지만 사실 a태그를 찾는것
var item = $('.board li');
// 이런 클래스들 선택해주세요

item.addClass('icon-dot-circled');
// 클래스를 추가해주세요


// 클릭 이벤트를 쓰면 
tab.click(function (e) {
  // 기본이벤트(href)를 취소
  e.preventDefault();
  //클릭이 발생하면 클래스를 지우고 ?, 수가 적어서 괜찮은거지 수가 많아지면 좋지 않은 함수
  section.removeClass('is-active');
  //자신의 부모의 부모를 찾아서 'is-active'라는 클래스를 추가해주세요
  $(this).parent().parent().addClass('is-active');
});