import React, {Component} from 'react'

const Button = function(arg) {
	const icon = <img className="button__icon" src="download.svg" alt="" />
	const ButtonTag = arg.htmlTag || "button"
	let src=""
	src = src + 
	"https://ui-generator.s3.amazonaws.com/" +
	arg.type +
	arg.category + 
	arg.dark + 
	arg.mockup +
	arg.color +
	".png"
		return (
			<ButtonTag href={(arg.href ? arg.href : (arg.download ? src : null))} 
			target={(arg.target ? arg.target : null)}
			className={"button button_" + (arg.buttonType ? arg.buttonType : "primary") + " " + (arg.className ? arg.className : "")}>
			{arg.icon ? icon : null}
			<span className="button__text">{arg.children}</span>
			</ButtonTag>
		)
}

export default Button

