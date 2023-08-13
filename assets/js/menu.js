export default function menuToggler() { 
    let menu = document.querySelector(`.menu`);
    let backLayer = document.querySelector(`.backLayer`);

    document.addEventListener(`click`, (event) => {
        if (event.target.closest(`.header__menuButton`) || event.target == backLayer) {
            menu.classList.toggle(`header__menu_opened`);
            backLayer.classList.toggle(`backLayer_active`);
        }   
    } )
}


