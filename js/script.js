let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

//efek scroll 
$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
      scroll_pos = $(this).scrollTop();
      if (scroll_pos > 0) {
// ketika dicrol background  berwarna putih
          $("header").addClass("putih");
          $("header img.hitam").show();
          $("header img.putih").hide();
      } else {
          $("header").removeClass("putih");
          $("header img.hitam").hide();
          $("header img.putih").show();
      }
  })
});

window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
})