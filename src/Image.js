import React, {Component} from 'react'

class Image extends Component {
	src = ""
	check = () => {
		console.log("Loaded")
	}
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
		onLoad={() => this.check()}
		/>
	}
}

export default Image