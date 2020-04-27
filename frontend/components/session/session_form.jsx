import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({
      username: '',
      password: ''
    });
  }

  render() {
    let header;
    let form;

    if (this.props.formType === 'login') {
      header = <h2>Login</h2>;

      form =
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          </label>
          <br />
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>
          <button>Login</button>
        </form>;
    }

    if (this.props.formType === 'signup') {
      header = <h2>SignUp</h2>;

      form =
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          </label>
          <br />
          <label>Email:
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>
          <br />
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>
          <button>Sign Up</button>
        </form>;
    }

    return (
      <div>
        {this.props.errors.map(error => {
          return (
            <strong>
              {error}
            </strong>
          )
        })}
        {header}
        {form}
      </div>
    );
  }
}

export default SessionForm;