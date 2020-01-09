// @flow
import { Component } from 'react';
import $ from 'jquery';

const mssql = require('mssql');

/*
type Props = {
  increment: () => void,
  incrementIfOdd: () => void,
  incrementAsync: () => void,
  decrement: () => void,
  counter: number
};
*/

export default class DBQuery extends Component<Props> {
  props: Props;

  dbConn() {
    this.addConn();
  }

  async addConn() {
    try {
      this.config = {
        server: 'LMIL-US001337-1/MSSQLSERVER01',
        database: 'AccessControl'
      };

      const pool = await mssql.connect(this.config);
      const res = await pool.request();

      console.log('success');
      $('#resultDiv').html('WeDidIt');
      return res.query();
    } catch (err) {
      console.log(err);
      $('#resultDiv').html(`Error: {err}`);
    }
  }
}
