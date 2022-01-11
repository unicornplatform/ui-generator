import React, {Component} from 'react'

class Image extends Component {
	src = ""
	startLoad = () => {
		this.props.startLoading()
	}
	finishLoad = () => {
		this.props.finishLoading()
	}

	componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.category !== prevProps.category) {
    this.startLoad()
  }

  if (this.props.type !== prevProps.type) {
    this.startLoad()
  }

  if (this.props.color !== prevProps.color) {
    this.startLoad()
  }

  if (this.props.dark !== prevProps.dark) {
    this.startLoad()
  }

  if (this.props.mockup !== prevProps.mockup) {
    this.startLoad()
  }
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
		onLoad={() => this.finishLoad()}
		/>
	}
}

export default Image