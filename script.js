// Portfolio Website - JavaScript Functionality
// Includes: Smooth Scrolling, Animations, Intersection Observer, Interactive Effects

// ============================================
// 1. SMOOTH SCROLLING
// ============================================

/**
 * Smooth scroll to elements when navigation links are clicked
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Smooth scroll to top button functionality
 */
function initScrollToTop() {
  const scrollTopBtn = document.getElementById('scrollTopBtn') || createScrollTopButton();
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollTopBtn.style.display = 'block';
      scrollTopBtn.style.opacity = '1';
    } else {
      scrollTopBtn.style.opacity = '0';
      setTimeout(() => {
        scrollTopBtn.style.display = 'none';
      }, 300);
    }
  });
  
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function createScrollTopButton() {
  const btn = document.createElement('button');
  btn.id = 'scrollTopBtn';
  btn.innerHTML = '↑ Top';
  btn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 12px 15px;
    font-size: 16px;
    cursor: pointer;
    display: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1000;
  `;
  document.body.appendChild(btn);
  return btn;
}

// ============================================
// 2. INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

/**
 * Initialize Intersection Observer for scroll animations
 * Animates elements when they come into view
 */
function initIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation class to trigger CSS animations
        entry.target.classList.add('animate-in');
        
        // Optional: unobserve after animation to improve performance
        // observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe all elements with animation classes
  document.querySelectorAll('[data-animate]').forEach(element => {
    observer.observe(element);
  });
}

// ============================================
// 3. SCROLL ANIMATIONS & PARALLAX EFFECTS
// ============================================

/**
 * Parallax scrolling effect for hero sections
 */
function initParallaxEffect() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  if (parallaxElements.length === 0) return;
  
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.parallax || 0.5;
      element.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
}

/**
 * Fade in and slide animations on scroll
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-animation]');
  
  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const animation = entry.target.dataset.animation;
        entry.target.style.animation = animation;
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.15 });
  
  animatedElements.forEach(element => {
    revealOnScroll.observe(element);
  });
}

// ============================================
// 4. INTERACTIVE EFFECTS
// ============================================

/**
 * Hover effects for portfolio items/cards
 */
function initCardHoverEffects() {
  const cards = document.querySelectorAll('.portfolio-card, .project-card, [data-card]');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
      this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
      this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
  });
}

/**
 * Button ripple effect on click
 */
function initRippleEffect() {
  const buttons = document.querySelectorAll('button, .btn, [data-ripple]');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        animation: ripple 0.6s ease-out;
      `;
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

/**
 * Toggle menu functionality with animation
 */
function initMenuToggle() {
  const menuToggle = document.querySelector('.menu-toggle, .hamburger, [data-menu-toggle]');
  const menu = document.querySelector('.nav-menu, .mobile-menu, [data-menu]');
  
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('active');
      menuToggle.classList.toggle('active');
      document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : 'auto';
    });
    
    // Close menu when a link is clicked
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    });
  }
}

// ============================================
// 5. DYNAMIC FEATURES
// ============================================

/**
 * Typing animation for hero text
 */
function initTypingAnimation() {
  const typingElements = document.querySelectorAll('[data-typing]');
  
  typingElements.forEach(element => {
    const text = element.textContent;
    const speed = element.dataset.typing || 50;
    
    element.textContent = '';
    let i = 0;
    
    const type = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    };
    
    // Start typing when element is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && element.textContent === '') {
          type();
          observer.unobserve(element);
        }
      });
    });
    
    observer.observe(element);
  });
}

/**
 * Counter animation for statistics
 */
function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-counter]');
  
  const runCounters = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.dataset.counter);
        const duration = parseInt(counter.dataset.duration) || 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };
        
        updateCounter();
        counterObserver.unobserve(counter);
      }
    });
  };
  
  const counterObserver = new IntersectionObserver(runCounters, { threshold: 0.5 });
  counters.forEach(counter => counterObserver.observe(counter));
}

/**
 * Filter functionality for portfolio items
 */
function initPortfolioFilter() {
  const filterButtons = document.querySelectorAll('[data-filter-btn]');
  const filterItems = document.querySelectorAll('[data-filter-item]');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filterValue = this.dataset.filterBtn;
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter items with animation
      filterItems.forEach(item => {
        const itemCategory = item.dataset.filterItem;
        
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.opacity = '0';
          item.style.display = 'block';
          setTimeout(() => {
            item.style.transition = 'opacity 0.3s ease';
            item.style.opacity = '1';
          }, 10);
        } else {
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/**
 * Form validation and submission
 */
function initFormHandling() {
  const forms = document.querySelectorAll('form[data-form]');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic validation
      let isValid = true;
      const inputs = this.querySelectorAll('input, textarea');
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('error');
        } else {
          input.classList.remove('error');
        }
      });
      
      if (isValid) {
        // Show success message
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Sent!';
        submitBtn.disabled = true;
        
        // Reset after 2 seconds
        setTimeout(() => {
          this.reset();
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 2000);
      }
    });
  });
}

/**
 * Active navigation link indicator
 */
function initActiveNavLink() {
  const navLinks = document.querySelectorAll('[data-nav-link], .nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section, [data-section]');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/**
 * Lazy load images
 */
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// ============================================
// 6. CSS ANIMATIONS (Add to your CSS file)
// ============================================
/*
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-in {
  animation: fadeInUp 0.6s ease forwards;
}

[data-animation="slideInLeft"] {
  animation: slideInLeft 0.6s ease forwards;
}

[data-animation="slideInRight"] {
  animation: slideInRight 0.6s ease forwards;
}
*/

// ============================================
// 7. INITIALIZATION
// ============================================

/**
 * Initialize all functionality when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log('Portfolio functionality initialized');
  
  // Initialize all features
  initSmoothScroll();
  initScrollToTop();
  initIntersectionObserver();
  initParallaxEffect();
  initScrollAnimations();
  initCardHoverEffects();
  initRippleEffect();
  initMenuToggle();
  initTypingAnimation();
  initCounterAnimation();
  initPortfolioFilter();
  initFormHandling();
  initActiveNavLink();
  initLazyLoading();
});

// Handle page visibility for optimizing animations
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    console.log('Page hidden - pausing animations');
  } else {
    console.log('Page visible - resuming animations');
  }
});

// ============================================
// 8. UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function to optimize scroll events
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Get element offset for scroll calculations
 */
function getElementOffset(element) {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top + window.pageYOffset,
    left: rect.left + window.pageXOffset
  };
}

/**
 * Check if element is in viewport
 */
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

console.log('Script loaded successfully!');