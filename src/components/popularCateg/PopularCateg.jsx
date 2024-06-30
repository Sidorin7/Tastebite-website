// import { categoriesList } from '../../helpers/popularCateg'

import { popularCateg } from '../../helpers/recipeList'

import './_popularCateg.scss'
const PopularCateg = ({ title }) => {
	return (
		<section className='categories'>
			<div className='container'>
				<div className='categories__inner'>
					<div className='categories__title'>
						<h2>{title}</h2>
					</div>
					<div className='categories-list'>
						{popularCateg.map((categories, index) => {
							return (
								<div className='categories-list__item' key={index}>
									<img
										className='categories-list__item--img'
										src={categories.img}
										alt=''
									/>
									<div className='categories-list__item--text'>
										{categories.text}
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

export default PopularCateg
