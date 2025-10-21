document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

  // Toggle mobile menu
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuOverlay.classList.toggle('open');
  });
  mobileMenuOverlay.querySelectorAll('[data-menu-item]').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuOverlay.classList.remove('open');
    });
  });

  // Scroll effect
  const scrollHandler = () => {
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', scrollHandler);
  scrollHandler();

  // Gallery logic
  const mainImage = document.getElementById('main-gallery-image');
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      const newSrc = thumbnail.getAttribute('data-src');
      mainImage.style.opacity = '0';
      setTimeout(() => {
        mainImage.src = newSrc;
        mainImage.style.opacity = '1';
      }, 150);
      thumbnails.forEach(t => t.classList.replace('ring-amber-700', 'ring-transparent'));
      thumbnail.classList.add('ring-amber-700');
    });
  });

  // Feature animation
  const featureItems = document.querySelectorAll('.feature-item');
  const featureObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('initial-state');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  featureItems.forEach(item => featureObserver.observe(item));
});