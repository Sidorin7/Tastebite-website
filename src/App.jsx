import Collections from './components/collections/Collections'
import Header from './components/header/Header'
import LatestRecipes from './components/latestRecipes/LatestRecipes'
import Navbar from './components/navbar/Navbar'
import Newsletter from './components/newsletter/Newsletter'
import PopularCateg from './components/popularCateg/PopularCateg'
import Recipes from './components/recipes/Recipes'
import { recipeList, recipeListTwo } from './helpers/recipeList'
import './styles/_main.scss'
import './styles/base/_reset.scss'

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<Recipes title='Super Delicious' recipeO={recipeList} />
			<Recipes title='Sweet Tooth' recipeO={recipeListTwo} />
			<PopularCateg title='Popular Categories' />
			<Newsletter />
			<Collections title='Hand-Picked Collections' />
			<LatestRecipes title='Latest Recipes' />
		</>
	)
}

export default App
