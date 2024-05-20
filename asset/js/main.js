
(function() {
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
    let selectNav = select('#nav')
    if (selectNav) {
      const navScrolled = () => {
        if (window.scrollY > 48) {
          selectNav.classList.add('nav-scrolled')
        } else {
          selectNav.classList.remove('nav-scrolled')
        }
      }
      window.addEventListener('load', navScrolled)
      onscroll(document, navScrolled)
    }
    window.addEventListener('load', () => {
      AOS.init({
        duration: 2000,
        easing: "ease-in-out",
        once: true,
        mirror: false
      });
    });
})()  

$('.page-scroll').on('click', function(e) {

  var tujuan = $(this).attr('href');
 
  var elemenTujuan = $(tujuan);

  $('html, body').animate({
      scrollTop: elemenTujuan.offset().top - 70
  });

  e.preventDefault();
 
});



$('.card_inner').click(function(){
  $(this).toggleClass('is-flipped');
});


var forms = document.querySelectorAll('.needs-validation');
            
Array.prototype.slice.call( forms ).forEach( function( form )
{
    form.addEventListener( 'submit', function ( event )
    {
        if ( !form.checkValidity( ) )
        {
            event.preventDefault( )
            event.stopPropagation( );
        }

        form.classList.add( 'was-validated' );
  }, false );
} );

var swiper = new Swiper(".team-swiper", {
    loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".portfolio-gallery", {
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});