/* eslint no-unused-vars: "warn" */
import $ from 'jquery';
import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import 'bootstrap';
import 'electron-log';
// import { ResponsiveCalendar } from '@nivo/calendar';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
// import Login from './components/Login';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './main.global.css';

const store = configureStore();

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

render(
  <div id="pageBody" className="body">
    <section id="navigation" />

    <section id="content" className="container" />

    <hr className="my-4" />
    <section id="footer" />
  </div>,
  document.getElementById('root')
);

const navBox = new Navigation();
render(navBox.render(), document.getElementById('navigation'));

const pageFooter = new Footer();
render(pageFooter.render(), document.getElementById('footer'));

// fixes data table sizing on window reload
$(window).on('load', function pageLoad() {
  $('a[data-toggle="tab"]').on('shown.bs.tab', function tabFix(e) {
    $($.fn.dataTable.tables(true)).css('width', '100%');
    $($.fn.dataTable.tables(true))
      .DataTable()
      .columns.adjust()
      .responsive.recalc();
  });
});
