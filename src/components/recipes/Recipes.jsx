// import StarRating from "../starsRating/StarRating";

import Recipe from '../recipe/Recipe'
import './_recipes.scss'
// import './_recipes.scss'
const elementsPerPage = 0
const Recipes = ({ title, recipeO }) => {
	return (
		<section>
			<div className='container'>
				<div className='recipe__inner'>
					<div className='recipe__title'>
						<h2>{title}</h2>
					</div>
					<div className='recipe-list'>
						{recipeO.map((recipe, index) => {
							return (
								<Recipe
									text={recipe.text}
									img={recipe.img}
									title={recipe.title}
									key={index}
									index={index}
								/>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Recipes
