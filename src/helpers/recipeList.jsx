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

const latestRecipes = [
	{
		id: 1,
		title: 'Popular Categories',
		text: 'Desserts',
		img: desserts,
	},
]
export {
	collectionsList,
	latestRecipes,
	popularCateg,
	recipeList,
	recipeListTwo,
}
