$("#toggle-mode").on("click", () => {
  $("html").toggleClass("dark");
  $("#toggle-mode").toggleClass("bx-moon bx-sun rotate-180");
});

$("main").scroll(function () {
  $("section").each(function () {
    let scroll = $("main").scrollTop();
    let offset = $(this).offset().top;
    let height = $(this).outerHeight();
    let id = $(this).attr("id");
    if (scroll > offset && scroll < offset + height) {
      $("#nav-right li i").each(function () {
        $(this).removeClass("border-b-4 text-cyan-600 dark:text-gray-200");
        $("#nav-right li a[href*=" + id + "] i").addClass(
          "border-b-4 text-cyan-600 dark:text-gray-200 dark:hover:text-gray-200 "
        );
      });
    }
  });
});

$("#tab li").click(function () {
  const id = $(this).data("id");
  if (!$(this).hasClass("text-cyan-600")) {
    $("#tab li")
      .removeClass("text-cyan-600 border-cyan-600")
      .addClass("border-transparent");
    $(this)
      .addClass("text-cyan-600 border-cyan-600")
      .removeClass("border-transparent");

    $(".tab-content").hide();
    $(`[data-content=${id}]`).fadeIn();
  }
});

$("#open").click(function () {
  $("#modalOverlay").show().addClass("modal-open");
  $("#close").click(function () {
    var modal = $("#modalOverlay");
    modal.removeClass("modal-open");
    setTimeout(function () {
      modal.hide();
    }, 200);
  });
});
