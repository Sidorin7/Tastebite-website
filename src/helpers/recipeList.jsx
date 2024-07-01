import one from '../components/recipe/img/1.jpg'
import two from '../components/recipe/img/2.jpg'
import three from '../components/recipe/img/3.jpg'

import four from '../components/recipe/img/4.jpg'
import five from '../components/recipe/img/5.jpg'
import six from '../components/recipe/img/6.jpg'

import desserts from '../components/popularCateg/img/desserts.png'
import pa from '../components/popularCateg/img/pa.png'
import pasta from '../components/popularCateg/img/pasta.png'
import pizza from '../components/popularCateg/img/pizza.png'
import smoothies from '../components/popularCateg/img/smoothies.png'
import vegan from '../components/popularCateg/img/vegan.png'

import bagel from '../components/collections/img/bagel.jpg'
import chef from '../components/collections/img/chef.jpg'
import cookie from '../components/collections/img/cookie.jpg'
import dinner from '../components/collections/img/dinner.jpg'
import donuts from '../components/collections/img/donuts.jpg'
import sushi from '../components/collections/img/sushi.jpg'

const recipeList = [
	{
		id: 1,
		title: 'Super Delicious',
		text: 'Spinach and Cheese Pasta',
		img: one,
	},
	{
		id: 2,
		title: 'Super Delicious',
		text: 'Fancy Glazed Donuts',
		img: two,
	},
	{
		id: 3,
		title: 'Super Delicious',
		text: 'Mighty Cheesy Breakfast Burger',
		img: three,
	},
]
const recipeListTwo = [
	{
		id: 1,
		title: 'Super Delicious',
		text: 'Spinach and Cheese Pasta',
		img: four,
	},
	{
		id: 2,
		title: 'Super Delicious',
		text: 'Fancy Glazed Donuts',
		img: five,
	},
	{
		id: 3,
		title: 'Super Delicious',
		text: 'Mighty Cheesy Breakfast Burger',
		img: six,
	},
]

const popularCateg = [
	{
		id: 1,
		title: 'Popular Categories',
		text: 'Pasta',
		img: pasta,
	},
	{
		id: 2,
		title: 'Popular Categories',
		text: 'Pizza',
		img: pizza,
	},
	{
		id: 3,
		title: 'Popular Categories',
		text: 'Vegan',
		img: vegan,
	},
	{
		id: 3,
		title: 'Popular Categories',
		text: 'Desserts',
		img: desserts,
	},
	{
		id: 3,
		title: 'Popular Categories',
		text: 'Smoothies',
		img: smoothies,
	},
	{
		id: 3,
		title: 'Popular Categories',
		text: 'Pa',
		img: pa,
	},
]

const collectionsList = [
	{
		id: 1,
		title: 'Hand-Picked Collections',
		text: 'Sushi Combos for your Next Party',
		img: sushi,
		countRecipe: 156,
	},
	{
		id: 1,
		title: 'Hand-Picked Collections',
		text: 'Everything Bagel',
		img: bagel,
		countRecipe: 156,
	},
	{
		id: 1,
		title: 'Hand-Picked Collections',
		text: 'Cook Like a Chef',
		img: chef,
		countRecipe: 156,
	},
	{
		id: 1,
		title: 'Hand-Picked Collections',
		text: 'The Ultimate Cookie Frenzy',
		img: dinner,
		countRecipe: 156,
	},
	{
		id: 1,
		title: 'Hand-Picked Collections',
		text: 'For the Love of Donuts',
		img: cookie,
		countRecipe: 156,
	},
	{
		id: 1,
		title: 'Hand-Picked Collections',
		text: 'Exquisite Dinner Recipe Ideas',
		img: donuts,
		countRecipe: 156,
	},
]

import breakfast from '../components/latestRecipes/img/breakfast.jpg'
import brownies from '../components/latestRecipes/img/brownies.jpg'
import burgers from '../components/latestRecipes/img/burgers.jpg'
import carrot from '../components/latestRecipes/img/carrot.jpg'
import chips from '../components/latestRecipes/img/chips.jpg'
import crabbery from '../components/latestRecipes/img/crabbery.jpg'
import cupcakes from '../components/latestRecipes/img/cupcakes.jpg'
import dried from '../components/latestRecipes/img/dried.jpg'
import eggs from '../components/latestRecipes/img/eggs.jpg'
import jar from '../components/latestRecipes/img/jar.jpg'
import noodles from '../components/latestRecipes/img/noodles.jpg'
import oatmeal from '../components/latestRecipes/img/oatmeal.jpg'
import panacotta from '../components/latestRecipes/img/panacotta.jpg'
import pancakes from '../components/latestRecipes/img/pancakes.jpg'
import rice from '../components/latestRecipes/img/rice.jpg'
import roasted from '../components/latestRecipes/img/roasted.jpg'
import sMilkshake from '../components/latestRecipes/img/sMilkshake.jpg'
import salad from '../components/latestRecipes/img/salad.jpg'
import sandwich from '../components/latestRecipes/img/sandwich.jpg'
import sauce from '../components/latestRecipes/img/sauce.jpg'
import scores from '../components/latestRecipes/img/scores.jpg'
import smoothie from '../components/latestRecipes/img/smoothie.jpg'
import soup from '../components/latestRecipes/img/soup.jpg'
import tea from '../components/latestRecipes/img/tea.jpg'

const latestRecipes = [
	{
		id: 1,
		text: 'Caramel Strawberry Milkshake',
		img: sMilkshake,
	},
	{
		id: 2,
		text: 'Cashew Vegan Rice',
		img: rice,
	},
	{
		id: 3,
		text: 'Smoked Salmon Salad Sandwich',
		img: sandwich,
	},
	{
		id: 4,
		text: 'Salmon in Creamy Sun Dried Tomato Sauce ',
		img: dried,
	},
	{
		id: 5,
		text: 'Healthy Jam Waffle Breakfast',
		img: breakfast,
	},
	{
		id: 6,
		text: 'Chocolate and Banana Jar Cake',
		img: jar,
	},
	{
		id: 7,
		text: 'Caramel Blueberry Scones',
		img: scores,
	},
	{
		id: 8,
		text: 'Blueberry Carrot Cake',
		img: carrot,
	},
	{
		id: 9,
		text: 'Vegan Cauliflower Salad',
		img: salad,
	},
	{
		id: 10,
		text: 'Roasted Red Pepper Soup',
		img: soup,
	},

	{
		id: 11,
		text: 'Silky Smooth Panacotta',
		img: eggs,
	},
	{
		id: 12,
		text: 'Pork Shoulder Cashew Noodles',
		img: noodles,
	},
	{
		id: 13,
		text: 'Gourmet Fillet in Roasted Almond Sauce',
		img: roasted,
	},
	{
		id: 14,
		text: 'Cheesy Bacon Burger Sliders',
		img: burgers,
	},
	{
		id: 15,
		text: 'Fig and Raisins Oatmeal',
		img: oatmeal,
	},
	{
		id: 16,
		text: 'Silky Smooth Panacotta',
		img: panacotta,
	},

	{
		id: 17,
		text: 'Triple Decker Cranberry Cake',
		img: crabbery,
	},
	{
		id: 18,
		text: 'Very Berry Healthy Summer Smoothie',
		img: smoothie,
	},
	{
		id: 19,
		text: 'Crispy Orange Chips',
		img: chips,
	},
	{
		id: 20,
		text: 'Tumeric Lavendar Tea',
		img: tea,
	},
	{
		id: 21,
		text: 'Blue Velvet Brownies',
		img: brownies,
	},
	{
		id: 22,
		text: 'Birthday Cupcakes',
		img: cupcakes,
	},
	{
		id: 23,
		text: 'Gourmet Fillet in Roasted Almond Sauce',
		img: sauce,
	},

	{
		id: 24,
		text: 'Four Ingredient Oatmeal Pancakes',
		img: pancakes,
	},
	{
		id: 25,

		text: 'Spinach and Cheese Pasta',
		img: one,
	},
	{
		id: 26,

		text: 'Fancy Glazed Donuts',
		img: two,
	},
	{
		id: 27,
		text: 'Mighty Cheesy Breakfast Burger',
		img: three,
	},
	{
		id: 28,

		text: 'Mighty Cheesy Breakfast Burger',
		img: six,
	},
]
export {
	collectionsList,
	latestRecipes,
	popularCateg,
	recipeList,
	recipeListTwo,
}
