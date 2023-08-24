{
  [
    ["Instagram", "https://www.instagram.com/irhmdhn.me/", "bxl-instagram"],
    [
      "LinkedIn",
      "https://www.linkedin.com/in/ihwannudin-rahmadhani-097776288/",
      "bxl-linkedin",
    ],
    ["GitHub", "https://github.com/irhmdhn", "bxl-github"],
    ["Email", "mailto:irhmdhn.me@gmail.com", "bx-envelope"],
  ].map(([name, url, icon]) =>
    $("#nav-left ul").append(
      "<li class='group w-16 sm:w-auto'><a href=" +
        url +
        " target='_blank' class='w-fit sm:w-auto hover:text-cyan-600 dark:hover:text-cyan-500  sm:dark:hover:text-cyan-600 cursor-pointer flex flex-col items-center sm:flex-row-reverse mx-auto transition'><i class='bx " +
        icon +
        " p-2 rounded text-2xl'></i><span class='transition-all ease-in-out hidden sm:block sm:scale-0 text-md sm:absolute sm:opacity-0 sm:left-0 group-hover:opacity-100 group-hover:scale-100 group-hover:left-20 lg:group-hover:left-[5.5rem]'>" +
        name +
        "</span></a></li>"
    )
  );
}
{
  [
    ["Beranda", "home", "bx-home-alt"],
    ["Saya", "about-me", "bx-wink-smile"],
    ["Portofolio", "portfolio", "bx-network-chart"],
    ["Kontak", "contact", "bx-user-pin"],
  ].map(([name, url, icon]) =>
    $("#nav-right ul").append(
      "<li class='group w-16 sm:w-auto'><a href='#" +
        url +
        "' class='w-fit sm:w-auto hover:text-cyan-600 dark:hover:text-cyan-500  sm:dark:hover:text-cyan-500 cursor-pointer flex flex-col items-center sm:flex-row-reverse mx-auto transition'><i class='bx " +
        icon +
        " p-2 rounded text-2xl'></i><span class='transition-all ease-in-out hidden sm:block sm:scale-0 text-md sm:absolute sm:opacity-0 sm:right-0 group-hover:opacity-100 group-hover:scale-100 group-hover:right-20 lg:group-hover:right-[5.5rem]'>" +
        name +
        "</span></a></li>"
    )
  );
}

// $('#nav-menu').on('click',()=>{
//     $('#nav-menu').toggleClass('bx-menu-alt-right bx-x')
//     $('#navigation').toggleClass('translate-x-48')
// })

$("#toggle-mode").on("click", () => {
  $("html").toggleClass("dark");
  $("#toggle-mode").toggleClass("bx-moon bx-sun");
  $("#toggle-mode").toggleClass("rotate-180");
});
