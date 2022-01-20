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
						<p>Generate and download mockup UI for your design needs. 100% free.</p>
						<p>Made by folks from <a className="link" href="https://unicornplatform.com?ref=ui" target="_blank">Unicorn Platform</a>.</p>
					</div>
					<Button target="_blank" className="mobile-only navigation__mobile-menu-button button_ph" htmlTag="a" buttonType="primary" href="https://unicornplatform.com?ref=ui">Support us on Product Hunt 😻</Button>
			</div>
			</>
		)
	}
}

export default Burger