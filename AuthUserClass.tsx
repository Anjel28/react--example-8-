import React, { Component } from 'react';



interface IState {
  isLogin: boolean;
}

class AuthUserClass extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  handleLogin = (): void => {
    this.setState({ isLogin: true });
  };

  handleLogout = (): void => {
    this.setState({ isLogin: false });
  };

  render() {
    return (
      <div className="container">
        <div className="row card p-4 mt-4">
          <div className="col-md-10">
            {this.state.isLogin ? (
              <h1>Welcome User</h1>
            ) : (
              <h1>Please Login For Dashboard</h1>
            )}
            {this.state.isLogin ? (
              <button className="btn btn-danger m-2" onClick={this.handleLogout}>
                Logout
              </button>
            ) : (
              <button className="btn btn-primary m-2" onClick={this.handleLogin}>
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AuthUserClass;
