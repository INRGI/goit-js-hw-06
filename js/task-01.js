
const numbersOfCategories = document.querySelectorAll('ul#categories > li.item');
console.log(`Number of categories: ${numbersOfCategories.length}`)

// numbersOfCategories.forEach(category => {
//     const categoryName = category.querySelector('h2').textContent
//     console.log(`Category: ${categoryName}`)
//     const categoryElements = category.querySelectorAll('li').length
//     console.log(`Elements: ${categoryElements}`)
// })

numbersOfCategories.forEach(category => console.log(`Category: ${category.querySelector('h2').textContent}
Elements: ${category.querySelectorAll('li').length}`))
