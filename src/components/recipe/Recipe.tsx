import StarRating from '../starsRating/StarRating'

import './_recipe.scss'

interface Props {
	img: string
	text: string
}

const Recipe = ({ img, text }: Props) => {
	return (
		<section className='recipe'>
			<div className='recipe__inner'>
				<div className='recipe-list'>
					<div className='recipe-list__item'>
						<img className='recipe-list__item--img' src={img} alt='' />
						<div>
							<StarRating />
						</div>
						<div className='recipe-list__item--text'>{text}</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Recipe
