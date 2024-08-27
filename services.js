document.addEventListener('DOMContentLoaded', function(){
  function animate() {
     const cards = document.querySelectorAll('.card');
     cards.forEach(cards => {
        cards.classList.add('slide');
     });
  }
  animate();
});