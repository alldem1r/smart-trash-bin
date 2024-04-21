window.addEventListener("scroll", function () {
  var navBar = document.getElementById("navBar");
  var navItems = navBar.querySelectorAll(".nav-item");
  var scrollPercentage = (window.scrollY / document.body.scrollHeight) * 100;
  var navBarHeight = parseInt(getComputedStyle(navBar).height);

  if (scrollPercentage > 2) {
    navBar.style.height = "50px";
    navBar.style.fontSize = "16px";
    navBar.style.padding = "0px 50px";
    navBar.style.left = "50px";
    navItems.forEach(function (item) {
      item.style.paddingInlineStart = "3%";
    });
  } else {
    navBar.style.height = navBarHeight + "px";
    navBar.style.fontSize = "20px";
    navBar.style.padding = "10px 20px";
    navBar.style.left = "0";
    navItems.forEach(function (item) {
      item.style.paddingInlineStart = "2%";
    });
  }
});

