const animatedDivs = document.querySelectorAll('.animate-left, .animate-right');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  animatedDivs.forEach((animatedDiv) => {
    if (isElementInViewport(animatedDiv)) {
      if (animatedDiv.classList.contains('animate-left')) {
        animatedDiv.classList.add('animated-div-left');
      } else if (animatedDiv.classList.contains('animate-right')) {
        animatedDiv.classList.add('animated-div-right');
      }
    }
  });
}

window.addEventListener('scroll', handleScroll);

$(document).ready(function () {
  var btn = $("#back-to-top");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
});
