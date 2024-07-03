import './_recipeCard.scss'

interface Props {
	img: string
	text: string
}
const RecipeCard = ({ img, text }: Props) => {
	return (
		<div className='recipe-list__item'>
			<img className='recipe-list__item--img' src={img} alt='' />

			<div className='recipe-list__item--text'>{text}</div>
		</div>
	)
}

export default RecipeCard
