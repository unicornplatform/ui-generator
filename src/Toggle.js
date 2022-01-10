import React,{Component} from 'react'

class Toggle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: ((this.props.type == 0 && this.props.dark ==1) ||  (this.props.type == 1 && this.props.mockup ==1)? 1 : 0),
		}
	}
	handleClick = (type) => {
		(this.state.active ? 
			this.setState({active: 0,}) : 
			this.setState({active: 1,})
		)

		if (type == 0) {
			this.props.setDark(+!(this.props.dark))
			const url = new URL(window.location);
			url.searchParams.set('dark', +!(this.props.dark));
			window.history.pushState(null, '', url.toString());
		} else {
			this.props.setMockup(+!(this.props.mockup))
			const url = new URL(window.location);
			url.searchParams.set('mockup', +!(this.props.mockup));
			window.history.pushState(null, '', url.toString());
		}
	}
	render() {
		if (this.props.type==0) {
		return (
			<div className="toggle">
				<span className="toggle__text">{this.props.children}</span>
				<button onClick={() => this.handleClick(this.props.type)} 
				className={
					"toggle__button " + (this.props.dark==1 ? "toggle__button_active" : "")
				}
				>
				</button>
			</div>
		)
	} else {
		return (
			<div className="toggle">
				<span className="toggle__text">{this.props.children}</span>
				<button onClick={() => this.handleClick(this.props.type)} 
				className={
					"toggle__button " + (this.props.mockup==1 ? "toggle__button_active" : "")
				}
				>
				</button>
			</div>
		)
		}
	}

}

export default Toggle