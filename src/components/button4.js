import React from 'react';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class ButtonComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      rememberMe : false,
      name: this.props.name,
      message: this.props.description,
    };
  }

  componentDidMount() {
    const rememberMe = localStorage.getItem(this.props.name) === 'true';
    this.setState({ rememberMe });
    console.log(rememberMe)
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("🎉 Dovana atkeliauja!"))
      .catch(error => alert(error));
    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleClick = () => {

   if (window.confirm("Ar tikrai? Dovaną galima naudoti tik 1 kartą!")) {
    // const { rememberMe } = this.state;

    localStorage.setItem(this.props.name, true);
    this.setState({rememberMe: true});
    this.handleSubmit();
    // console.log(rememberMe);
    // console.log('linas', this.props.name);
    } else {
      console.log('Cancelled');
    }
    
}

  render() {
    const { name, message } = this.state;
    return (
      <div className="box">
        <h1>{this.props.emoji}</h1>
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
        <p className="date">Galioja iki: {this.props.date}</p>
        <form onSubmit={this.handleSubmit} className="hidden">
          <p>
            <label>
              <input type="text" name="name" value={name} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              <textarea name="message" value={message} onChange={this.handleChange} />
            </label>
          </p>
        </form>

        <button className="btn" onClick={this.handleClick} disabled={this.state.rememberMe}>
            {this.state.rememberMe ? 'Išnaudota :(' : 'Naudoti'}
        </button>
      </div>
    );
  }
}