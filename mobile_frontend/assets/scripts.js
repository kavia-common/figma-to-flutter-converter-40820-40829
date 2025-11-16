(function(){
  const phones = document.querySelectorAll('.phone');
  if(!phones.length) return;

  const strength = 6; // px
  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

  let ticking = false;
  window.addEventListener('mousemove', (e)=>{
    if(ticking) return;
    window.requestAnimationFrame(()=>{
      const { innerWidth: w, innerHeight: h } = window;
      const nx = (e.clientX / w) - 0.5;
      const ny = (e.clientY / h) - 0.5;

      phones.forEach((el, i)=>{
        const dx = clamp(nx * strength * (1 + (i%3)), -strength*2, strength*2);
        const dy = clamp(ny * strength * (1 + ((i+1)%3)), -strength*2, strength*2);
        el.style.transform += ` translate(${dx}px, ${dy}px)`;
      });
      ticking = false;
    });
    ticking = true;
  });
})();
