// @flow
// import $ from 'jquery';
import React, { Component } from 'react';
import 'datatables.net';
import 'datatables.net-bs4';
import { render } from 'react-dom';
import $ from 'jquery';
import northlandNavImage from '../.static/img/northland-black-t.png';
import Login from './Login';
import NivoTest from './NivoDemo';
import DBQuery from './DBQuery';

//  import { Link } from 'react-router-dom';
//  import routes from '../constants/routes.json';

/* asset directories */
// const cssDir = '.static/css/';
// const jsDir = '.static/js/';
// const phpDir = '.static/php/';
// const htmlDir = '.static/html/';

const pageLogin = function pageLogin() {
  // $('#content').load(`${htmlDir}login.html`);
  const loginBox = new Login();
  render(loginBox.render(), document.getElementById('content'));
  $().ready(function pageReady() {
    // enables the "display password" checkbox functionality
    $('.check-password').on('change', function checkPass() {
      const isChecked = $(this).prop('checked');
      if (isChecked) {
        $('.form-password').attr('type', 'text');
      } else {
        $('.form-password').attr('type', 'password');
      }
    });
  });
};
const pageSysAdmin = function pageSysAdmin() {
  // $('#content').load(`${htmlDir}sysadmin.html`);
  console.log('SysAdmin Button');
};
const pageDBTest = function pageDBTest() {
  // $('#content').load(`${htmlDir}dbtest.html`);
  const testQuery = new DBQuery();
  render(<div id="resultDiv" />, document.getElementById('content'));
  testQuery.addConn();
};
const pageChartsTest = function pageChartsTest() {
  const nivoBox = new NivoTest();
  render(nivoBox.render(), document.getElementById('content'));
  nivoBox.chartrender();
  $(document).ready(() => {
    $('#table_id').DataTable();
  });
};

/*
type Props = {
  pageLogin: () => $('#content').load(htmlDir+'login.html'),
  pageSysAdmin: () => $('#content').load(htmlDir+'sysadmin.html'),
  pageDBTest: () => $('#content').load(htmlDir+'dbtest.html'),
  pageDBTest2: () => $('#content').load(htmlDir+'dbtest2.html'),
  pageAMChartsTest: () => $('#content').load(htmlDir+'demo.html')
}
*/

export default class Navigation extends Component<Props> {
  props: Props;

  render() {
    /*
    const {
      pageLogin,
      pageSysAdmin,
      pageDBTest,
      pageDBTest2,
      pageAMChartsTest
    } = this.props;
    */

    return (
      <nav className="navbar navbar-expand-lg navbar-light rounded">
        <a id="navbarIconLink" className="navbar-brand" href="#">
          <img
            id="navbarIcon"
            width="20"
            height="30"
            src={northlandNavImage}
            alt="Northland Bear"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar_main"
          aria-controls="navbar_main"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbar_main">
          <div className="navbar-nav">
            <a
              id="loginNav"
              role="button"
              className="btn btn-nc-primary"
              onClick={() => pageLogin()}
              onKeyDown={() => pageLogin()}
              tabIndex="0"
            >
              Login
            </a>
            &nbsp;
            <a
              id="sysadminNav"
              role="button"
              className="btn btn-nc-primary disabled"
              onClick={() => pageSysAdmin()}
              onKeyDown={() => pageSysAdmin()}
              tabIndex="0"
              disabled
            >
              System Administration
            </a>
            &nbsp;
            <a
              id="dbtestNav"
              role="button"
              className="btn btn-nc-primary"
              onClick={() => pageDBTest()}
              onKeyDown={() => pageDBTest()}
              tabIndex="0"
            >
              DB Test
            </a>
            &nbsp;
            <a
              id="charttestNav"
              role="button"
              className="btn btn-nc-primary"
              onClick={() => pageChartsTest()}
              onKeyDown={() => pageChartsTest()}
              tabIndex="0"
            >
              Charts Demo
            </a>
            &nbsp;
          </div>
        </div>
      </nav>
    );
  }
}
