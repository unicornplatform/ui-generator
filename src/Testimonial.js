import React, { Component } from "react";

class Testimonial extends Component {
  render() {
    return (
      <div className="testimonials__item">
        <img className="testimonials__icon" src="quote.svg" alt="" />
        <div className="testimonials__text">{this.props.children}</div>
        <div className="testimonials__author-box">
          <img className="testimonials__photo" src={this.props.photo} alt="" />
          <div className="testimonials__name-box">
            <div className="testimonials__name">{this.props.name}</div>
            <div className="testimonials__info">{this.props.info}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
