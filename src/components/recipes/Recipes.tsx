// import StarRating from "../starsRating/StarRating";
import { IRecipe } from '../interfaces/index'
import Recipe from '../recipe/Recipe'
import './_recipes.scss'
// import './_recipes.scss'

interface Props {
	title: string
	recipeO: IRecipe[]
}
const Recipes = ({ title, recipeO }: Props) => {
	return (
		<section>
			<div className='container'>
				<div className='recipe__inner'>
					<div className='recipe__title'>
						<h2>{title}</h2>
					</div>
					<div className='recipe-list'>
						{recipeO.map((recipe, index) => {
							return <Recipe text={recipe.text} img={recipe.img} key={index} />
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Recipes
