document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach(item => {
      item.addEventListener('click', function () {
        const answer = this.querySelector('p');
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
        this.classList.toggle('active');
      });
    });
  });
  