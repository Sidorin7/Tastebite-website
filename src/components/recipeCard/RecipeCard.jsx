import './_recipeCard.scss'

const RecipeCard = ({ img, text }) => {
	return (
		<div className='recipe-list__item'>
			<img className='recipe-list__item--img' src={img} alt='' />

			<div className='recipe-list__item--text'>{text}</div>
		</div>
	)
}

export default RecipeCard
