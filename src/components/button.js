import React from 'react';

export default class SearchComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisabled: false
    }
  }

  handleSubmitClicked() {
    this.setState({
      isDisabled: true
    });

    setTimeout(
      function() {
        this.enableComponents()
      }.bind(this),
      3000
    );
  }

  enableComponents() {
    this.setState({
      isDisabled: false
    });
  }

  render() {
    return (
      <div>
        <button 
          disabled={this.state.isDisabled}
          onClick={this.handleSubmitClicked.bind(this)}
        >
          This fucking button 1
        </button>
      </div>
    );
  }
}