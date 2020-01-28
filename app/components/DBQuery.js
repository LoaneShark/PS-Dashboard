// @flow
import { Component } from 'react';
import $ from 'jquery';
import { ConnectionPool } from 'mssql';

const client = require('mssql/msnodesqlv8');

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
  dbConn() {
    this.addConn();
  }

  async addConn() {
    try {
      console.log('attempting connection...');

      // Local server config
      this.config = {
        server: 'localhost\\MSSQLSERVER01',
        database: 'AccessControl',
        driver: 'msnodesqlv8',
        options: {
          trustedConnection: true
        }
      };

      console.log(this.config);

      // Establish ConnectionPool to the SQL Server
      // eslint-disable-next-line no-unused-vars
      const connection: ConnectionPool = new client.ConnectionPool(this.config)
        .connect()
        .then(pool => {
          return pool.query('select * from dbo.EMP').then(res => {
            console.log(res);
            return res;
          });
        })
        .catch(err => {
          console.log(err);
          $('#resultDiv').html(`Error: ${err}`);
        });

      /*
      var connection: Connection = new client.Connection(this.config);
      connection.connect();
      var request = new Request(connection);
      */

      console.log('success');
      $('#resultDiv').html('WeDidIt');
    } catch (err) {
      console.log(err);
      $('#resultDiv').html(`Error: ${err}`);
    }
  }
}
