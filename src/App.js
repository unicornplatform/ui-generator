import React, {Component} from "react";

import "query-string";

import "./App.scss";

import Sidebar from "./Sidebar";
import Main from "./Main";

import ReactTooltip from "react-tooltip";

class App extends Component {
    //localhost:3000/?type=0&category=0&dark=0&mockup=0&color=0

    constructor(props) {
        const queryString = require("query-string");
        const parsed = queryString.parse(window.location.search);

        super(props);
        this.state = {
            type: parsed.type == 0 || parsed.type == 1 ? parseInt(parsed.type) : 0,
            category:
                parsed.category == 0 ||
                parsed.category == 1 ||
                parsed.category == 2 ||
                parsed.category == 3 ||
                parsed.category == 4 ||
                parsed.category == 5 ||
                parsed.category == 6 ||
                parsed.category == 7
                    ? parseInt(parsed.category)
                    : 0,
            dark: parsed.dark == 0 || parsed.dark == 1 ? parseInt(parsed.dark) : 0,
            mockup:
                parsed.mockup == 0 || parsed.mockup == 1 ? parseInt(parsed.mockup) : 0,
            color:
                parsed.color == 0 ||
                parsed.color == 1 ||
                parsed.color == 2 ||
                parsed.color == 3 ||
                parsed.color == 4 ||
                parsed.color == 5 ||
                parsed.color == 6 ||
                parsed.color == 7
                    ? parseInt(parsed.color)
                    : 0,
            imageIsLoading: false,
        };
    }

    setType = (value) => {
        this.setState({
            type: value,
        });
    };

    setCategory = (value) => {
        this.setState({
            category: value,
        });
    };

    setDark = (value) => {
        this.setState({
            dark: value,
        });
    };

    setMockup = (value) => {
        this.setState({
            mockup: value,
        });
    };

    setColor = (value) => {
        this.setState({
            color: value,
        });
    };

    startLoading = () => {
        document.querySelector(".js-spinner").classList.add("js-is-active");
        document.querySelector(".js-result-title").classList.add("js-is-loading");
    };
    finishLoading = () => {
        document.querySelector(".js-spinner").classList.remove("js-is-active");
        document
            .querySelector(".js-result-title")
            .classList.remove("js-is-loading");
    };

    render() {
        return (
            <div className="wrapper">
                <ReactTooltip
                    className="tooltip-custom"
                    content={this.props.children}
                    place="top"
                    type="dark"
                    effect="solid"
                />
                <Sidebar
                    setType={this.setType}
                    setDark={this.setDark}
                    setMockup={this.setMockup}
                    setColor={this.setColor}
                    darkMode={this.state.dark}
                    type={this.state.type}
                    dark={this.state.dark}
                    mockup={this.state.mockup}
                    color={this.state.color}
                    category={this.state.category}
                    setCategory={this.setCategory}
                />
                <Main
                    setType={this.setType}
                    setDark={this.setDark}
                    setMockup={this.setMockup}
                    setColor={this.setColor}
                    darkMode={this.state.dark}
                    type={this.state.type}
                    category={this.state.category}
                    dark={this.state.dark}
                    mockup={this.state.mockup}
                    color={this.state.color}
                    setCategory={this.setCategory}
                    startLoading={this.startLoading}
                    finishLoading={this.finishLoading}
                />
            </div>
        );
    }
}

export default App;
