import React, { Component } from "react";

class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: props.selected,
    };
    this.selectRadioButton = this.selectRadioButton.bind(this);
  }
  selectRadioButton(event) {
    this.props.changeGameMode(event.target.value);
    this.setState({
      selectedOption: event.target.value,
    });
  }

  render() {
    return (
      <div className="radiobtn">
        <div className="radio1">
          <label>
            <input
              type="radio"
              value="BOT"
              checked={this.state.selectedOption === "BOT"}
              onChange={this.selectRadioButton}
            />
            BOT
          </label>
        </div>
        <div className="radio2">
          <label>
            <input
              type="radio"
              value="HUMAN"
              checked={this.state.selectedOption === "HUMAN"}
              onChange={this.selectRadioButton}
            />
            HUMAN
          </label>
        </div>
        {/* </form> */}
      </div>
    );
  }
}

export default RadioButton;
