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