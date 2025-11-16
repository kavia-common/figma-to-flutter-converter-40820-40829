(function(){
  'use strict';

  // PUBLIC_INTERFACE
  function initAddNewCardScreen(){
    /** Initialize debug overlay and minimal a11y focus handling. */
    var root = document.getElementById('screen-754-4305');
    if(!root) return;

    // Debug overlay toggle via query (?debug=1) - fades in the background screenshot for verification
    var params = new URLSearchParams(location.search);
    var ref = root.querySelector('.screen-image');
    if (params.get('debug') === '1' && ref) {
      ref.style.opacity = '0.25';
    }

    // Basic keyboard interaction for elements with role="button" or buttons
    var buttons = root.querySelectorAll('[role="button"], button');
    buttons.forEach(function(el){
      el.addEventListener('keydown', function(e){
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          el.click();
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAddNewCardScreen);
  } else {
    initAddNewCardScreen();
  }
})();
