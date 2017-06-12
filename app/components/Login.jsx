import React from 'react';

export default class Login extends React.Component {
  render () {
    return(
      <div>
        <h1 className="page-title">Payroll Login</h1>

        <did className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout">
              <h3>Login</h3>
              <p>Login with username and password.</p>
              <input type="text" ref="username" placeholder="username"/>
              <input type="password" ref="password" placeholder=""/>
              <button className="button">Submit</button>
              <p>
                Login with GitHub account bellow.
              </p>
              <button className="button">Login with Github</button>
            </div>
          </div>
        </did>
      </div>
    );
  }
};
