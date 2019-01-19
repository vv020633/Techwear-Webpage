var technames = ["Jedi", "Ninja", "Dark", "Equator", "Longing", "Turmoil", "Lowly", "Space", "Moon", "Villain", "Stare", "Hunch", "Lean", "Trouble", "Knight", "Midnight", "MidKnight", "Marauder", "Kek", "Summoner", "Axis", "Vortex", "Stream", "Edge", "Samurai", "Collector", "Bottomless", "Petrify", "Putrid", "Endower", "B-list", "Closed", "Detrimental", " Lucid", "Scheme", "Plot", "Orion", "Pluto", "Stardust", "Molten", "Erroding", "Crimson", "Nemesis", "Monochrome", "Onyx",];
                      /*---TechnName Generator function---*/
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
                    /*---Scroll Functions---*/
  ScrollReveal().reveal('.side-photos');
    ScrollReveal().reveal('.brand-descr');
    ScrollReveal().reveal('.interactive-brands1');
    ScrollReveal().reveal('.interactive-brands2');
    ScrollReveal().reveal('.flexbox-brands');
    ScrollReveal().reveal('.caption');
    ScrollReveal().reveal('.heading');
    ScrollReveal().reveal('.influence-pics');
    ScrollReveal().reveal('.gallery');



                  /*Glitch Functions*/
  $("#title").glitch({bg: '#35493D' , minint:1, maxint:3, maxglitch:15, hoffset:10, voffset:3, direction:'random'});
  $("#heading").glitch({bg: '#black' , minint:1, maxint:3, maxglitch:15, hoffset:10, voffset:3, direction:'random'});
  $("#antglitch").glitch({bg: '#35493D' , minint:1, maxint:3, maxglitch:15, hoffset:10, voffset:3, direction:'random'});
  $("#errglitch").glitch({bg: '#35493D' , minint:1, maxint:3, maxglitch:15, hoffset:10, voffset:3, direction:'random'});
  $("#jenglitch").glitch({bg: '#35493D' , minint:1, maxint:3, maxglitch:15, hoffset:10, voffset:3, direction:'random'});
  $("#nameDisplay").glitch({bg: '#35493D' , minint:1, maxint:3, maxglitch:7, hoffset:5, voffset:3, direction:'random'});

                /*Glitch on hover*/
$('a.flexlinks').hover(function(){
  $(this).glitch({bg: '#35493D' , minint:1, maxint:3, maxglitch:10, hoffset:10, voffset:3, direction:'horizontal'});
  });
});
