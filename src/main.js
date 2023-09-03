// Theme
$("#toggle-mode").on("click", () => {
  $("html").toggleClass("dark");
  $("#toggle-mode").toggleClass("bx-moon bx-sun rotate-180");
});

// Navbar
// $("main").scroll(function () {
//   $("section").each(function () {
//     let scroll = $("main").scrollTop();
//     let offset = $(this).offset().top;
//     let height = $(this).outerHeight();
//     let id = $(this).attr("id");
//     if (scroll > offset && scroll < offset + height) {
//       $("#nav-right li i").each(function () {
//         $(this).removeClass("border-b-4 text-cyan-600 dark:text-gray-200");
//         $("#nav-right li a[href*=" + id + "] i").addClass(
//           "border-b-4 text-cyan-600 dark:text-gray-200 dark:hover:text-gray-200 "
//         );
//       });
//     }
//   });
// });

$("main").scroll(function () {
  $("section").each(function () {
    const sectionTop = $(this).offset().top;
    let id = $(this).attr("id");
    if ($("main").scrollTop() > sectionTop) {
      $("#nav-right li i").each(function () {
        $(this).removeClass("border-b-4 text-cyan-600 dark:text-gray-200");
        $("#nav-right li a[href*=" + id + "] i").addClass(
          "border-b-4 text-cyan-600 dark:text-gray-200 dark:hover:text-gray-200 "
        );
      });
    }
  });
});

// Tab about me
$("#tab-buttons li").click(function () {
  const id = $(this).data("id");
  if (!$(this).hasClass("text-cyan-600")) {
    $("#tab-buttons li")
      .removeClass("text-cyan-600 border-cyan-600")
      .addClass("border-transparent");
    $(this)
      .addClass("text-cyan-600 border-cyan-600")
      .removeClass("border-transparent");

    $(".tab-content").fadeOut(100);
    setTimeout(function () {
      $(`[data-content=${id}]`).fadeIn(100);
    }, 200);
  }
});

// Modal
$(".open-modal").click(function () {
  let dataModal = $(this).next(".modal");
  dataModal.data("modal") == "message"
    ? dataModal.fadeIn().css("display", "grid")
    : dataModal.fadeIn();

  $(".close-modal").click(function () {
    let modal = $(this).closest(".modal");
    modal.fadeOut();
  });
});
