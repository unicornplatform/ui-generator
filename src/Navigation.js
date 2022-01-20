import React, {Component} from 'react'
import Button from './Button'
import Burger from './Burger'

class Navigation extends Component {
	render() {
		return (
			<div className="navigation">
				<div className="navigation__container container">
					<div className="sidebar__logo-box mobile-only">
						<a className="sidebar__logo-link" href="/" target="_self">
							<img className="sidebar__logo" src="logo.svg" alt="" />
							<span className="sidebar__name">UI Generator</span>
						</a>
					</div>
					<div className="navigation__description desktop-only">
						<p>Generate and download mockup UI for your design needs. 100% free.</p>
						<p>Made by folks from <a className="link" href="https://unicornplatform.com?ref=ui" target="_blank">Unicorn Platform</a>.</p>
					</div>
					<Button target="_blank" className="desktop-only button_ph" htmlTag="a" buttonType="primary" href="https://producthunt.com">Support us on Product Hunt 😻</Button>
					<Burger className="mobile-only" />
				</div>
				
						

			</div>
		)
	}
}

export default Navigation