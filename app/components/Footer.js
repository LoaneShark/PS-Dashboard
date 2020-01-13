// @flow
import React, { Component } from 'react';
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

export default class Footer extends Component<Props> {
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
      <footer className="site-footer h-card">
        <data className="u-url" href="/" />

        <div className="container wrapper">
          <div className="row">
            <div className="col">
              <ul className="contact-list">
                <li className="p-name">Report issues to: </li>
                <li>
                  <a
                    className="u-email"
                    href="mailto:sloane@northlandcontrols.com"
                  >
                    sloane@northlandcontrols.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="text-muted">
                Created on 11/7/2019 by Santiago Loane. Last updated on
                11/8/2019.
              </p>
              <p className="text-muted">
                For internal Northland Controls use only.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
