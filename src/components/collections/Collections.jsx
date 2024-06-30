import { collectionsList } from '../../helpers/recipeList'

import './_collections.scss'
const Collections = ({ title }) => {
	return (
		<section className='collections'>
			<div className='container'>
				<div className='collections__inner'>
					<div className='collections__title'>
						<h2>{title}</h2>
					</div>
					<div className='collections-list'>
						{collectionsList.map((collection, index) => {
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

export default Collections
