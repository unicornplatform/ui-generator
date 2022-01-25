import React, { Component } from "react";

class SwitchButton extends Component {
  render() {
    console.log();
    return (
      <button
        onClick={() => {
          this.props.changeValue(this.props.i);
        }}
        className={
          "switch__button " +
          (this.props.selected == this.props.i
            ? "switch__button_selected "
            : "")
        }
      >
        {this.props.children || "Desktop"}
      </button>
    );
  }
}

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.type,
    };
  }
  changeValue = (newValue) => {
    this.setState({
      selected: newValue,
    });
    this.props.setType(newValue);
    const url = new URL(window.location);
    url.searchParams.set("type", newValue);
    window.history.pushState(null, "", url.toString());
  };

  render() {
    return (
      <div className={"switch " + (this.props.className || "")}>
        <SwitchButton
          selected={this.props.type}
          changeValue={this.changeValue}
          setTyoe={this.setType}
          i={0}
          active={this.state.selected}
        >
          Desktop
        </SwitchButton>
        <SwitchButton
          selected={this.props.type}
          changeValue={this.changeValue}
          setTyoe={this.setType}
          i={1}
          active={this.state.selected}
        >
          Mobile
        </SwitchButton>
      </div>
    );
  }
}

export default Switch;
