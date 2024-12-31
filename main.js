document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
  
    images.forEach(image => {
      if (!image.hasAttribute('loading')) {
        image.setAttribute('loading', 'lazy');
      }
    });
  });

  