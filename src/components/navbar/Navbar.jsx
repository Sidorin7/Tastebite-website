import { NavLink } from 'react-router-dom'
import './_navbar.scss'
import avatar from './img/nav-avatar.svg'
import logo from './img/nav-logo.svg'
import search from './img/nav-search.svg'

function Navbar() {
	return (
		<nav className='nav'>
			<div className='container'>
				<div className='nav__inner'>
					<div className='nav__inner-wrapper'>
						<div className='nav-logo'>
							<img src={logo} alt='' />
						</div>
						<ul className='nav-list'>
							<li className='nav-list__item'>
								<NavLink to='/'>Homepage</NavLink>
							</li>
							<li className='nav-list__item'>
								<NavLink to='/'>Recipe Page</NavLink>
							</li>
							<li className='nav-list__item'>
								<NavLink to='/'>Pages</NavLink>
							</li>
							<li className='nav-list__item'>
								<NavLink to='/'>Buy</NavLink>
							</li>
						</ul>
						<div className='right-box'>
							<div className='right-box__search'>
								<button>
									<img src={search} alt='' />
								</button>
							</div>
							<div className='right-box__avatar'>
								<img src={avatar} alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
