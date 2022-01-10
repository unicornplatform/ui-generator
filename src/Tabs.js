import React, {Component} from 'react'
import Tab from './Tab'

class Tabs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: this.props.initialCategory,
		}
	}
	changeValue = (newValue) => {
		this.setState({selected: newValue})
		this.props.setCategory(newValue)
		const url = new URL(window.location);
		url.searchParams.set('category', newValue);
		window.history.pushState(null, '', url.toString());
	}
	render() {
		return (
			<div className="tabs">
				<div className="tabs__container">
					<Tab onClick={this.changeValue} type={0} selected={this.state.selected} deviceType={this.props.type}>
					{this.props.type==1 ? "Sign up" : "Dashboard #1"}
					</Tab>
					<Tab onClick={this.changeValue} type={1} selected={this.state.selected} deviceType={this.props.type}>
					{this.props.type==1 ? "Messenger" : "Dashboard #2"}
					</Tab>
					<Tab onClick={this.changeValue} type={2} selected={this.state.selected} deviceType={this.props.type}>
					{this.props.type==1 ? "Profile" : "Dashboard #3"}
					</Tab>
					<Tab onClick={this.changeValue} type={3} selected={this.state.selected} deviceType={this.props.type}>
					{this.props.type==1 ? "Social feed" : "Kanban"}
					</Tab>
					<Tab onClick={this.changeValue} type={4} selected={this.state.selected} deviceType={this.props.type}>
					{this.props.type==1 ? "Dashboard" : "CRM"}
					</Tab>
					<Tab onClick={this.changeValue} type={5} selected={this.state.selected} deviceType={this.props.type}>
					{this.props.type==1 ? "E-commerce" : "Finance"}
					</Tab>
					<Tab onClick={this.changeValue} type={6} selected={this.state.selected} deviceType={this.props.type}>
					{this.props.type==1 ? "Finance" : "Calendar"}
					</Tab>
					<Tab onClick={this.changeValue} type={7} selected={this.state.selected} deviceType={this.props.type}>
					{this.props.type==1 ? "Music app" : "Messenger"}
					</Tab>
				</div>
			</div>
		)
	}
}

export default Tabs