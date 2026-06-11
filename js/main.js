/* =============================================
   SPTX - Main JS
   ============================================= */

// Mobile menu
function toggleMenu(){
  document.getElementById('navMenu').classList.toggle('open');
}
document.addEventListener('click', function(e){
  const menu = document.getElementById('navMenu');
  const ham = document.getElementById('ham');
  if(menu && ham && !menu.contains(e.target) && !ham.contains(e.target)){
    menu.classList.remove('open');
  }
});

// Navbar scroll (only on homepage)
const navbar = document.getElementById('navbar');
if(navbar){
  if(navbar.classList.contains('at-top')){
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 60){
        navbar.classList.add('scrolled');
        navbar.classList.remove('at-top');
      } else {
        navbar.classList.remove('scrolled');
        navbar.classList.add('at-top');
      }
    });
  }
  // Back to top
  window.addEventListener('scroll', ()=>{
    const btt = document.getElementById('btt');
    if(btt) btt.classList.toggle('show', window.scrollY > 400);
  });
}

// Fade-up animation
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('on'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Counter animation
function animateCounter(el){
  const target = parseInt(el.dataset.count);
  if(!target) return;
  let cur = 0;
  const step = Math.max(1, Math.ceil(target/60));
  const interval = setInterval(()=>{
    cur += step;
    if(cur >= target){ el.innerHTML = target + (el.dataset.suffix||''); clearInterval(interval); }
    else el.textContent = cur;
  }, 18);
}
const statsEl = document.getElementById('parallax1');
if(statsEl){
  const so = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.querySelectorAll('.stat-num[data-count]').forEach(animateCounter);
        so.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  so.observe(statsEl);
}

// Contact form
const cf = document.getElementById('contactForm');
if(cf){
  cf.addEventListener('submit', function(e){
    e.preventDefault();
    const n = document.getElementById('cf_name')?.value.trim();
    const em = document.getElementById('cf_email')?.value.trim();
    const s = document.getElementById('cf_subject')?.value.trim();
    const m = document.getElementById('cf_message')?.value.trim();
    const ok = document.getElementById('form-success');
    const err = document.getElementById('form-error');
    if(!n || !em || !s || !m){ if(err){err.style.display='block';} if(ok){ok.style.display='none';} return; }
    if(ok){ok.style.display='block';} if(err){err.style.display='none';}
    this.reset();
    setTimeout(()=>{ if(ok) ok.style.display='none'; }, 5000);
  });
}

// Active nav scroll (homepage only)
function updateActiveNav(){
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(s=>{ if(window.scrollY >= s.offsetTop - 80) current = s.id; });
  document.querySelectorAll('.nav-menu>li').forEach(li=>{
    li.classList.remove('active');
    const a = li.querySelector('a');
    if(a && a.getAttribute('href') === '#'+current) li.classList.add('active');
  });
}
