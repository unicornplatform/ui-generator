import React, {Component} from 'react'
import Switch from './Switch'
import Picker from './Picker'
import Toggle from './Toggle'

class Sidebar extends Component {
	render() {
		return (
			<div className="sidebar">
					<div className="sidebar__logo-box">
						<a className="sidebar__logo-link" href="/" target="_self">
							<img className="sidebar__logo" src="logo.svg" alt="" />
							<span className="sidebar__name">UI Generator</span>
						</a>
					</div>

						<div className="sidebar__options-wrapper">

							<div className="sidebar__type-box">
								<h3 className="sidebar__title h3-title">UI Type</h3>
								<Switch 
								setType = {this.props.setType}
								type={this.props.type}
								/>
							</div>

							<div className="sidebar__color-picker">
								<h3 className="sidebar__title h3-title">Color</h3>
								<Picker 
								setColor = {this.props.setColor}
								darkMode={this.props.darkMode}
								color={this.props.color}
								/>
							</div>

							<div className="sidebar__appearance">
								<h3 className="sidebar__title h3-title">Appearance</h3>
									<div className="sidebar__toggle-wrapper">
										<Toggle 
										type={0}
										setDark = {this.props.setDark}
										dark={this.props.dark}
										>
										Dark background
										</Toggle>
										<Toggle 
										type={1}
										setMockup = {this.props.setMockup}
										mockup={this.props.mockup}
										>
										Mockup
										</Toggle>
									</div>
							</div>

							<div className="sidebar__share">
								<h3 className="sidebar__title h3-title">Share with friends</h3>
								<div className="sidebar__share-links">
									<a className="sidebar__twitter share-link" 
									href={`https://twitter.com/intent/tweet?text=I%20made%20this%20awesome%20UI%20in%20just%20a%20few%20seconds⚡️%20Check%20it%20out%20here:&url=${encodeURIComponent(document.URL)}`}
									target="popup"
									onClick={() => {window.open(this.href,'popup','width=600,height=600'); return false;} }
									>
										<img src="twitter.svg" alt="" />
									</a>
									<a className="sidebar__facebook share-link" 
									href={`http://www.facebook.com/share.php?t=123&u=${encodeURIComponent(document.URL)}`}
									target="popup"
									onClick={() => {window.open(this.href,'popup','width=600,height=600'); return false;} }
									>
										<img src="facebook.svg" alt="" />
									</a>
								</div>
							</div>

						</div>



				</div>

		)
	}
}

export default Sidebar