import React, {Component} from 'react'

import Button from './Button'

class Burger extends Component {
	constructor(props) {
	 	super(props);
	 	this.state = {
	 		active: false,
	 	}
	}
	handleClick = () => {
		this.setState({
			active: !(this.state.active),
		})
		document.body.classList.toggle("js-lock")
	}
	render() {
		return(
			<>
			<div 
			onClick = {() => this.handleClick()}
			className={"burger " + 
			(this.props.className ? this.props.className : "") + " " +
			(this.state.active==true ? "js-active" : "")
			}
			>
				<span></span>
			</div>
			<div className={
				"navigation__mobile-menu mobile-only " + 
				(this.state.active==true ? "js-visible" : "")
			} 
			>
			<div className="navigation__description mobile-only">
						<p>Made by folks from <a className="link" href="https://unicornplatform.com?ref=ui" target="_blank">Unicorn Platform</a>.</p>
						<p>Unicorn Platform is a simple landing page builder for startups.</p>
					</div>
					<Button target="_blank" className="mobile-only navigation__mobile-menu-button" htmlTag="a" buttonType="ghost" href="https://unicornplatform.com?ref=ui">Try Unicorn Platform for free</Button>
			</div>
			</>
		)
	}
}

export default Burger