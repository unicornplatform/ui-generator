import React, {Component} from 'react'

class Color extends Component {
	color = ["#4D66F3","#6200EE","#FE5068", "#1DD1A1", "#FFDD59", "#FF9F43","#FF3F34","#2B2E4A"]
	render() {
		if (this.props.darkMode == 1) {
			this.color[0] = "#4BCFFA"
			this.color[1] = "#BA87F6"
			this.color[7] = "#FAFAFA"
		} else {
			this.color[0] = "#4D66F3"
			this.color[1] = "#6200EE"
			this.color[7] = "#2B2E4A"
		}
		

		return (
				<button 
				className={"picker__button " + (this.props.i == this.props.selected ? "picker__button_active" : "")}
				style={{backgroundColor: this.color[this.props.i]}}
				onClick = {() => this.props.onClick(this.props.i)}
				>
					<img className="picker__icon" src={((this.color[this.props.i] === "#FAFAFA" || this.color[this.props.i] === "#FFDD59") ? "check_black.svg" : "check.svg")} alt="" />
				</button>
		)
	}
}

class Picker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: this.props.color,
		}
	}
	
	changeValue = (newValue) => {
		this.setState({selected: newValue})
		this.props.setColor(newValue)
		const url = new URL(window.location);
		url.searchParams.set('color', newValue);
		window.history.pushState(null, '', url.toString());
	}

	render() {
		return(
			<div className={"picker " + (this.props.className ? this.props.className : "")}>
				<Color darkMode={this.props.darkMode} onClick = {this.changeValue} i={0} selected={this.props.color}/>
				<Color darkMode={this.props.darkMode} onClick = {this.changeValue} i={1} selected={this.props.color}/>
				<Color onClick = {this.changeValue} i={2} selected={this.props.color}/>
				<Color onClick = {this.changeValue} i={3} selected={this.props.color}/>
				<Color onClick = {this.changeValue} i={4} selected={this.props.color}/>
				<Color onClick = {this.changeValue} i={5} selected={this.props.color}/>
				<Color onClick = {this.changeValue} i={6} selected={this.props.color}/>
				<Color darkMode={this.props.darkMode} onClick = {this.changeValue} i={7} selected={this.props.color}/>
			</div>
		)
	}
}

export default Picker