const projectBtn = document.querySelector('.projects__btn');
const blockProjectInvis = document.querySelectorAll('.project--invis');

projectBtn.addEventListener('click', function () {
  const isBtnTextSHow = projectBtn.textContent.trim() == 'Показать остальное';

  if (isBtnTextSHow) { 
    blockProjectInvis.forEach(function (block) {
      block.classList.toggle('project--invis');
    });
    projectBtn.textContent = 'Скрыть часть';
  } else {
    blockProjectInvis.forEach(function (block) {
      block.classList.toggle('project--invis');
    });
    projectBtn.textContent = 'Показать остальное';
  }
});

new WOW().init();