const allCategoriesRef = document.getElementById('categories');
const productsRef = allCategoriesRef.children //products

console.log(`Number of ${allCategoriesRef.id}: ${productsRef.length}`);
for (const product of productsRef) {
    console.log(`Category: ${product.getElementsByTagName('h2')[0].textContent}`);
    console.log(`Elements: ${product.getElementsByTagName('ul')[0].children.length}`);
}