/* main.js — shared across all pages */

/* ── Mobile nav toggle ── */
function toggleMenu() {
  const ul = document.querySelector('nav ul');
  ul.classList.toggle('open');
}

/* ── Project filter (projects.html only) ── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    document.querySelectorAll('.project-full-card').forEach(card => {
      if (filter === 'all' || card.dataset.cat === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ── Smooth scroll-triggered fade-in for sections ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .project-full-card, .random-card, .timeline-item, .contact-link').forEach(el => {
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.2s';
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  observer.observe(el);
});
