import React, { Component } from "react";
import Navigation from "./Navigation";
import Tabs from "./Tabs";
import Button from "./Button";
import Image from "./Image";
import Switch from "./Switch";
import Toggle from "./Toggle";
import Picker from "./Picker";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import Spinner from "./Spinner";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Navigation />
        <div className="main__type mobile-only">
          <h2 className="main__type-title h2-title">Select UI type</h2>
          <Switch setType={this.props.setType} type={this.props.type} />
        </div>

        <div className="main__tabs mobile-only">
          <h2 className="main__tabs-title h2-title desktop-only">
            Choose a category
          </h2>
          <Tabs
            setCategory={this.props.setCategory}
            type={this.props.type}
            category={this.props.category}
            initialCategory={this.props.category}
            position="main"
          />
        </div>

        <div className="main__result">
          <div className="main__title-container">
            <h2 className="main__result-title h2-title js-result-title">
              Result
            </h2>
            <Spinner />
          </div>
          <Image
            type={this.props.type}
            category={this.props.category}
            dark={this.props.dark}
            mockup={this.props.mockup}
            color={this.props.color}
            startLoading={this.props.startLoading}
            finishLoading={this.props.finishLoading}
          />
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
            className="button_download-float"
          >
            Download .png
          </Button>
        </div>

        <div className="main__customize mobile-only">
          <h2 className="main__customize-title h2-title">Customize</h2>
          <Picker
            className="main__picker"
            setColor={this.props.setColor}
            darkMode={this.props.darkMode}
            color={this.props.color}
          />
          <div className="main__toggle-wrap">
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

        <div className="main__share mobile-only">
          <h2 className="main__share-title h2-title">Share with friends</h2>
          <div className="main__share-links">
            <a
              className="main__twitter share-link"
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
              className="main__facebook share-link"
              href={`http://www.facebook.com/share.php?u=${encodeURIComponent(
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
        <div className="main__about about">
          <div className="about__textarea">
            <div className="about__large-text">
              UI Generator was brought to you by{" "}
              <a
                className="link"
                href="https://unicornplatform.com?ref=ui"
                target="_blank"
              >
                Unicorn&nbsp;Platform
              </a>{" "}
              😎
            </div>
            <div className="about__small-text">
              <p>
                Unicorn Platform is a simple landing page builder. It is a tool
                for busy startup founders and marketeers.
              </p>
              <p>
                Sign up and join <b>16,448</b> makers.
              </p>
            </div>
          </div>
          <Button
            className="about__button"
            htmlTag="a"
            buttonType="ghost"
            href="https://unicornplatform.com?ref=ui"
            target="_blank"
          >
            Try Unicorn Platform for free
          </Button>
          {/*<span className="about__info info">Create 1 free website. No credit card required.</span>*/}
        </div>
        <div className="main__testimonials testimonials">
          <Testimonial
            name="David A. Chang"
            info="Co-Founder of Sidewise"
            photo="photo.png"
          >
            Unicorn Platform is by far the <b>easiest tool</b> I've ever used to
            launch a landing page.
          </Testimonial>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Main;
