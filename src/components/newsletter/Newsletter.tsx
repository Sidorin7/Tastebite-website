import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { MyForm } from '../interfaces/form.interface'
import './_newsletter.scss'

const Newsletter = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<MyForm>({
		mode: 'onChange',
	})
	const submit: SubmitHandler<MyForm> = data => {
		console.log(data)
		reset()
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
									required: 'Email is require field!',
									pattern: {
										value:
											/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
										message: 'Please enter valid email!',
									},
								})}
								// aria-invalid={errors.email ? true : false}
								placeholder='Email Address'
							/>
							<button type='submit' className='form-btn'>
								JOIN
							</button>
							{errors?.email && (
								<div style={{ color: 'red' }}>{errors.email.message}</div>
							)}
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
