// 1

const categories = document.querySelectorAll('#categories .item');
console.log("Number of categories:", categories.length);

// 2

categories.forEach(category => {
   const categoryName = category.querySelector('h2').textContent;
   console.log("Category:", categoryName);
   const categoriesList = category.querySelector('ul').children.length;
   console.log("Elements:",categoriesList);
});