import React, {Component} from 'react'

class Spinner extends Component {
	render() {
		return (
			<div className="spinner">
			  <svg viewBox="0 0 100 100">
			    <circle cx="50" cy="50" r="20" />
			  </svg>
			</div>
		)
	}
}

export default Spinner