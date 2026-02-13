$(function () {
  $(".faq-list").on("click", ".faq-item", function () {

    const acc = $(this).closest(".faq-acc");

    $(".faq-acc").not(acc)
      .removeClass("is-open")
      .find(".faq-panel").stop(true,true).slideUp(200);

    acc.toggleClass("is-open")
        .find(".faq-panel").stop(true,true).slideToggle(200);

  });
});

