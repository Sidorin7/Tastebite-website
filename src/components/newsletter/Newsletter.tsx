import React from 'react'

import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import './_newsletter.scss'

interface MyForm {
	email: string
}
const Newsletter = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<MyForm>()
	const submit: SubmitHandler<MyForm> = data => {
		console.log(data)
	}
	const error: SubmitErrorHandler<MyForm> = data => {
		console.log(data)
	}

	return (
		<section className='newsletter'>
			<div className='container'>
				<div className='newsletter__wrapper'>
					<div className='newsletter__inner'>
						<div className='newsletter__title'>
							<h2>Deliciousness to your inbox</h2>
						</div>
						<div className='newsletter__text'>
							<p>Enjoy weekly hand picked recipes and recommendations</p>
						</div>
						<form onSubmit={handleSubmit(submit, error)}>
							<input
								className='form-input'
								type='email'
								{...register('email', {
									required: true,
								})}
								aria-invalid={error.email ? true : false}
								placeholder='Email Address'
							/>
							<button className='form-btn'>JOIN</button>
						</form>
						<div className='newsletter-copy'>
							By joining our newsletter you agree to our Terms and Conditions
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Newsletter
