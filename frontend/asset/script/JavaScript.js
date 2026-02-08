// search model 
const openBtnSearch = document.getElementById('openSearchBar');
const openSearchBarIcon = document.getElementById('openSearchBarIcon');
const searchBar = document.getElementById('topSearchBar');
if (openBtnSearch || openSearchBarIcon) {
    openBtnSearch.addEventListener('click', () => {
        searchBar.classList.remove('hidden');
    });
    openSearchBarIcon.addEventListener('click', () => {
        searchBar.classList.remove('hidden');
    });
}
searchBar.addEventListener('click', (e) => {
    if (e.target === searchBar) {
        searchBar.classList.add('hidden');
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchBar.classList.add('hidden');
    }
});
// search model 




// cart & history 
const historyBtn = document.getElementById('historyBtn');
const cartBtn = document.getElementById('cartBtn');

function selectButton(selected, other) {
    selected.classList.add('bg-yellow-700', 'text-white', 'border', 'border-gray-900');
    other.classList.remove('bg-yellow-700', 'text-white', 'border', 'border-gray-900');
}
selectButton(historyBtn, cartBtn);
historyBtn.addEventListener('click', () => selectButton(historyBtn, cartBtn));
cartBtn.addEventListener('click', () => selectButton(cartBtn, historyBtn));
document.addEventListener('DOMContentLoaded', () => {
    const historyBtn = document.getElementById('historyBtns');
    const cartBtn = document.getElementById('cartBtns');
    function selectButton(selected, other) {
        selected.classList.add('bg-yellow-700', 'text-white', 'border', 'border-gray-900');
        other.classList.remove('bg-yellow-700', 'text-white', 'border', 'border-gray-900');
    }
    selectButton(historyBtn, cartBtn);
    historyBtn.addEventListener('click', () => selectButton(historyBtns, cartBtns));
    cartBtn.addEventListener('click', () => selectButton(cartBtns, historyBtns));
});
// cart & history 





// left sidebar 
const hamburger = document.querySelector('.fa-bars');
const mobileSidebar = document.getElementById('mobileSidebar');
const closeBtn = document.getElementById('closeSidebar');
const shadowLeft = document.getElementById('shadowShowModelLeft');

hamburger.addEventListener('click', () => {
    mobileSidebar.classList.remove('-translate-x-full');
    mobileSidebar.classList.add('translate-x-0');
    shadowLeft.classList.remove('hidden');
});
closeBtn.addEventListener('click', () => {
    mobileSidebar.classList.add('-translate-x-full');
    mobileSidebar.classList.remove('translate-x-0');
    shadowLeft.classList.add('hidden');
});
window.addEventListener('click', (e) => {
    if (!mobileSidebar.contains(e.target) && !hamburger.contains(e.target)) {
        mobileSidebar.classList.add('-translate-x-full');
        mobileSidebar.classList.remove('translate-x-0');
        shadowLeft.classList.add('hidden');
    }
});
// left sidebar 




// right sidebar 
const cartIcon = document.querySelector('.fa-cart-arrow-down');
const cartSidebar = document.getElementById('cartSidebar');
const closeCartBtn = document.getElementById('closeCart');
const shadowRight = document.getElementById('shadowShowModelRigth');
cartIcon.addEventListener('click', () => {
    cartSidebar.classList.remove('translate-x-full');
    cartSidebar.classList.add('translate-x-0');
    shadowRight.classList.remove('hidden');
});
closeCartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('translate-x-full');
    cartSidebar.classList.remove('translate-x-0');
    shadowRight.classList.add('hidden');

});
window.addEventListener('click', (e) => {
    if (!cartSidebar.contains(e.target) && !cartIcon.contains(e.target)) {
        cartSidebar.classList.add('translate-x-full');
        cartSidebar.classList.remove('translate-x-0');
        shadowRight.classList.add('hidden');

    }
});
// right sidebar 



// product add to cart 
const modal = document.getElementById('productModal');
const openBtn = document.getElementById('showModalBtn');
const closeBtns = document.getElementById('closeModal');
openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});
closeBtns.addEventListener('click', () => {
    modal.classList.add('hidden');
});
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});
// product add to cart 


const mainFAB = document.getElementById('mainFAB');
const fabBtn1 = document.getElementById('fabBtn1');
const fabBtn2 = document.getElementById('fabBtn2');

let expanded = false;

mainFAB.addEventListener('click', () => {
    expanded = !expanded;

    if (expanded) {
        fabBtn1.classList.remove('hidden');
        fabBtn2.classList.remove('hidden');
    } else {
        fabBtn1.classList.add('hidden');
        fabBtn2.classList.add('hidden');
    }
});