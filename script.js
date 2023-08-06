const refs = {
   catlist: document.querySelector('.category-list'),
   funds: document.querySelector('.funds'),
   home: document.querySelector('.home'),
   btnHome: document.querySelector('.btnHome'),
   btnSL: document.querySelector('.btnSL'),
   btnAllCat: document.querySelector('.btnAllCat'),
   btnFantasy: document.querySelector('.btnFantasy'),
}

showHome();

refs.btnHome.addEventListener('click', showHome);
refs.btnAllCat.addEventListener('click', showHome);
refs.btnFantasy.addEventListener('click', showCategory);
refs.btnSL.addEventListener('click', showSList);

console.dir(refs.catlist);

function showSList(){
   refs.catlist.classList.replace('category-list', 'hidden');
   refs.home.innerHTML = '<h1>Shopping List</h1><p>Shopping List Content</p>'
}

function showHome(){
   refs.catlist.classList.replace('hidden', 'category-list');
   refs.home.innerHTML = '<h1>BestSellers</h1><p>BestSellers Content</p>'
}

function showCategory(){
   refs.home.innerHTML = '<h1>Fantazy Books</h1><p>Fantazy Books Content</p>'
}