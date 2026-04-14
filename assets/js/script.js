$(function () {
  alert('이 페이지는 개인포트폴리오 사이트입니다.');

  $(".faq-item").on("click", function () {

    let item  = $(this).closest(".faq-acc");
    let isOpen = item.hasClass("is-open");

    if (isOpen) {
      item.removeClass("is-open");
    } else {
      $(".faq-acc").removeClass("is-open");
      item.addClass("is-open");
    }

  });

});
