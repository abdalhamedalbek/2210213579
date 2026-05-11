// Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggleBtn.classList.add('clicked');
  setTimeout(() => toggleBtn.classList.remove('clicked'), 300);
});

// Animate Skill Bars
function animateBars() {
  document.querySelectorAll('.bar').forEach(bar => {
    const pct = parseInt(bar.dataset.percent);
    if (!bar.classList.contains('animated')) {
      const label = document.createElement('span');
      bar.appendChild(label);
      let curr = 0;
      const timer = setInterval(() => {
        curr += Math.ceil((pct - curr) / 10);
        bar.style.width = curr + '%';
        label.textContent = curr + '%';
        if (curr >= pct) { clearInterval(timer); bar.classList.add('animated'); }
      }, 30);
    }
  });
}
window.addEventListener('scroll', () => {
  const sec = document.querySelector('.content section:last-of-type');
  const rect = sec.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0) animateBars();
});
window.addEventListener('load', () => {
  animateBars();
  // Typing effect
  const jt = document.getElementById('job-title');
  'Web Designer'.split('').forEach((ch,i) => {
    const sp = document.createElement('span'); sp.textContent = ch;
    sp.style.animationDelay = `${i*0.3}s`;
    jt.appendChild(sp);
  });
});

// Contact Form Feedback
const form = document.getElementById('contact-form');
const msg  = document.getElementById('form-message');
form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(form.action, { method:'POST', body:new FormData(form) })
    .then(res => res.text())
    .then(txt => { msg.textContent=txt; msg.style.color='green'; form.reset(); })
    .catch(()=> { msg.textContent='Failed to send message.'; msg.style.color='red'; });
});