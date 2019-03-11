(function ($) {

  "use strict"; 
  //menu//
  
  $('#nav .nav-collapse').on('click', function() {
    $('#nav').toggleClass('open');
  });

  $(window).on('scroll', function() {
    if ($(window).scrollTop()) {
      $('.barra').addClass('white');
      $('.navegacion-principal').addClass('white');
      $('.logo').css({'display':'none'});
      $('.logo-alt').css({'display':'block'});
    }
    else {
      $('.barra').removeClass('white');
      $('.navegacion-principal').removeClass('white');
      $('.logo-alt').css({'display':'none'});
      $('.logo').css({'display':'block'});
    }
  });
  

})(jQuery);
var api = 'AIzaSyCdXH2vib4zWaB2r7n6rXaQ6Mv-SNVHpoA';

function initMap() {
  var latLng = {
    lat: 10.0158995,
    lng: -84.208680
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    'center': latLng,
    'zoom': 16,
    'mapTypeId': google.maps.MapTypeId.ROADMAP
  });
  var contenido = '<h2> Clinica Dental Visan </H2>' + '<p>Visitanos</p>';
  var informacion = new google.maps.InfoWindow({
    content: contenido
  });

  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: 'Clinica Dental Visan'
  });

  marker.addListener('click', function () {
    informacion.open(map, marker);
  });
}

//Menu mobile//
function openSM() {
  document.getElementById("mySidemenu").style.width = "100%";
  document.getElementById("pg-content").style.marginLeft = "450px";
}
function closeSM() {
  document.getElementById("mySidemenu").style.width = "0";
  document.getElementById("pg-content").style.marginLeft = "0";
};
//loader// 

const loader = document.getElementById('loader');
const html = document.getElementById('html');
const logo = document.getElementById('logo');
window.addEventListener('load', ()=> {
  loader.style.opacity = '0'
  loader.style.zIndex = '-1'
  html.style.overflowY = 'scroll'
  logo.style.display = 'none'
})
//alert///
