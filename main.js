document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
  
    images.forEach(image => {
      if (!image.hasAttribute('loading')) {
        image.setAttribute('loading', 'lazy');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img:not([alt])'); // Chỉ chọn ảnh chưa có alt
    const defaultAltText = "Mô tả hình ảnh"; // Nội dung alt mặc định
  
    images.forEach(image => {
      image.setAttribute('alt', "© Cao Hải Đăng");
    });
  });