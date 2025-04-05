const faBars=document.querySelector(".fa-bars");
const faSearch=document.querySelector(".fa-search");

faBars.addEventListener("click",function(){
    const nav=document.querySelector("nav ul");
    nav.classList.toggle("active");
    faBars.classList.toggle("fa-times");
});

faSearch.addEventListener("click",function(){
    const search=document.querySelector(".search .search-input");
    search.classList.add("show-input");

});

const categories = document.querySelectorAll('.categories  div'); 
categories.forEach(function(category){
    const h2 = category.querySelector('h2');
    h2.addEventListener('click', function() {
        const ul = category.querySelector('ul'); 
        ul.classList.toggle('show-categories'); 
        
        const arrow = h2.querySelector('i');
        arrow.classList.toggle('fa-arrow-down');
        arrow.classList.toggle('fa-arrow-up');
    });

    category.addEventListener('mouseover', function() {
        category.classList.add('hover'); 
    });

    category.addEventListener('mouseout', function() {
        category.classList.remove('hover'); 
    });
});
