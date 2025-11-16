(function(){
  'use strict';
  var params = new URLSearchParams(location.search);
  var ref = document.querySelector('.screen-image');
  if (params.get('debug') === '1' && ref) { ref.style.opacity = '0.25'; }
})();
