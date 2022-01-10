import React, {Component} from 'react'

class Image extends Component {
	src = ""
	render() {
		this.src = ""
		this.src = this.src + 
		this.props.type +
		this.props.category + 
		this.props.dark + 
		this.props.mockup + 
		this.props.color
		return <img 
		className = {`main__result-image result-image ` + `${this.props.mockup ? "no-shadow" : ""}`}
		src={`./ui/${this.src}.png`} 
		alt="" 
		/>
	}
}

export default Image