//взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
//Відобразити всі поля кожної корзини.
fetch('https://dummyjson.com/carts')
    .then((value) => value.json())
    .then((response) => {
        let carts = response.carts
        for (const cart of carts){
            for (const product of cart.products){
                let prodDiv = document.createElement('div')
                document.body.append(prodDiv)
                let prodListUl = document.createElement('ul')
                let imgBlock = document.createElement('img')
                imgBlock.src = product.thumbnail
                let titleLi = document.createElement('li')
                titleLi.innerText = product.title
                let priceLi = document.createElement('li')
                priceLi.innerText = `price: ${product.price}`
                let percentLi = document.createElement('li')
                percentLi.innerText = `discountPercentage: ${product.discountPercentage}`
                let discountLi = document.createElement('li')
                discountLi.innerText = `discountedTotal: ${product.discountedTotal}`
                let quanLi = document.createElement('li')
                quanLi.innerText = `quantity: ${product.quantity}`
                let totLi = document.createElement('li')
                totLi.innerText = `total: ${product.total}`

                prodListUl.append(titleLi)
                prodListUl.append(priceLi)
                prodListUl.append(percentLi)
                prodListUl.append(discountLi)
                prodListUl.append(quanLi)
                prodListUl.append(totLi)

                prodDiv.append(prodListUl)
                prodDiv.append(imgBlock)

                prodDiv.classList.add('prodDiv')


            }
        }
    })




//взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
//Інгредієнти повинні бути список під час відображення.
fetch('https://dummyjson.com/recipes')
    .then((value) => value.json())
    .then((response) => {
        let recipes = response.recipes
        for (const recipe of recipes){
            let recipeDiv = document.createElement('div')
            document.body.append(recipeDiv)
            recipeDiv.classList.add('recipeDiv')

            let nameH1 = document.createElement('h1')
            nameH1.innerText = recipe.name
            let caloriesPerServingP = document.createElement('p')
            caloriesPerServingP.innerText = `caloriesPerServing: ${recipe.caloriesPerServing}`
            let cookTimeMinutesP = document.createElement('p')
            cookTimeMinutesP.innerText = `cookTimeMinutes: ${recipe.cookTimeMinutes}`
            let cuisineP = document.createElement('p')
            cuisineP.innerText = `cuisine: ${recipe.cuisine}`
            let difficultyP = document.createElement('p')
            difficultyP.innerText = `difficulty: ${recipe.difficulty}`
            let picture = document.createElement('img')
            picture.src = recipe.image
            recipeDiv.append(nameH1, caloriesPerServingP, cookTimeMinutesP, cuisineP, difficultyP)

            let ingredientsUl = document.createElement('ul')
            ingredientsUl.innerText = 'ingredients:'
            recipeDiv.append(ingredientsUl)
            let ingredients = recipe.ingredients
            for (const ingredient of ingredients){
                let ingredLi = document.createElement('li')
                ingredLi.classList.add('ingredientsList')
                ingredLi.innerText = ingredient
                ingredientsUl.append(ingredLi)
            }
            let instructionsUl = document.createElement('ul')
            instructionsUl.innerText = 'instructions:'
            recipeDiv.append(instructionsUl)
            let instructions = recipe.instructions
            for (const instruction of instructions){
                let instructionLi = document.createElement('li')
                instructionLi.classList.add('instructionList')
                instructionLi.innerText = instruction
                instructionsUl.append(instructionLi)
            }
            recipeDiv.append(picture)
            picture.classList.add('picture')
        }
    })




















