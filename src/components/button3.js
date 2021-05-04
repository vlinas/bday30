import React from 'react';

export default class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled : false
    };
  }

  handleClick = (event) => {
    if (this.state.disabled) {
        return;
    }
  // const { vildziunas } = this.state;

   if (window.confirm("Are you sure?")) {

      this.setState({disabled: true});
      localStorage.setItem('is disabled?', this.state.disabled);

    } else {
      console.log('Cancelled');
    }
    
}

  render() {
    return (
      <div>
        <button onClick={this.handleClick} disabled={this.state.disabled}>
            {this.state.disabled ? 'Sending...' : 'Send'}
        </button>
      </div>
    );
  }
}