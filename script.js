function initializePageFeatures() {
    // Toggle visibility of sections
    function toggleSections() {
        var sections = document.querySelectorAll('.content');
        sections.forEach(function(section) {
            if (section.style.display === "none" || section.style.display === "") {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    }

    // Slide show functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function showSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        slides.forEach((slide, i) => {
            // Hide all slides except the current one
            slide.style.display = i === currentSlide ? 'block' : 'none';
        });
    }

    prevButton.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });
}


document.addEventListener("DOMContentLoaded", function() {
  const headers = document.querySelectorAll('.foldable-header');

  headers.forEach(header => {
    header.addEventListener('click', function() {
      const content = header.nextElementSibling;
      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});
