// @flow
import { Component } from 'react';
import $ from 'jquery';
import * as mssql from 'mssql';
// const mssql = require('msnodesqlv8');

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
      console.log('attempting connection...');

      this.config = {
        server: 'localhost\\MSSQLSERVER01',
        database: 'AccessControl',
        // user: 'dashboardTest',
        // password: 'dashboardTest' // ,
        driver: 'msnodesqlv8'
        // options: {
        //  trustedConnection: true,
        //  instanceName: 'MSSQLSERVER01'
        // }
      };

      console.log(this.config);

      const poolBase = new mssql.ConnectionPool(this.config);
      const pool = await poolBase.connect();
      const res = await pool.request();

      console.log('success');
      $('#resultDiv').html('WeDidIt');
      return res.query();
    } catch (err) {
      console.log(err);
      $('#resultDiv').html(`Error: ${err}`);
    }
  }
}
