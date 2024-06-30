import { latestRecipes } from '../../helpers/recipeList'
import './_latestRecipe.scss'

const LatestRecipes = ({ title }) => {
	return (
		<section className='latestRecipes'>
			<div className='container'>
				<div className='latestRecipes__inner'>
					<div className='latestRecipes__title'>
						<h2>{title}</h2>
					</div>
					<div className='latestRecipes__list'>
						{latestRecipes.map((collection, index) => {
							return (
								<div className='collections-list__item' key={index}>
									<img
										className='collections-list__item--img'
										src={collection.img}
										alt={collection.text}
									/>
									<div className='down-row'>
										<div className='collections-list__item--text'>
											<p>{collection.text}</p>
										</div>
										<a className='collections-list__item--count'>
											{collection.countRecipe} Recipes
										</a>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default LatestRecipes
