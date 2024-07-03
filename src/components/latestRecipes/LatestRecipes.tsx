import { useState } from 'react'
import { latestRecipes } from '../../helpers/recipeList'
import { IRecipe } from '../interfaces'
import RecipeCard from '../recipeCard/RecipeCard.jsx'
import './_latestRecipe.scss'

interface Props {
	title: string
	latestRecipes: IRecipe[]
	index: number
}

const LatestRecipes = ({ title }: Props) => {
	const [visibleProducts, setVisibleProducts] = useState(24)
	const handleShowMore = () => {
		setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 4)
	}
	return (
		<section className='latestRecipes'>
			<div className='container'>
				<div className='latestRecipes__inner'>
					<div className='latestRecipes__title'>
						<h2>{title}</h2>
					</div>
					<div className='latestRecipes__list'>
						{latestRecipes.slice(0, visibleProducts).map((lRecipes, index) => {
							return (
								<RecipeCard
									text={lRecipes.text}
									img={lRecipes.img}
									key={index}
								/>
							)
						})}
					</div>
					{visibleProducts < latestRecipes.length && (
						<div className='latestRecipes__box'>
							<button className='latestRecipes__btn' onClick={handleShowMore}>
								Load More
							</button>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default LatestRecipes
