import "./styles/style.css"
import "./styles/fonts.css"
import "./styles/variables.css"
import "./styles/globals.css"
import "./styles/fonts.css"
import "./styles/animations.css"
import "./styles/style.css"

const dialog = document.querySelector('.dialog');
const saveButton = document.querySelector('.save-button');
const dialogButton = document.querySelector('.dialog__button');

saveButton.addEventListener('click', () => dialog.showModal());
dialogButton.addEventListener('click', () => dialog.close());
const likeButtons = document.querySelectorAll('.card__icon-button');

likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const icon = button.querySelector('.like-icon');
    icon.classList.toggle('is-liked');
    
    const likeButton = button.closest('.card__footer').querySelector('.button__text');
    if (icon.classList.contains('is-liked')) {
      likeButton.textContent = 'Unlike';
    } else {
      likeButton.textContent = 'Like';
    }
  });
});