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
                Report bugs:
                <li>
                  <a
                    className="u-email"
                    href="mailto:sloane@northlandcontrols.com"
                  >
                    sloane@northlandcontrols.com
                  </a>
                </li>
                <li>
                  <a href="https://github.com/LoaneShark/PS-Dashboard/issues">
                    GitHub Issues Tracker
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="text-muted">
                Created on 11/7/2019. Last updated on 2/4/2020.
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
