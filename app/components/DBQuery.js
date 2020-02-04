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
      $.ajax({
        async: false,
        global: false,
        url: './config/dbconfig.json',
        dataType: 'json',
        success: data => {
          this.config = data;
        }
      });

      console.log(this.config);

      // Establish ConnectionPool to the SQL Server
      // eslint-disable-next-line no-unused-vars
      const connection: ConnectionPool = new client.ConnectionPool(this.config)
        .connect()
        .then(pool => {
          return pool.query(testQuery1()).then(res => {
            console.log(res);
            console.log(res.recordset);
            console.log(res.recordset.toTable());
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

  async addConnVar() {
    console.log('attempting connection...');

    // Local server config
    $.ajax({
      async: false,
      global: false,
      url: './config/dbconfig.json',
      dataType: 'json',
      success: data => {
        this.config = data;
      }
    });

    console.log(this.config);

    // Establish ConnectionPool to the SQL Server
    // eslint-disable-next-line no-unused-vars
    const connection: ConnectionPool = new client.ConnectionPool(
      this.config
    ).connect();
    const myPool = await connection;
    console.log('myPool');
    console.log(myPool);
    const myPoolResponse = await myPool.query(testQuery1());
    console.log('myPoolResponse');

    /*
    var connection: Connection = new client.Connection(this.config);
    connection.connect();
    var request = new Request(connection);
    */

    console.log('success');
    $('#resultDiv').html('WeDidIt');
    return myPoolResponse.recordset;
  }

  async addConnAlarmCountHour() {
    console.log('attempting connection...');

    // Local server config
    $.ajax({
      async: false,
      global: false,
      url: './config/dbconfig.json',
      dataType: 'json',
      success: data => {
        this.config = data;
      }
    });

    console.log(this.config);

    // Establish ConnectionPool to the SQL Server
    // eslint-disable-next-line no-unused-vars
    const connection: ConnectionPool = new client.ConnectionPool(
      this.config
    ).connect();
    const myPool = await connection;
    console.log('myPool');
    console.log(myPool);
    const myPoolResponse = await myPool.query(alarmCountHour());
    console.log('myPoolResponse');

    /*
    var connection: Connection = new client.Connection(this.config);
    connection.connect();
    var request = new Request(connection);
    */

    console.log('success');
    $('#resultDiv').html('WeDidIt');
    return myPoolResponse.recordset.toTable();
  }

  async addConnAlarmCountDay() {
    console.log('attempting connection...');

    // Local server config
    $.ajax({
      async: false,
      global: false,
      url: './config/dbconfig.json',
      dataType: 'json',
      success: data => {
        this.config = data;
      }
    });

    console.log(this.config);

    // Establish ConnectionPool to the SQL Server
    // eslint-disable-next-line no-unused-vars
    const connection: ConnectionPool = new client.ConnectionPool(
      this.config
    ).connect();
    const myPool = await connection;
    console.log('myPool');
    console.log(myPool);
    const myPoolResponse = await myPool.query(alarmCountDay());
    console.log('myPoolResponse');

    /*
    var connection: Connection = new client.Connection(this.config);
    connection.connect();
    var request = new Request(connection);
    */

    console.log('success');
    $('#resultDiv').html('WeDidIt');
    return myPoolResponse.recordset.toTable();
  }

  async addConnDeviceCounts() {
    console.log('attempting connection...');

    // Local server config
    $.ajax({
      async: false,
      global: false,
      url: './config/dbconfig.json',
      dataType: 'json',
      success: data => {
        this.config = data;
      }
    });

    console.log(this.config);

    // Establish ConnectionPool to the SQL Server
    // eslint-disable-next-line no-unused-vars
    const connection: ConnectionPool = new client.ConnectionPool(
      this.config
    ).connect();
    const myPool = await connection;
    console.log('myPool');
    console.log(myPool);
    const myPoolResponse = await myPool.query(deviceCounts());
    console.log('myPoolResponse');

    /*
    var connection: Connection = new client.Connection(this.config);
    connection.connect();
    var request = new Request(connection);
    */

    console.log('success');
    $('#resultDiv').html('WeDidIt');
    return myPoolResponse.recordset.toTable();
  }

  async addConnTimezoneReaderModes() {
    console.log('attempting connection...');

    // Local server config
    $.ajax({
      async: false,
      global: false,
      url: './config/dbconfig.json',
      dataType: 'json',
      success: data => {
        this.config = data;
      }
    });

    console.log(this.config);

    // Establish ConnectionPool to the SQL Server
    // eslint-disable-next-line no-unused-vars
    const connection: ConnectionPool = new client.ConnectionPool(
      this.config
    ).connect();
    const myPool = await connection;
    console.log('myPool');
    console.log(myPool);
    const myPoolResponse = await myPool.query(timezoneReaderModes());
    console.log('myPoolResponse');

    /*
    var connection: Connection = new client.Connection(this.config);
    connection.connect();
    var request = new Request(connection);
    */

    console.log('success');
    $('#resultDiv').html('WeDidIt');
    return myPoolResponse.recordset.toTable();
  }

  async addConnPoorPerformingInputs() {
    console.log('attempting connection...');

    // Local server config
    $.ajax({
      async: false,
      global: false,
      url: './config/dbconfig.json',
      dataType: 'json',
      success: data => {
        this.config = data;
      }
    });

    console.log(this.config);

    // Establish ConnectionPool to the SQL Server
    // eslint-disable-next-line no-unused-vars
    const connection: ConnectionPool = new client.ConnectionPool(
      this.config
    ).connect();
    const myPool = await connection;
    console.log('myPool');
    console.log(myPool);
    const myPoolResponse = await myPool.query(poorPerformingInputs());
    console.log('myPoolResponse');

    /*
    var connection: Connection = new client.Connection(this.config);
    connection.connect();
    var request = new Request(connection);
    */

    console.log('success');
    $('#resultDiv').html('WeDidIt');
    return myPoolResponse.recordset.toTable();
  }
}

const testQuery1 = function testQuery1() {
  return `SELECT        dbo.ACCESSPANE.NAME AS Panel, dbo.ALARMPANEL.NAME AS [Alarm Panel/Reader], dbo.ALARMINPUT.NAME AS Input, dbo.EVENT.EVDESCR AS Event, COUNT(dbo.EVENTS.SERIALNUM) AS Count,
                         dbo.ALARM.ALPRIORITY AS Priority, DATEPART(DD,
                         dbo.EVENTS.EVENT_TIME_UTC) AS Day, DATEPART(MM, dbo.EVENTS.EVENT_TIME_UTC) AS Month
  FROM            dbo.EVENT RIGHT OUTER JOIN
                           dbo.EVENTS LEFT OUTER JOIN
                           dbo.ALARM INNER JOIN
                           dbo.EVTALMLINK ON dbo.ALARM.ALID = dbo.EVTALMLINK.ALID ON dbo.EVENTS.DEVID = dbo.EVTALMLINK.DEVICEID AND dbo.EVENTS.INPUTDEVID = dbo.EVTALMLINK.INPUTDEVID AND
                           dbo.EVENTS.MACHINE = dbo.EVTALMLINK.PANELID AND dbo.EVENTS.EVENTID = dbo.EVTALMLINK.EVID AND dbo.EVENTS.EVENTTYPE = dbo.EVTALMLINK.EVTYPEID ON
                           dbo.EVENT.EVID = dbo.EVENTS.EVENTID AND dbo.EVENT.EVTYPEID = dbo.EVENTS.EVENTTYPE LEFT OUTER JOIN
                           dbo.ALARMINPUT ON dbo.EVENTS.MACHINE = dbo.ALARMINPUT.PANELID AND dbo.EVENTS.DEVID = dbo.ALARMINPUT.ALARMPID AND dbo.EVENTS.INPUTDEVID = dbo.ALARMINPUT.INPUTID LEFT OUTER JOIN
                           dbo.ACCESSPANE ON dbo.EVENTS.MACHINE = dbo.ACCESSPANE.PANELID LEFT OUTER JOIN
                           dbo.ALARMPANEL ON dbo.EVENTS.MACHINE = dbo.ALARMPANEL.PANELID AND dbo.EVENTS.DEVID = dbo.ALARMPANEL.ALARMPID
  WHERE        (dbo.ALARMPANEL.NAME IS NOT NULL) AND (dbo.EVENTS.EVENTTYPE = 4) AND (dbo.EVENTS.EVENTID = 2)and events.event_time_utc > getdate()-120
  GROUP BY dbo.ALARMINPUT.NAME, dbo.ALARMPANEL.NAME, dbo.ACCESSPANE.NAME, dbo.ALARM.ALPRIORITY, dbo.EVENT.EVDESCR,  dbo.EVENTS.EVENT_TIME_UTC

  Union all

  SELECT        dbo.ACCESSPANE.NAME AS Panel, dbo.READER.READERDESC AS [Alarm Panel], dbo.READER.AUX1NAME AS Input, dbo.EVENT.EVDESCR AS Event, COUNT(dbo.EVENTS.SERIALNUM) AS Count,
                           dbo.ALARM.ALPRIORITY, DATEPART(DD, dbo.EVENTS.EVENT_TIME_UTC) AS Day, DATEPART(MM, dbo.EVENTS.EVENT_TIME_UTC) AS Month
  FROM            dbo.EVENTS LEFT OUTER JOIN
                           dbo.ALARM INNER JOIN
                           dbo.EVTALMLINK ON dbo.ALARM.ALID = dbo.EVTALMLINK.ALID ON dbo.EVENTS.EVENTTYPE = dbo.EVTALMLINK.EVTYPEID AND dbo.EVENTS.EVENTID = dbo.EVTALMLINK.EVID AND
                           dbo.EVENTS.MACHINE = dbo.EVTALMLINK.PANELID AND dbo.EVENTS.DEVID = dbo.EVTALMLINK.DEVICEID AND dbo.EVENTS.INPUTDEVID = dbo.EVTALMLINK.INPUTDEVID LEFT OUTER JOIN
                           dbo.READER ON dbo.EVENTS.MACHINE = dbo.READER.PANELID AND dbo.EVENTS.DEVID = dbo.READER.READERID LEFT OUTER JOIN
                           dbo.ACCESSPANE ON dbo.EVENTS.MACHINE = dbo.ACCESSPANE.PANELID LEFT OUTER JOIN
                           dbo.EVENT ON dbo.EVENTS.EVENTID = dbo.EVENT.EVID AND dbo.EVENTS.EVENTTYPE = dbo.EVENT.EVTYPEID
  WHERE        (dbo.READER.AUX1NAME IS NOT NULL) AND (dbo.EVENTS.EVENTTYPE = 4) AND (dbo.EVENTS.EVENTID = 2) AND (dbo.EVENTS.INPUTDEVID = 1)and events.event_time_utc > getdate()-120
  GROUP BY dbo.EVENT.EVDESCR, dbo.READER.AUX1NAME, dbo.READER.READERDESC, dbo.ACCESSPANE.NAME, dbo.ALARM.ALPRIORITY, DATEPART(MM, dbo.EVENTS.EVENT_TIME_UTC), DATEPART(DD,
                           dbo.EVENTS.EVENT_TIME_UTC)

  Union all
  SELECT        dbo.ACCESSPANE.NAME AS Panel, dbo.READER.READERDESC AS [Alarm Panel], dbo.READER.AUX2NAME AS Input, dbo.EVENT.EVDESCR AS Event, COUNT(dbo.EVENTS.SERIALNUM) AS Count,
                           dbo.ALARM.ALPRIORITY, DATEPART(DD, dbo.EVENTS.EVENT_TIME_UTC) AS Day, DATEPART(MM, dbo.EVENTS.EVENT_TIME_UTC) AS Month
  FROM            dbo.EVENTS LEFT OUTER JOIN
                           dbo.ALARM INNER JOIN
                           dbo.EVTALMLINK ON dbo.ALARM.ALID = dbo.EVTALMLINK.ALID ON dbo.EVENTS.EVENTTYPE = dbo.EVTALMLINK.EVTYPEID AND dbo.EVENTS.EVENTID = dbo.EVTALMLINK.EVID AND
                           dbo.EVENTS.MACHINE = dbo.EVTALMLINK.PANELID AND dbo.EVENTS.DEVID = dbo.EVTALMLINK.DEVICEID AND dbo.EVENTS.INPUTDEVID = dbo.EVTALMLINK.INPUTDEVID LEFT OUTER JOIN
                           dbo.READER ON dbo.EVENTS.MACHINE = dbo.READER.PANELID AND dbo.EVENTS.DEVID = dbo.READER.READERID LEFT OUTER JOIN
                           dbo.ACCESSPANE ON dbo.EVENTS.MACHINE = dbo.ACCESSPANE.PANELID LEFT OUTER JOIN
                           dbo.EVENT ON dbo.EVENTS.EVENTID = dbo.EVENT.EVID AND dbo.EVENTS.EVENTTYPE = dbo.EVENT.EVTYPEID
  WHERE        (dbo.READER.AUX2NAME IS NOT NULL) AND (dbo.EVENTS.EVENTTYPE = 4) AND (dbo.EVENTS.EVENTID = 2) AND (dbo.EVENTS.INPUTDEVID = 2)and events.event_time_utc > getdate()-120
  GROUP BY dbo.EVENT.EVDESCR, dbo.READER.AUX2NAME, dbo.READER.READERDESC, dbo.ACCESSPANE.NAME, dbo.ALARM.ALPRIORITY, DATEPART(MM, dbo.EVENTS.EVENT_TIME_UTC), DATEPART(DD,
                           dbo.EVENTS.EVENT_TIME_UTC)`;
};

const alarmCountHour = function alarmCountHour() {
  return `SELECT        dbo.ACCESSPANE.NAME AS Panel, dbo.ALARMPANEL.NAME AS [Alarm Panel/Reader], dbo.ALARMINPUT.NAME AS Input, dbo.EVENT.EVDESCR AS Event, COUNT(dbo.EVENTS.SERIALNUM) AS Count,
                           dbo.ALARM.ALPRIORITY AS Priority, DATEPART(DD,
                           dbo.EVENTS.EVENT_TIME_UTC) AS Day, DATEPART(MM, dbo.EVENTS.EVENT_TIME_UTC) AS Month
  FROM            dbo.EVENT RIGHT OUTER JOIN
                           dbo.EVENTS LEFT OUTER JOIN
                           dbo.ALARM INNER JOIN
                           dbo.EVTALMLINK ON dbo.ALARM.ALID = dbo.EVTALMLINK.ALID ON dbo.EVENTS.DEVID = dbo.EVTALMLINK.DEVICEID AND dbo.EVENTS.INPUTDEVID = dbo.EVTALMLINK.INPUTDEVID AND
                           dbo.EVENTS.MACHINE = dbo.EVTALMLINK.PANELID AND dbo.EVENTS.EVENTID = dbo.EVTALMLINK.EVID AND dbo.EVENTS.EVENTTYPE = dbo.EVTALMLINK.EVTYPEID ON
                           dbo.EVENT.EVID = dbo.EVENTS.EVENTID AND dbo.EVENT.EVTYPEID = dbo.EVENTS.EVENTTYPE LEFT OUTER JOIN
                           dbo.ALARMINPUT ON dbo.EVENTS.MACHINE = dbo.ALARMINPUT.PANELID AND dbo.EVENTS.DEVID = dbo.ALARMINPUT.ALARMPID AND dbo.EVENTS.INPUTDEVID = dbo.ALARMINPUT.INPUTID LEFT OUTER JOIN
                           dbo.ACCESSPANE ON dbo.EVENTS.MACHINE = dbo.ACCESSPANE.PANELID LEFT OUTER JOIN
                           dbo.ALARMPANEL ON dbo.EVENTS.MACHINE = dbo.ALARMPANEL.PANELID AND dbo.EVENTS.DEVID = dbo.ALARMPANEL.ALARMPID
  WHERE        (dbo.ALARMPANEL.NAME IS NOT NULL) AND (dbo.EVENTS.EVENTTYPE = 4) AND (dbo.EVENTS.EVENTID = 2)and events.event_time_utc > getdate()-180
  GROUP BY dbo.ALARMINPUT.NAME, dbo.ALARMPANEL.NAME, dbo.ACCESSPANE.NAME, dbo.ALARM.ALPRIORITY, dbo.EVENT.EVDESCR,  dbo.EVENTS.EVENT_TIME_UTC

  Union all

  SELECT        dbo.ACCESSPANE.NAME AS Panel, dbo.READER.READERDESC AS [Alarm Panel], dbo.READER.AUX1NAME AS Input, dbo.EVENT.EVDESCR AS Event, COUNT(dbo.EVENTS.SERIALNUM) AS Count,
                           dbo.ALARM.ALPRIORITY, DATEPART(DD, dbo.EVENTS.EVENT_TIME_UTC) AS Day, DATEPART(MM, dbo.EVENTS.EVENT_TIME_UTC) AS Month
  FROM            dbo.EVENTS LEFT OUTER JOIN
                           dbo.ALARM INNER JOIN
                           dbo.EVTALMLINK ON dbo.ALARM.ALID = dbo.EVTALMLINK.ALID ON dbo.EVENTS.EVENTTYPE = dbo.EVTALMLINK.EVTYPEID AND dbo.EVENTS.EVENTID = dbo.EVTALMLINK.EVID AND
                           dbo.EVENTS.MACHINE = dbo.EVTALMLINK.PANELID AND dbo.EVENTS.DEVID = dbo.EVTALMLINK.DEVICEID AND dbo.EVENTS.INPUTDEVID = dbo.EVTALMLINK.INPUTDEVID LEFT OUTER JOIN
                           dbo.READER ON dbo.EVENTS.MACHINE = dbo.READER.PANELID AND dbo.EVENTS.DEVID = dbo.READER.READERID LEFT OUTER JOIN
                           dbo.ACCESSPANE ON dbo.EVENTS.MACHINE = dbo.ACCESSPANE.PANELID LEFT OUTER JOIN
                           dbo.EVENT ON dbo.EVENTS.EVENTID = dbo.EVENT.EVID AND dbo.EVENTS.EVENTTYPE = dbo.EVENT.EVTYPEID
  WHERE        (dbo.READER.AUX1NAME IS NOT NULL) AND (dbo.EVENTS.EVENTTYPE = 4) AND (dbo.EVENTS.EVENTID = 2) AND (dbo.EVENTS.INPUTDEVID = 1)and events.event_time_utc > getdate()-180
  GROUP BY dbo.EVENT.EVDESCR, dbo.READER.AUX1NAME, dbo.READER.READERDESC, dbo.ACCESSPANE.NAME, dbo.ALARM.ALPRIORITY, DATEPART(MM, dbo.EVENTS.EVENT_TIME_UTC), DATEPART(DD,
                           dbo.EVENTS.EVENT_TIME_UTC)

  Union all
  SELECT        dbo.ACCESSPANE.NAME AS Panel, dbo.READER.READERDESC AS [Alarm Panel], dbo.READER.AUX2NAME AS Input, dbo.EVENT.EVDESCR AS Event, COUNT(dbo.EVENTS.SERIALNUM) AS Count,
                           dbo.ALARM.ALPRIORITY, DATEPART(DD, dbo.EVENTS.EVENT_TIME_UTC) AS Day, DATEPART(MM, dbo.EVENTS.EVENT_TIME_UTC) AS Month
  FROM            dbo.EVENTS LEFT OUTER JOIN
                           dbo.ALARM INNER JOIN
                           dbo.EVTALMLINK ON dbo.ALARM.ALID = dbo.EVTALMLINK.ALID ON dbo.EVENTS.EVENTTYPE = dbo.EVTALMLINK.EVTYPEID AND dbo.EVENTS.EVENTID = dbo.EVTALMLINK.EVID AND
                           dbo.EVENTS.MACHINE = dbo.EVTALMLINK.PANELID AND dbo.EVENTS.DEVID = dbo.EVTALMLINK.DEVICEID AND dbo.EVENTS.INPUTDEVID = dbo.EVTALMLINK.INPUTDEVID LEFT OUTER JOIN
                           dbo.READER ON dbo.EVENTS.MACHINE = dbo.READER.PANELID AND dbo.EVENTS.DEVID = dbo.READER.READERID LEFT OUTER JOIN
                           dbo.ACCESSPANE ON dbo.EVENTS.MACHINE = dbo.ACCESSPANE.PANELID LEFT OUTER JOIN
                           dbo.EVENT ON dbo.EVENTS.EVENTID = dbo.EVENT.EVID AND dbo.EVENTS.EVENTTYPE = dbo.EVENT.EVTYPEID
  WHERE        (dbo.READER.AUX2NAME IS NOT NULL) AND (dbo.EVENTS.EVENTTYPE = 4) AND (dbo.EVENTS.EVENTID = 2) AND (dbo.EVENTS.INPUTDEVID = 2)and events.event_time_utc > getdate()-180
  GROUP BY dbo.EVENT.EVDESCR, dbo.READER.AUX2NAME, dbo.READER.READERDESC, dbo.ACCESSPANE.NAME, dbo.ALARM.ALPRIORITY, DATEPART(MM, dbo.EVENTS.EVENT_TIME_UTC), DATEPART(DD,
                           dbo.EVENTS.EVENT_TIME_UTC)`;
};

const alarmCountDay = function alarmCountDay() {
  return `SELECT        TOP (100) PERCENT dbo.READER.READERDESC AS [Reader ], dbo.ACCESSPANE.NAME AS Panel, dbo.EVENT.EVDESCR AS Event, COUNT(dbo.EVENTS.SERIALNUM) AS Count, DATEPART(DD,
                           dbo.EVENTS.EVENT_TIME_UTC) AS Day, DATEPART(MM, dbo.EVENTS.EVENT_TIME_UTC) AS Month
  FROM            dbo.READER RIGHT OUTER JOIN
                           dbo.EVENTS LEFT OUTER JOIN
                           dbo.EVENT ON dbo.EVENTS.EVENTTYPE = dbo.EVENT.EVTYPEID AND dbo.EVENTS.EVENTID = dbo.EVENT.EVID LEFT OUTER JOIN
                           dbo.ACCESSPANE ON dbo.EVENTS.MACHINE = dbo.ACCESSPANE.PANELID ON dbo.READER.PANELID = dbo.EVENTS.MACHINE AND dbo.READER.READERID = dbo.EVENTS.DEVID
  WHERE        (dbo.EVENTS.EVENTTYPE <> 0) AND (dbo.EVENTS.MACHINE >= 1) AND (dbo.READER.READERDESC IS NOT NULL) AND (dbo.EVENTS.INPUTDEVID = 0) AND (dbo.EVENTS.EVENT_TIME_UTC > GETUTCDATE() - 360)
  GROUP BY dbo.ACCESSPANE.NAME, dbo.READER.READERDESC, dbo.EVENT.EVDESCR, DATEPART(DD, dbo.EVENTS.EVENT_TIME_UTC), DATEPART(MM, dbo.EVENTS.EVENT_TIME_UTC)
  ORDER BY Panel, Count DESC`;
};

const deviceCounts = function deviceCounts() {
  return `SELECT
  CONVERT(NVARCHAR(10), GETDATE(), 101)
   AS [DATE],
   (SELECT @@SERVERNAME) as [SQL SERVER NAME],
   (SELECT @@VERSION) as [SQL VERSION],
   (SELECT DB_NAME()) as [DATABASE NAME],
  (SELECT S.rows FROM sys.sysindexes as s INNER JOIN sys.OBJECTS AS O ON O.object_id=s.id WHERE O.name= 'EMP' AND S.indid < 2)
   AS [CARDHOLDER_COUNT],
  (SELECT S.rows FROM sys.sysindexes as s INNER JOIN sys.OBJECTS AS O ON O.object_id=s.id WHERE O.name='BADGE' AND S.indid < 2)
   AS [BADGE_COUNT],
  (SELECT COUNT(*) FROM DBO.BADGE WITH (NOLOCK) WHERE STATUS=1)
   AS [ACTIVE_BADGES],
  (SELECT S.rows FROM sys.sysindexes as s INNER JOIN sys.OBJECTS AS O ON O.object_id=s.id WHERE O.name= 'EVENTS' AND S.indid < 2)
   AS [EVENTS_TOTAL],
  (SELECT S.rows FROM sys.sysindexes as s INNER JOIN sys.OBJECTS AS O ON O.object_id=s.id WHERE O.name= 'ACCTRANS' AND S.indid < 2)
   AS [USER_TRANSACTIONS_TOTAL],
  (SELECT S.rows FROM sys.sysindexes as s INNER JOIN sys.OBJECTS AS O ON O.object_id=s.id WHERE O.name= 'FAILEDRPC' AND S.indid < 2)
   AS [FAILED_RPCS],
  (SELECT CONVERT(NVARCHAR(10), MAX(Backup_Finish_Date), 101) FROM MSDB.DBO.BACKUPSET WHERE TYPE = 'd' AND DATABASE_NAME=DB_NAME())
   AS [LAST_SUCCESSFUL_SQL_BACKUP],
  (SELECT CONVERT (DECIMAL(12,2), ROUND (SIZE/128.000,2)) FROM DBO.SYSFILES WHERE FILENAME in (select filename from sys.sysfiles where status & 0x40<>0x40))
   AS [DATA_FILE_MB],
  (SELECT CONVERT (DECIMAL(12,2), ROUND (SIZE/128.000,2)) FROM DBO.SYSFILES WHERE FILENAME in (select filename from sys.sysfiles where status & 0x40=0x40))
   AS [LOG_FILE_MB],
  (SELECT COUNT(*) FROM DBO.ACCESSPANE AS A WITH (NOLOCK) INNER JOIN DBO.PANELTYPE AS P WITH (NOLOCK) ON P.PANELTYPEID=A.PANELTYPE WHERE P.PANELCLASS=1)
   AS [ACCESS_PANELS],
  (SELECT S.rows FROM sys.sysindexes as s INNER JOIN sys.OBJECTS AS O ON O.object_id=s.id WHERE O.name= 'READER' AND S.indid < 2)
   AS [READERS],
  (SELECT COUNT(*) FROM DBO.ACCESSPANE WITH (NOLOCK) WHERE PANELTYPE=36)
   AS [LNVRS],
  (SELECT COUNT(*) FROM DBO.CCTVDEVICE WITH (NOLOCK) WHERE PANELID IN (SELECT PANELID FROM DBO.ACCESSPANE WITH (NOLOCK) WHERE PANELTYPE=36))
   AS [IP_CAMERAS],
  (SELECT COUNT(*) FROM ACCESSPANE AS A WITH (NOLOCK) INNER JOIN PANELTYPE AS P WITH (NOLOCK) ON P.PANELTYPEID=A.PANELTYPE WHERE A.ONLINE1=1 AND P.PANELCLASS=4 AND A.PANELTYPE <>36 )
   AS [OTHER_RECORDERS],
  (SELECT COUNT(*) FROM CCTVDEVICE WITH (NOLOCK) WHERE PANELID IN (SELECT PANELID FROM ACCESSPANE AS A WITH (NOLOCK) INNER JOIN PANELTYPE AS P WITH (NOLOCK) ON P.PANELTYPEID=A.PANELTYPE WHERE P.PANELCLASS=4 AND A.PANELTYPE <>36))
   AS [OTHER_CAMERAS],
   (SELECT COUNT(*) FROM DBO.ACCESSLVL WITH (NOLOCK))
   AS [ACLs]`;
};

const timezoneReaderModes = function timezoneReaderModes() {
  return `declare @Dayofweek varchar (4000)
  declare @sql varchar (4000)
  set @Dayofweek = (select DATENAME (WEEKDAY,Getdate()))

  set @sql = 'SELECT dbo.TIMEZONE.DESCRIPT [Timezone], dbo.READER.READERDESC [Reader],
     case
     when  RDTZCTLIST.STARTMODE=0 then ''Locked''
      when  RDTZCTLIST.STARTMODE=1 then ''Card Only''
       when  RDTZCTLIST.STARTMODE=2 then ''Pin or Card''
           when  RDTZCTLIST.STARTMODE=3 then ''Card and Pin''
            when  RDTZCTLIST.STARTMODE=4 then ''Unlocked''
             when  RDTZCTLIST.STARTMODE=5 then ''Facility Code Only''

      else ''UNDEFINED''
  end As [Start Mode],

         case
     when  RDTZCTLIST.ENDMODE=0 then ''Locked''
      when  RDTZCTLIST.ENDMODE=1 then ''Card Only''
       when  RDTZCTLIST.ENDMODE=2 then ''Pin or Card''
           when  RDTZCTLIST.ENDMODE=3 then ''Card and Pin''
            when  RDTZCTLIST.ENDMODE=4 then ''Unlocked''
             when  RDTZCTLIST.ENDMODE=5 then ''Facility Code Only''

      else ''UNDEFINED''
  end As [End Mode],
  convert (time,dbo.TZINTERVAL.STARTTIME)[Start Time], convert (time, dbo.TZINTERVAL.ENDTIME) [End Time]
  FROM            dbo.TIMEZONE RIGHT OUTER JOIN
                           dbo.RDTZCTLIST ON dbo.TIMEZONE.TZID = dbo.RDTZCTLIST.TIMEZONE LEFT OUTER JOIN
                           dbo.READER ON dbo.RDTZCTLIST.READERID = dbo.READER.READERID AND dbo.RDTZCTLIST.PANELID = dbo.READER.PANELID LEFT OUTER JOIN
                           dbo.TZINTERVAL ON dbo.RDTZCTLIST.TIMEZONE = dbo.TZINTERVAL.TZID

                                           where reader.readerid in (select RDTZCTLIST.readerid from  RDTZCTLIST LEFT OUTER JOIN
                            reader on RDTZCTLIST.READERID = READER.READERID AND RDTZCTLIST.PANELID = READER.PANELID)

                                             and (convert (time, getdate()) > convert (time, tzinterval.starttime)) and (convert (time, getdate()) < convert (time, tzinterval.ENDTIME))
                                             and TZINTERVAL.'+ @Dayofweek + ' = 1';

  exec(@sql);`;
};

const poorPerformingInputs = function poorPerformingInputs() {
  return `SELECT        dbo.ACCESSPANE.NAME AS Panel, dbo.ALARMPANEL.NAME AS [Alarm Panel/Reader], dbo.ALARMINPUT.NAME AS Input, dbo.EVENT.EVDESCR AS Event, COUNT(dbo.EVENTS.SERIALNUM) AS Count,
                           dbo.ALARM.ALPRIORITY AS Priority, DATEPART(DD,
                           dbo.EVENTS.EVENT_TIME_UTC) AS Day, DATEPART(MM, dbo.EVENTS.EVENT_TIME_UTC) AS Month
  FROM            dbo.EVENT RIGHT OUTER JOIN
                           dbo.EVENTS LEFT OUTER JOIN
                           dbo.ALARM INNER JOIN
                           dbo.EVTALMLINK ON dbo.ALARM.ALID = dbo.EVTALMLINK.ALID ON dbo.EVENTS.DEVID = dbo.EVTALMLINK.DEVICEID AND dbo.EVENTS.INPUTDEVID = dbo.EVTALMLINK.INPUTDEVID AND
                           dbo.EVENTS.MACHINE = dbo.EVTALMLINK.PANELID AND dbo.EVENTS.EVENTID = dbo.EVTALMLINK.EVID AND dbo.EVENTS.EVENTTYPE = dbo.EVTALMLINK.EVTYPEID ON
                           dbo.EVENT.EVID = dbo.EVENTS.EVENTID AND dbo.EVENT.EVTYPEID = dbo.EVENTS.EVENTTYPE LEFT OUTER JOIN
                           dbo.ALARMINPUT ON dbo.EVENTS.MACHINE = dbo.ALARMINPUT.PANELID AND dbo.EVENTS.DEVID = dbo.ALARMINPUT.ALARMPID AND dbo.EVENTS.INPUTDEVID = dbo.ALARMINPUT.INPUTID LEFT OUTER JOIN
                           dbo.ACCESSPANE ON dbo.EVENTS.MACHINE = dbo.ACCESSPANE.PANELID LEFT OUTER JOIN
                           dbo.ALARMPANEL ON dbo.EVENTS.MACHINE = dbo.ALARMPANEL.PANELID AND dbo.EVENTS.DEVID = dbo.ALARMPANEL.ALARMPID
  WHERE        (dbo.ALARMPANEL.NAME IS NOT NULL) AND (dbo.EVENTS.EVENTTYPE = 4) AND (dbo.EVENTS.EVENTID = 2)and  dbo.ALARM.ALPRIORITY Is Not Null and events.event_time_utc > getdate()-30
  GROUP BY dbo.ALARMINPUT.NAME, dbo.ALARMPANEL.NAME, dbo.ACCESSPANE.NAME, dbo.ALARM.ALPRIORITY, dbo.EVENT.EVDESCR,  dbo.EVENTS.EVENT_TIME_UTC

  Union all

  SELECT        dbo.ACCESSPANE.NAME AS Panel, dbo.READER.READERDESC AS [Alarm Panel], dbo.READER.AUX1NAME AS Input, dbo.EVENT.EVDESCR AS Event, COUNT(dbo.EVENTS.SERIALNUM) AS Count,
                           dbo.ALARM.ALPRIORITY, DATEPART(DD, dbo.EVENTS.EVENT_TIME_UTC) AS Day, DATEPART(MM, dbo.EVENTS.EVENT_TIME_UTC) AS Month
  FROM            dbo.EVENTS LEFT OUTER JOIN
                           dbo.ALARM INNER JOIN
                           dbo.EVTALMLINK ON dbo.ALARM.ALID = dbo.EVTALMLINK.ALID ON dbo.EVENTS.EVENTTYPE = dbo.EVTALMLINK.EVTYPEID AND dbo.EVENTS.EVENTID = dbo.EVTALMLINK.EVID AND
                           dbo.EVENTS.MACHINE = dbo.EVTALMLINK.PANELID AND dbo.EVENTS.DEVID = dbo.EVTALMLINK.DEVICEID AND dbo.EVENTS.INPUTDEVID = dbo.EVTALMLINK.INPUTDEVID LEFT OUTER JOIN
                           dbo.READER ON dbo.EVENTS.MACHINE = dbo.READER.PANELID AND dbo.EVENTS.DEVID = dbo.READER.READERID LEFT OUTER JOIN
                           dbo.ACCESSPANE ON dbo.EVENTS.MACHINE = dbo.ACCESSPANE.PANELID LEFT OUTER JOIN
                           dbo.EVENT ON dbo.EVENTS.EVENTID = dbo.EVENT.EVID AND dbo.EVENTS.EVENTTYPE = dbo.EVENT.EVTYPEID
  WHERE        (dbo.READER.AUX1NAME IS NOT NULL) AND (dbo.EVENTS.EVENTTYPE = 4) AND (dbo.EVENTS.EVENTID = 2) AND (dbo.EVENTS.INPUTDEVID = 1)and dbo.ALARM.ALPRIORITY Is Not Null and events.event_time_utc > getdate()-30
  GROUP BY dbo.EVENT.EVDESCR, dbo.READER.AUX1NAME, dbo.READER.READERDESC, dbo.ACCESSPANE.NAME, dbo.ALARM.ALPRIORITY, DATEPART(MM, dbo.EVENTS.EVENT_TIME_UTC), DATEPART(DD,
                           dbo.EVENTS.EVENT_TIME_UTC)

  Union all
  SELECT        dbo.ACCESSPANE.NAME AS Panel, dbo.READER.READERDESC AS [Alarm Panel], dbo.READER.AUX2NAME AS Input, dbo.EVENT.EVDESCR AS Event, COUNT(dbo.EVENTS.SERIALNUM) AS Count,
                           dbo.ALARM.ALPRIORITY, DATEPART(DD, dbo.EVENTS.EVENT_TIME_UTC) AS Day, DATEPART(MM, dbo.EVENTS.EVENT_TIME_UTC) AS Month
  FROM            dbo.EVENTS LEFT OUTER JOIN
                           dbo.ALARM INNER JOIN
                           dbo.EVTALMLINK ON dbo.ALARM.ALID = dbo.EVTALMLINK.ALID ON dbo.EVENTS.EVENTTYPE = dbo.EVTALMLINK.EVTYPEID AND dbo.EVENTS.EVENTID = dbo.EVTALMLINK.EVID AND
                           dbo.EVENTS.MACHINE = dbo.EVTALMLINK.PANELID AND dbo.EVENTS.DEVID = dbo.EVTALMLINK.DEVICEID AND dbo.EVENTS.INPUTDEVID = dbo.EVTALMLINK.INPUTDEVID LEFT OUTER JOIN
                           dbo.READER ON dbo.EVENTS.MACHINE = dbo.READER.PANELID AND dbo.EVENTS.DEVID = dbo.READER.READERID LEFT OUTER JOIN
                           dbo.ACCESSPANE ON dbo.EVENTS.MACHINE = dbo.ACCESSPANE.PANELID LEFT OUTER JOIN
                           dbo.EVENT ON dbo.EVENTS.EVENTID = dbo.EVENT.EVID AND dbo.EVENTS.EVENTTYPE = dbo.EVENT.EVTYPEID
  WHERE        (dbo.READER.AUX2NAME IS NOT NULL) AND (dbo.EVENTS.EVENTTYPE = 4) AND (dbo.EVENTS.EVENTID = 2) AND (dbo.EVENTS.INPUTDEVID = 2)and dbo.ALARM.ALPRIORITY Is Not Null and  events.event_time_utc > getdate()-30
  GROUP BY dbo.EVENT.EVDESCR, dbo.READER.AUX2NAME, dbo.READER.READERDESC, dbo.ACCESSPANE.NAME, dbo.ALARM.ALPRIORITY, DATEPART(MM, dbo.EVENTS.EVENT_TIME_UTC), DATEPART(DD,
                           dbo.EVENTS.EVENT_TIME_UTC)

  ORDER BY COUNT desc

  offset 0 rows
  Fetch first 10 rows only`;
};
