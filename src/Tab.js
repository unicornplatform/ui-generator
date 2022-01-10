import React, {Component} from 'react'

class Tab extends Component {
	iconsDesktop = ["equalizer",
	"donut_large", 
	"dashboard", 
	"view_kanban", 
	"table_view",
	"account_balance_wallet",
	"event_note",
	"question_answer",
	]
	render() {
		if (this.props.deviceType == 0) {
			this.iconsDesktop = ["equalizer",
			"donut_large", 
			"dashboard", 
			"view_kanban", 
			"table_view",
			"account_balance_wallet",
			"event_note",
			"question_answer",
			]
		} else {
			this.iconsDesktop = ["lock",
			"question_answer", 
			"person", 
			"thumb_up_alt", 
			"pie_chart",
			"shopping_cart",
			"credit_card",
			"music_note",
			]
		}
		return (
			<div 
			className={"tabs__tab " + (this.props.type == this.props.selected ? "tabs__tab_active" : "")}
			onClick = {() => this.props.onClick(this.props.type)}
			>
				<span className="material-icons material-icons-round">{this.iconsDesktop[this.props.type]}</span>
				<span className="tabs__text">{this.props.children}</span>
			</div>
		)
	}
}

export default Tab