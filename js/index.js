const film=document.querySelector('#home-film'),control=document.querySelector('.film-toggle');
function reflect(){control.textContent=film.paused?'▶':'Ⅱ';control.setAttribute('aria-label',film.paused?'Play video':'Pause video');}
control.addEventListener('click',()=>{if(film.paused)film.play().catch(reflect);else film.pause();});film.addEventListener('play',reflect);film.addEventListener('pause',reflect);film.addEventListener('error',()=>{film.style.background='url(assets/home-film-poster.jpg) center/cover';reflect();});
if(matchMedia('(prefers-reduced-motion: reduce)').matches){film.autoplay=false;film.pause();}else film.play().catch(reflect);
document.querySelectorAll('img[data-fallback]').forEach(img=>{const fallback=()=>{img.src=img.dataset.fallback;delete img.dataset.fallback;};img.addEventListener('error',fallback,{once:true});if(img.complete&&!img.naturalWidth)fallback();});
