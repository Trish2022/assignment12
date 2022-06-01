// // Create an object to hold information on your favorite recipe. 
// // It should have properties for title (a string), servings (a number), and ingredients (an array of strings). 
// // Your object should have a publicly available method that when called, will log out the recipe within the console so that the recipe information looks like this:

// // Guacamole
// // Serves: 4
// // Ingredients: 
// // - 3 Avocados
// // - 1 Lime
// // - 1 Teaspoon Salt
// // - 1/2 Cup Onion
// // - 3 Tablespoons Cilantro
// // - 2 Diced Tomatoes
// // - 1 Teaspoon Garlic
// // - 1 Pinch Ground Pepper

	

class Recipe {
	constructor(title, servings, ingredients)  {
		this.title = title;
		this.servings = servings;
		this.ingredients = ingredients;
		console.log(`${this.title} 
Serves: ${this.servings} 
Ingredients: ${this.ingredients}`);
	}
}
const recipe1 = new Recipe('Banana Bread', 
6, '\n - 3 mashed ripe bananas \n - 1/3 cup melted butter  \n - 2 beaten eggs \n - 1 tsp vanilla \n - 1/2 c sugar \n - 1 1/2 c flour \n - 1 tsp salt \n - 1 tsp soda \n - 1 tsp baking powder' );
console.log('Directions: \nMix wet ingredients, add sugar. Mix in dry ingredients and pour into prepared loaf pan. Bake 55 minutes at 350 degrees. Note: add chocolate chips, walnuts or other nuts if desired.')