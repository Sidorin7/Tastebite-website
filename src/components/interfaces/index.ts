export interface IRecipe {
	id: number
	img: string
	text: string
	title: string
}

export interface ICollection extends IRecipe {
	countRecipe: number
}
