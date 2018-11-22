var technames = ["Jedi", "Ninja", "Dark", "Equator", "Longing", "Turmoil", "Lowly", "Space", "Moon", "Villain", "Stare", "Hunch", "Lean", "Trouble", "Knight", "Midnight", "MidKnight", "Marauder", "Kek", "Summoner", "Axis", "Vortex", "Stream", "Edge", "Samurai", "Collector", "Bottomless", "Petrify", "Putrid", "Endower", "B-list", "Closed", "Detrimental", " Lucid", "Scheme", "Plot", "Orion", "Pluto", "Stardust", "Molten", "Erroding", "Crimson", "Nemesis"];

 function newTechName() {
var randomNumber = Math.floor(Math.random() * (technames.length));
var randomNumber2 = Math.floor(Math.random() * (technames.length));

if (randomNumber === randomNumber2)
  {
   randomNumber2 = Math.floor(Math.random() * (technames.length));
  }
document.getElementById('nameDisplay').innerHTML = '@' + technames[randomNumber] +  ' ' + technames[randomNumber2];
};

$(document).ready(function() {

  ScrollReveal().reveal('.side-photos');
    ScrollReveal().reveal('.brand-descr');
    ScrollReveal().reveal('.interactive-brands1');
    ScrollReveal().reveal('.interactive-brands2');
    ScrollReveal().reveal('.caption');
    ScrollReveal().reveal('.heading');
    ScrollReveal().reveal('.influence-pics');




  $("#title").glitch({bg: '#35493D' , minint:1, maxint:3, maxglitch:15, hoffset:10, voffset:3, direction:'random'});
  $("#heading").glitch({bg: '#black' , minint:1, maxint:3, maxglitch:15, hoffset:10, voffset:3, direction:'random'});
  $("#antglitch").glitch({bg: '#35493D' , minint:1, maxint:3, maxglitch:15, hoffset:10, voffset:3, direction:'random'});
  $("#errglitch").glitch({bg: '#35493D' , minint:1, maxint:3, maxglitch:15, hoffset:10, voffset:3, direction:'random'});
  $("#jenglitch").glitch({bg: '#35493D' , minint:1, maxint:3, maxglitch:15, hoffset:10, voffset:3, direction:'random'});
  $("#nameDisplay").glitch({bg: '#35493D' , minint:1, maxint:3, maxglitch:7, hoffset:5, voffset:3, direction:'random'});



$("#influences-Heading").hover(function(){
  $(this).glitch({bg: '#35493D' , minint:1, maxint:3, maxglitch:15, hoffset:10, voffset:3, direction:'random'});
});

$("#styles-Heading").hover(function(){
  $(this).glitch({bg: '#35493D' , minint:3, maxint:1, maxglitch:4, hoffset:10, voffset:3, direction:'random'});
});

$("#brands-Heading").hover(function(){
  $(this).glitch({bg: '#35493D' , minint:3, maxint:1, maxglitch:15, hoffset:10, voffset:3, direction:'random'});

  });
});
