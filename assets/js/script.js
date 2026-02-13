$(function () {

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
