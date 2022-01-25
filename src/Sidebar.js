import React, { Component } from "react";
import Switch from "./Switch";
import Picker from "./Picker";
import Toggle from "./Toggle";
import Tabs from "./Tabs";
import Button from "./Button"

class Sidebar extends Component {
	category = [
		["Dashboard\xa01", "Sign\xa0up"],
		["Dashboard\xa02", "Messenger"],
		["Dashboard\xa03", "Profile"],
		["Kanban", "Social\xa0feed"],
		["CRM", "Dashboard"],
		["Finance", "E‑commerce"],
		["Calendar", "Finance"],
		["Messenger", "Music\xa0app"],
	];

	render() {
		return (
			<div className="sidebar">
				<div className="sidebar__logo-box">
					<a
						className="sidebar__logo-link sidebar-only"
						href="/"
						target="_self"
					>
						<img className="sidebar__logo" src="logo.svg" alt="" />
						<span className="sidebar__name">UI Generator</span>
					</a>
					<div className="sidebar__description">
						<p>
							Generate and download mockup UI for your design needs. 100% free.
						</p>
						<p>
							Made by folks from{" "}
							<a
								className="link"
								href="https://unicornplatform.com?ref=ui"
								target="_blank"
							>
								Unicorn Platform
							</a>
							.
						</p>
					</div>
				</div>

				<div className="sidebar__options-wrapper">
					<div className="sidebar__type-box">
						<h3 className="sidebar__title h3-title">UI Type</h3>
						<Switch setType={this.props.setType} type={this.props.type} />
					</div>

					<div className="sidebar__category-box">
						<div className="category__wrapper">
							<h3 className="sidebar__title h3-title">Category</h3>
							<span className="category__subtitle">{`(${
								this.category[this.props.category][this.props.type]
							})`}</span>
						</div>

						<div className="sidebar__tabs">
							<Tabs
								setCategory={this.props.setCategory}
								type={this.props.type}
								category={this.props.category}
								initialCategory={this.props.category}
								position="sidebar"
							/>
						</div>
					</div>

					<div className="sidebar__color-picker">
						<h3 className="sidebar__title h3-title">Color</h3>
						<Picker
							setColor={this.props.setColor}
							darkMode={this.props.darkMode}
							color={this.props.color}
						/>
					</div>

					<div className="sidebar__appearance">
						<h3 className="sidebar__title h3-title">Appearance</h3>
						<div className="sidebar__toggle-wrapper">
							<Toggle
								type={0}
								setDark={this.props.setDark}
								dark={this.props.dark}
							>
								Dark background
							</Toggle>
							<Toggle
								type={1}
								setMockup={this.props.setMockup}
								mockup={this.props.mockup}
							>
								Mockup
							</Toggle>
						</div>
					</div>

					<div className="sidebar__share">
						<h3 className="sidebar__title h3-title">Share with friends</h3>
						<div className="sidebar__share-links">
							<a
								className="sidebar__twitter share-link"
								href={`https://twitter.com/intent/tweet?text=I've%20made%20an%20awesome%20UI%20in%20just%20a%20few%20seconds⚡️%20Check%20it%20out:&url=${encodeURIComponent(
									document.URL
								)}`}
								target="popup"
								onClick={() => {
									window.open(this.href, "popup", "width=600,height=600");
									return false;
								}}
							>
								<img src="twitter.svg" alt="" />
							</a>
							<a
								className="sidebar__facebook share-link"
								href={`http://www.facebook.com/share.php?t=123&u=${encodeURIComponent(
									document.URL
								)}`}
								target="popup"
								onClick={() => {
									window.open(this.href, "popup", "width=600,height=600");
									return false;
								}}
							>
								<img src="facebook.svg" alt="" />
							</a>
						</div>
					</div>
				</div>
				<div className="download-wrapper">
					<Button
						buttonType="primary"
						icon
						htmlTag="a"
						target="_self"
						type={this.props.type}
						category={this.props.category}
						dark={this.props.dark}
						mockup={this.props.mockup}
						color={this.props.color}
						download={true}
						className="button_download-static"
					>
						Download .png
					</Button>
				</div>
			</div>
		);
	}
}

export default Sidebar;
