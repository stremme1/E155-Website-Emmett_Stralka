document.addEventListener('DOMContentLoaded', function() {
  // Enhanced scroll animation observer with better performance
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add a small delay for staggered animations
        const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
        setTimeout(() => {
          entry.target.classList.add('animate');
        }, delay);
        
        // Unobserve after animation to improve performance
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all scroll animation elements
  document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .scroll-animate-fade, .scroll-animate-slide-up, .scroll-animate-stagger').forEach(el => {
    observer.observe(el);
  });

  // Add smooth scroll behavior for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
