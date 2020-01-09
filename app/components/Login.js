// @flow
import React, { Component } from 'react';
import northlandImage from '../.static/img/northland.png';
//  import { Link } from 'react-router-dom';
//  import routes from '../constants/routes.json';

/*
type Props = {
  increment: () => void,
  incrementIfOdd: () => void,
  incrementAsync: () => void,
  decrement: () => void,
  counter: number
};
*/

export default class Login extends Component<Props> {
  props: Props;

  render() {
    /*
    const {
      increment,
      incrementIfOdd,
      incrementAsync,
      decrement,
      counter
    } = this.props;
    */
    return (
      <div>
        <section className="h-card">
          <div className="d-flex row justify-content-between">
            <p className="display-2">
              <span className="text-nc-dark" id="title1">
                PS
              </span>
              <span className="text-nc-primary" id="title2">
                Dashboard
              </span>
            </p>
            <img src={northlandImage} alt="Northland Bear" height="120vw" />
          </div>
        </section>

        <hr className="my-4" />

        <div className="card">
          <div className="card-body">
            <p className="card-title h3 text-nc-primary">Login</p>
            <form>
              <div className="form group p-2">
                <label className="text-nc-dark" htmlFor="userInput">
                  User
                  <input
                    type="username"
                    className="form-control"
                    id="userInput"
                    placeholder="Domain/User"
                  />
                </label>
              </div>
              <div className="form-group p-2">
                <label className="text-nc-dark" htmlFor="passInput">
                  Password
                  <input
                    type="password"
                    className="form-control form-password"
                    id="passInput"
                    placeholder="Password"
                  />
                </label>
                <div className="form-group form-check">
                  <label
                    className="form-check-label text-nc-dark"
                    htmlFor="passCheck"
                  >
                    <input
                      type="checkbox"
                      className="form-check-input check-password"
                      id="passCheck"
                    />
                    Show
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-nc-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
