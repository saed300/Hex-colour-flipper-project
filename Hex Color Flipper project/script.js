(function(){
  var hexColours = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  var btn = document.querySelector('#btn');
  var heading = document.querySelector('.heading');
  var body = document.querySelector('body');

  btn.addEventListener('click', function() {
    var hex = '#';
    for (var i = 0; i < 6; i++) {
      hex += hexColours[randomNumber()];
    }
    body.style.backgroundColor = hex;
    heading.textContent = hex;
  });

  function randomNumber() {
    return Math.floor(Math.random() * hexColours.length);
  };
})();
















