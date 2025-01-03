document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
  
    images.forEach(image => {
      if (!image.hasAttribute('loading')) {
        image.setAttribute('loading', 'lazy');
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img:not([alt])');
    const AltText = "© Cao Hải Đăng";
  
    images.forEach(image => {
      image.setAttribute('alt', AltText);
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    const copyrightFooter = document.getElementById('copyrightFooter');
  
    if (copyrightFooter) {
      const currentYear = new Date().getFullYear();
      copyrightFooter.textContent = "© " + currentYear + " Cao Hải Đăng";
    }
  });

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    const overlay = document.getElementById('overlay');
    const zoomedImage = document.getElementById('zoomed-image');
    const closeButton = document.getElementById('close-btn');
  
    images.forEach(image => {
      image.addEventListener('click', function() {
        zoomedImage.src = this.src;
        zoomedImage.alt = this.alt;
        overlay.style.display = 'flex';
      });
    });
  
    closeButton.addEventListener('click', function() {
        overlay.style.display = 'none';
      });
  
    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            overlay.style.display = 'none';
          }
      });
  
  });