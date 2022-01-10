import React, {Component} from 'react'

class Footer extends Component {
	render() {
		return (
			<div className="main__footer footer">
				<div className="footer__container">
					<a className="footer__link"
					 href="https://twitter.com/unicornplatform" 
					 target="_blank" 
					 ><img className="footer__icon" src="twitter_mono.svg" alt="" /></a>
					<a className="footer__link"
					 href="https://fb.com/unicornplatform" 
					 target="_blank"
					 ><img className="footer__icon" src="facebook_mono.svg" alt="" /></a>
					<a className="footer__link"
					 href="https://www.instagram.com/unicornplatform" 
					 target="_blank"
					 ><img className="footer__icon" src="instagram_mono.svg" alt="" /></a>
				</div>
			</div>
		)
	}
}

export default Footer