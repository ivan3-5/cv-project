document.addEventListener('DOMContentLoaded', () => {
  // Staggered entrance animation for cards
  const animatedElements = document.querySelectorAll('.animate-in');
  animatedElements.forEach((el, index) => {
    el.style.animationDelay = `${(index + 1) * 0.12}s`;
  });

  // Email copy-to-clipboard with smooth notification
  const emailBtn = document.getElementById('email-btn');
  if (emailBtn) {
    emailBtn.addEventListener('click', (e) => {
      const email = emailBtn.getAttribute('data-email');
      if (email) {
        navigator.clipboard.writeText(email).then(() => {
          const originalText = emailBtn.querySelector('.btn-text').textContent;
          emailBtn.querySelector('.btn-text').textContent = 'Email Copied!';
          emailBtn.style.borderColor = 'var(--accent-cyan)';

          setTimeout(() => {
            emailBtn.querySelector('.btn-text').textContent = originalText;
            emailBtn.style.borderColor = '';
          }, 2000);
        }).catch(() => {
          // Fallback to mailto if clipboard fails
          window.location.href = `mailto:${email}`;
        });
      }
    });
  }

  // Interactive subtle 3D card tilt for the avatar
  const avatarWrapper = document.querySelector('.avatar-wrapper');
  if (avatarWrapper) {
    avatarWrapper.addEventListener('mousemove', (e) => {
      const rect = avatarWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      avatarWrapper.style.transform = `perspective(400px) rotateY(${x * 0.15}deg) rotateX(${-y * 0.15}deg) scale(1.05)`;
    });

    avatarWrapper.addEventListener('mouseleave', () => {
      avatarWrapper.style.transform = 'perspective(400px) rotateY(0deg) rotateX(0deg) scale(1)';
      avatarWrapper.style.transition = 'transform 0.4s ease';
    });

    avatarWrapper.addEventListener('mouseenter', () => {
      avatarWrapper.style.transition = 'none';
    });
  }
});
