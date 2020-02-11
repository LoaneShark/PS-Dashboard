/*
eslint camelcase: "warn"
*/
// @flow
import React, { Component } from 'react';
import $ from 'jquery';
// import { Link } from 'react-router-dom';
// import { ResponsiveCalendar } from '@nivo/calendar';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_dataviz from '@amcharts/amcharts4/themes/dataviz';
// import { am4themes_microchart as am4themesMicrochart} from '@amcharts/amcharts4/themes/microchart';
// import * as am4maps from '@amcharts/amcharts4/maps';
// import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import DBQuery from './DBQuery';

/*
type Props = {
  increment: () => void,
  incrementIfOdd:  => void,
  incrementAsync: () => void,
  decrement: () => void,
  counter: number
};
*/

export default class NivoTest extends Component<Props> {
  props: Props;

  chartrender = async () => {
    this.testQuery = new DBQuery();
    this.dataTest = await this.testQuery.addConnAlarmCountHour();
    this.dataTestDay = await this.testQuery.addConnAlarmCountDay();
    this.dataTestCounts = await this.testQuery.addConnDeviceCounts();
    this.dataTestTimezones = await this.testQuery.addConnTimezoneReaderModes();

    makeAlarmCountChart(this.dataTest);
    makeAlarmCountDay(this.dataTestDay);
    makeDeviceCountChart(this.dataTestCounts);
    makeReaderTimezonesTable(this.dataTestTimezones);
  };

  render = () => {
    /*
    const {
      increment,
      incrementIfOdd,
      incrementAsync,
      decrement,
      counter
    } = this.props;
    */
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_dataviz);
    return (
      <div id="literallyEverything">
        <div id="charts">
          <div className="container">
            <div className="row">
              <div className="col-5">
                <div
                  id="chartdiv"
                  style={{
                    width: '600px',
                    height: '530px',
                    display: 'inline-block',
                    marginTop: '20px'
                  }}
                />
              </div>
              <div className="col-7">
                <div
                  id="chartdiv2"
                  style={{
                    width: '1000px',
                    height: '490px',
                    marginTop: '20px'
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div
                  id="chartdiv3"
                  style={{
                    width: '720px',
                    height: '380px',
                    display: 'inline-block'
                  }}
                />
              </div>
              <div className="col-4">
                <div
                  id="chartdiv4"
                  style={{
                    width: '620px',
                    height: '380px',
                    display: 'inline-block'
                  }}
                />
              </div>
              <div className="col-4">
                <div
                  id="chartdiv5"
                  style={{
                    width: '620px',
                    height: '380px',
                    display: 'inline-block'
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h1 style={{ fontSize: '27px', marginTop: '20px' }}>
                  Active Timezones
                </h1>
              </div>
            </div>
          </div>
        </div>
        <table
          id="readerTimezones"
          className="table table-striped table-bordered"
        >
          <thead />
          <tbody />
        </table>
      </div>
    );
  };
}

const makeAlarmCountChart = data => {
  const today = new Date();
  console.log(today);
  const dateData = [];
  for (let i = 0; i < data.rows.length; i += 1) {
    let myYear;
    if (data.rows[i][7] <= today.getMonth() + 1) {
      myYear = today.getFullYear();
    } else {
      myYear = today.getFullYear() - 1;
    }
    const myDate = new Date(myYear, data.rows[i][7], data.rows[i][6]);
    dateData.push({ Date: myDate, Priority: data.rows[i][5] });
  }

  dateData.sort((a, b) => {
    return new Date(a.Date) - new Date(b.Date);
  });

  console.log(dateData);

  const alarmCountPriority = [];
  const alarmCountData = [];

  for (let i = 0; i < dateData.length; i += 1) {
    const tempPri = dateData[i].Priority;

    if (tempPri === 101) {
      const tempResult = alarmCountData.findIndex(
        obj =>
          obj.Date.setHours(0, 0, 0, 0) ===
          dateData[i].Date.setHours(0, 0, 0, 0)
      );

      if (tempResult === -1) {
        alarmCountData.push({
          Date: dateData[i].Date,
          Alarms: 1,
          Alarms2: 0,
          Alarms3: 0,
          Alarms4: 0
        });
      } else {
        alarmCountData[tempResult].Alarms += 1;
      }
    } else if (tempPri === 102) {
      const tempResult = alarmCountData.findIndex(
        obj =>
          obj.Date.setHours(0, 0, 0, 0) ===
          dateData[i].Date.setHours(0, 0, 0, 0)
      );

      if (tempResult === -1) {
        alarmCountData.push({
          Date: dateData[i].Date,
          Alarms: 0,
          Alarms2: 1,
          Alarms3: 0,
          Alarms4: 0
        });
      } else {
        alarmCountData[tempResult].Alarms2 += 1;
      }
    } else if (tempPri === 100) {
      const tempResult = alarmCountData.findIndex(
        obj =>
          obj.Date.setHours(0, 0, 0, 0) ===
          dateData[i].Date.setHours(0, 0, 0, 0)
      );

      if (tempResult === -1) {
        alarmCountData.push({
          Date: dateData[i].Date,
          Alarms: 0,
          Alarms2: 0,
          Alarms3: 1,
          Alarms4: 0
        });
      } else {
        alarmCountData[tempResult].Alarms3 += 1;
      }
    } else {
      const tempResult = alarmCountData.findIndex(
        obj =>
          obj.Date.setHours(0, 0, 0, 0) ===
          dateData[i].Date.setHours(0, 0, 0, 0)
      );

      if (tempResult === -1) {
        alarmCountData.push({
          Date: dateData[i].Date,
          Alarms: 0,
          Alarms2: 0,
          Alarms3: 0,
          Alarms4: 1
        });
      } else {
        alarmCountData[tempResult].Alarms4 += 1;
      }
    }
  }

  console.log(alarmCountData);
  console.log(alarmCountPriority);

  const alarmCountChart = am4core.create('chartdiv', am4charts.XYChart);

  alarmCountChart.data = alarmCountData;
  // alarmCountChart.dataSource.url = "components/AlarmCounts.csv"
  // alarmCountChart.dataSource.parser = new am4core.CSVParser();
  // alarmCountChart.dataSource.parser.options.useColumnNames = true;

  const alarmDateAxis = alarmCountChart.xAxes.push(new am4charts.DateAxis());
  // alarmDateAxis.dataFields.category = "year";

  const alarmValueAxis = alarmCountChart.yAxes.push(new am4charts.ValueAxis());
  alarmDateAxis.title.text = 'Date';
  alarmValueAxis.title.text = 'Number of Alarms';
  alarmCountChart.scrollbarX = new am4core.Scrollbar();

  const series2 = alarmCountChart.series.push(new am4charts.LineSeries());
  series2.name = 'Priority 100';
  // series2.stroke = am4core.color('#CDA2AB');
  series2.strokeWidth = 3;
  series2.dataFields.valueY = 'Alarms3';
  series2.dataFields.dateX = 'Date';

  const series3 = alarmCountChart.series.push(new am4charts.LineSeries());
  series3.name = 'Priority 101';
  // series3.stroke = am4core.color('#FF6B9A');
  series3.strokeWidth = 3;
  series3.dataFields.valueY = 'Alarms';
  series3.dataFields.dateX = 'Date';

  const series4 = alarmCountChart.series.push(new am4charts.LineSeries());
  series4.name = 'Priority 102';
  // series4.stroke = am4core.color('#20A33C');
  series4.strokeWidth = 3;
  series4.dataFields.valueY = 'Alarms2';
  series4.dataFields.dateX = 'Date';

  const series5 = alarmCountChart.series.push(new am4charts.LineSeries());
  series5.name = 'No Priority';
  // series5.stroke = am4core.color('#4853B8');
  series5.strokeWidth = 3;
  series5.dataFields.valueY = 'Alarms4';
  series5.dataFields.dateX = 'Date';

  const alarmTitle = alarmCountChart.titles.create();
  alarmTitle.text = 'Alarm Priorities (Past 6 Months)';
  alarmTitle.fontSize = 20;
  alarmTitle.marginBottom = 0;
  alarmCountChart.legend = new am4charts.Legend();

  const sixMonths = new Date();
  sixMonths.setMonth(sixMonths.getMonth() - 6);
  alarmDateAxis.min = sixMonths;
  alarmDateAxis.max = today;
};

const makeAlarmCountDay = data => {
  const today = new Date();
  console.log(today);
  const dateData = [];
  for (let i = 0; i < data.rows.length; i += 1) {
    let myYear;
    if (data.rows[i][5] <= today.getMonth() + 1) {
      myYear = today.getFullYear();
    } else {
      myYear = today.getFullYear() - 1;
    }
    const myDate = new Date(myYear, data.rows[i][5], data.rows[i][4]);
    dateData.push({
      Date: myDate,
      Event: data.rows[i][2],
      Count: data.rows[i][3]
    });
  }

  dateData.sort((a, b) => {
    return new Date(a.Date) - new Date(b.Date);
  });

  console.log(dateData);

  const alarmCountData = [];

  for (let i = 0; i < dateData.length; i += 1) {
    const tempEvent = dateData[i].Event;

    if (tempEvent === 'Alarm Active') {
      const tempResult = alarmCountData.findIndex(
        obj =>
          obj.Date.setHours(0, 0, 0, 0) ===
          dateData[i].Date.setHours(0, 0, 0, 0)
      );

      if (tempResult === -1) {
        alarmCountData.push({
          Date: dateData[i].Date,
          AlAct: dateData[i].Count,
          CommLost: 0,
          CommRes: 0,
          CommHLost: 0,
          CommHLRes: 0,
          DFO: 0,
          DHO: 0,
          IAL: 0,
          IB: 0,
          Other: 0
        });
      } else {
        alarmCountData[tempResult].AlAct += dateData[i].Count;
      }
    } else if (tempEvent === 'Communications Lost') {
      const tempResult = alarmCountData.findIndex(
        obj =>
          obj.Date.setHours(0, 0, 0, 0) ===
          dateData[i].Date.setHours(0, 0, 0, 0)
      );

      if (tempResult === -1) {
        alarmCountData.push({
          Date: dateData[i].Date,
          AlAct: 0,
          CommLost: dateData[i].Count,
          CommRes: 0,
          CommHLost: 0,
          CommHLRes: 0,
          DFO: 0,
          DHO: 0,
          IAL: 0,
          IB: 0,
          Other: 0
        });
      } else {
        alarmCountData[tempResult].CommLost += dateData[i].Count;
      }
    } else if (tempEvent === 'Communications Restored') {
      const tempResult = alarmCountData.findIndex(
        obj =>
          obj.Date.setHours(0, 0, 0, 0) ===
          dateData[i].Date.setHours(0, 0, 0, 0)
      );

      if (tempResult === -1) {
        alarmCountData.push({
          Date: dateData[i].Date,
          AlAct: 0,
          CommLost: 0,
          CommRes: dateData[i].Count,
          CommHLost: 0,
          CommHLRes: 0,
          DFO: 0,
          DHO: 0,
          IAL: 0,
          IB: 0,
          Other: 0
        });
      } else {
        alarmCountData[tempResult].CommRes += dateData[i].Count;
      }
    } else if (tempEvent === 'Communications With Host Lost') {
      const tempResult = alarmCountData.findIndex(
        obj =>
          obj.Date.setHours(0, 0, 0, 0) ===
          dateData[i].Date.setHours(0, 0, 0, 0)
      );

      if (tempResult === -1) {
        alarmCountData.push({
          Date: dateData[i].Date,
          AlAct: 0,
          CommLost: 0,
          CommRes: 0,
          CommHLost: dateData[i].Count,
          CommHLRes: 0,
          DFO: 0,
          DHO: 0,
          IAL: 0,
          IB: 0,
          Other: 0
        });
      } else {
        alarmCountData[tempResult].CommHLost += dateData[i].Count;
      }
    } else if (tempEvent === 'Communications With Host Restored') {
      const tempResult = alarmCountData.findIndex(
        obj =>
          obj.Date.setHours(0, 0, 0, 0) ===
          dateData[i].Date.setHours(0, 0, 0, 0)
      );

      if (tempResult === -1) {
        alarmCountData.push({
          Date: dateData[i].Date,
          AlAct: 0,
          CommLost: 0,
          CommRes: 0,
          CommHLost: 0,
          CommHLRes: dateData[i].Count,
          DFO: 0,
          DHO: 0,
          IAL: 0,
          IB: 0,
          Other: 0
        });
      } else {
        alarmCountData[tempResult].CommHLRes += dateData[i].Count;
      }
    } else if (tempEvent === 'Door Forced Open') {
      const tempResult = alarmCountData.findIndex(
        obj =>
          obj.Date.setHours(0, 0, 0, 0) ===
          dateData[i].Date.setHours(0, 0, 0, 0)
      );

      if (tempResult === -1) {
        alarmCountData.push({
          Date: dateData[i].Date,
          AlAct: 0,
          CommLost: 0,
          CommRes: 0,
          CommHLost: 0,
          CommHLRes: 0,
          DFO: dateData[i].Count,
          DHO: 0,
          IAL: 0,
          IB: 0,
          Other: 0
        });
      } else {
        alarmCountData[tempResult].DFO += dateData[i].Count;
      }
    } else if (tempEvent === 'Door Held Open') {
      const tempResult = alarmCountData.findIndex(
        obj =>
          obj.Date.setHours(0, 0, 0, 0) ===
          dateData[i].Date.setHours(0, 0, 0, 0)
      );

      if (tempResult === -1) {
        alarmCountData.push({
          Date: dateData[i].Date,
          AlAct: 0,
          CommLost: 0,
          CommRes: 0,
          CommHLost: 0,
          CommHLRes: 0,
          DFO: 0,
          DHO: dateData[i].Count,
          IAL: 0,
          IB: 0,
          Other: 0
        });
      } else {
        alarmCountData[tempResult].DHO += dateData[i].Count;
      }
    } else if (tempEvent === 'Invalid Access Level') {
      const tempResult = alarmCountData.findIndex(
        obj =>
          obj.Date.setHours(0, 0, 0, 0) ===
          dateData[i].Date.setHours(0, 0, 0, 0)
      );

      if (tempResult === -1) {
        alarmCountData.push({
          Date: dateData[i].Date,
          AlAct: 0,
          CommLost: 0,
          CommRes: 0,
          CommHLost: 0,
          CommHLRes: 0,
          DFO: 0,
          DHO: 0,
          IAL: dateData[i].Count,
          IB: 0,
          Other: 0
        });
      } else {
        alarmCountData[tempResult].IAL += dateData[i].Count;
      }
    } else if (tempEvent === 'Invalid Badge') {
      const tempResult = alarmCountData.findIndex(
        obj =>
          obj.Date.setHours(0, 0, 0, 0) ===
          dateData[i].Date.setHours(0, 0, 0, 0)
      );

      if (tempResult === -1) {
        alarmCountData.push({
          Date: dateData[i].Date,
          AlAct: 0,
          CommLost: 0,
          CommRes: 0,
          CommHLost: 0,
          CommHLRes: 0,
          DFO: 0,
          DHO: 0,
          IAL: 0,
          IB: dateData[i].Count,
          Other: 0
        });
      } else {
        alarmCountData[tempResult].IB += dateData[i].Count;
      }
    } else {
      const tempResult = alarmCountData.findIndex(
        obj =>
          obj.Date.setHours(0, 0, 0, 0) ===
          dateData[i].Date.setHours(0, 0, 0, 0)
      );

      if (tempResult === -1) {
        alarmCountData.push({
          Date: dateData[i].Date,
          AlAct: 0,
          CommLost: 0,
          CommRes: 0,
          CommHLost: 0,
          CommHLRes: 0,
          DFO: 0,
          DHO: 0,
          IAL: 0,
          IB: 0,
          Other: dateData[i].Count
        });
      } else {
        alarmCountData[tempResult].Other += dateData[i].Count;
      }
    }
  }

  console.log(alarmCountData);

  const alarmCountChart = am4core.create('chartdiv2', am4charts.XYChart);

  alarmCountChart.data = alarmCountData;
  // alarmCountChart.dataSource.url = "components/AlarmCounts.csv"
  // alarmCountChart.dataSource.parser = new am4core.CSVParser();
  // alarmCountChart.dataSource.parser.options.useColumnNames = true;

  const alarmDateAxis = alarmCountChart.xAxes.push(new am4charts.DateAxis());
  // alarmDateAxis.dataFields.category = "year";

  const alarmValueAxis = alarmCountChart.yAxes.push(new am4charts.ValueAxis());
  alarmDateAxis.title.text = 'Date';
  alarmValueAxis.title.text = 'Number of Alarms';
  alarmCountChart.scrollbarX = new am4core.Scrollbar();

  const series2 = alarmCountChart.series.push(new am4charts.LineSeries());
  series2.name = 'Alarm Active';
  // series2.stroke = am4core.color('#F44336');
  series2.strokeWidth = 3;
  series2.dataFields.valueY = 'AlAct';
  series2.dataFields.dateX = 'Date';

  const series3 = alarmCountChart.series.push(new am4charts.LineSeries());
  series3.name = 'Communications Lost';
  // series3.stroke = am4core.color('#E91E63');
  series3.strokeWidth = 3;
  series3.dataFields.valueY = 'CommLost';
  series3.dataFields.dateX = 'Date';

  const series4 = alarmCountChart.series.push(new am4charts.LineSeries());
  series4.name = 'Communications Restored';
  // series4.stroke = am4core.color('#9C27b0');
  series4.strokeWidth = 3;
  series4.dataFields.valueY = 'CommRes';
  series4.dataFields.dateX = 'Date';

  const series5 = alarmCountChart.series.push(new am4charts.LineSeries());
  series5.name = 'Communications With Host Lost';
  // series5.stroke = am4core.color('#673AB7');
  series5.strokeWidth = 3;
  series5.dataFields.valueY = 'CommHLost';
  series5.dataFields.dateX = 'Date';

  const series6 = alarmCountChart.series.push(new am4charts.LineSeries());
  series6.name = 'Communications With Host Restored';
  // series6.stroke = am4core.color('#3F51B5');
  series6.strokeWidth = 3;
  series6.dataFields.valueY = 'CommHLRes';
  series6.dataFields.dateX = 'Date';

  const series7 = alarmCountChart.series.push(new am4charts.LineSeries());
  series7.name = 'Door Forced Open';
  // series7.stroke = am4core.color('#2196F3');
  series7.strokeWidth = 3;
  series7.dataFields.valueY = 'DFO';
  series7.dataFields.dateX = 'Date';

  const series8 = alarmCountChart.series.push(new am4charts.LineSeries());
  series8.name = 'Door Held Open';
  // series8.stroke = am4core.color('#03A9F4');
  series8.strokeWidth = 3;
  series8.dataFields.valueY = 'DHO';
  series8.dataFields.dateX = 'Date';

  const series9 = alarmCountChart.series.push(new am4charts.LineSeries());
  series9.name = 'Invalid Access Level';
  // series9.stroke = am4core.color('#00BCD4');
  series9.strokeWidth = 3;
  series9.dataFields.valueY = 'IAL';
  series9.dataFields.dateX = 'Date';

  const series10 = alarmCountChart.series.push(new am4charts.LineSeries());
  series10.name = 'Invalid Badge';
  // series10.stroke = am4core.color('#008856');
  series10.strokeWidth = 3;
  series10.dataFields.valueY = 'IB';
  series10.dataFields.dateX = 'Date';

  const series11 = alarmCountChart.series.push(new am4charts.LineSeries());
  series11.name = 'Other Alarm';
  // series11.stroke = am4core.color('#F38400');
  series11.strokeWidth = 3;
  series11.dataFields.valueY = 'Other';
  series11.dataFields.dateX = 'Date';

  const alarmTitle = alarmCountChart.titles.create();
  alarmTitle.text = 'Alarm Types (Past 6 Months)';
  alarmTitle.fontSize = 20;
  alarmTitle.marginBottom = 0;

  alarmCountChart.legend = new am4charts.Legend();
  alarmCountChart.legend.position = 'right';
  alarmCountChart.legend.width = '50%';

  const sixMonths = new Date();
  sixMonths.setMonth(sixMonths.getMonth() - 6);
  alarmDateAxis.min = sixMonths;
  alarmDateAxis.max = today;
};

const makeDeviceCountChart = data => {
  // display the "Total User Transactions" count
  const trCount = data.rows[0][8];
  const trTitle = 'Total User Transactions:';
  $('#totalTransactions').html(`<h2>${trTitle}</h2> <h3>${trCount}</h3>`);

  // make the "Active/Total Badges" chart
  const badgeChart = am4core.create('chartdiv3', am4charts.PieChart);
  badgeChart.hiddenState.properties.opacity = 0;
  badgeChart.data = [
    { value: data.rows[0][6], name: 'Active' },
    { value: data.rows[0][5] - data.rows[0][6], name: 'Inactive' }
  ];
  badgeChart.radius = am4core.percent(70);
  badgeChart.innerRadius = am4core.percent(40);
  badgeChart.startAngle = 180;
  badgeChart.endAngle = 360;
  badgeChart.title = 'Active/Total Badges';

  const badgeSeries = badgeChart.series.push(new am4charts.PieSeries());
  badgeSeries.dataFields.value = 'value';
  badgeSeries.dataFields.category = 'name';

  badgeSeries.hiddenState.properties.startAngle = 90;
  badgeSeries.hiddenState.properties.endAngle = 90;

  const badgeTitle = badgeChart.titles.create();
  badgeTitle.text = 'Active/Total Badges';
  badgeTitle.fontSize = 20;
  badgeTitle.marginBottom = 0;

  badgeChart.legend = new am4charts.Legend();

  // make the "Device Counts" charts for ACS/VMS Headend
  const headendChart = am4core.create('chartdiv4', am4charts.PieChart);
  headendChart.hiddenState.properties.opacity = 0;
  headendChart.data = [
    { value: data.rows[0][13], name: 'Panels' },
    { value: data.rows[0][15], name: 'LNVRs' },
    { value: data.rows[0][17], name: 'Other Recorders' }
  ];
  const headendSeries = headendChart.series.push(new am4charts.PieSeries());
  headendSeries.dataFields.value = 'value';
  headendSeries.dataFields.category = 'name';
  const headendTitle = headendChart.titles.create();
  headendTitle.text = 'Device Counts (Parent Devices)';
  headendTitle.fontSize = 20;
  headendTitle.marginBottom = 0;
  headendChart.legend = new am4charts.Legend();

  // make the "Device Counts" charts for ACS/VMS Field
  const fieldChart = am4core.create('chartdiv5', am4charts.PieChart);
  fieldChart.hiddenState.properties.opacity = 0;
  fieldChart.data = [
    { value: data.rows[0][14], name: 'Readers' },
    { value: data.rows[0][16], name: 'IP Cameras' },
    { value: data.rows[0][18], name: 'Other Cameras' }
  ];
  const fieldSeries = fieldChart.series.push(new am4charts.PieSeries());
  fieldSeries.dataFields.value = 'value';
  fieldSeries.dataFields.category = 'name';
  const fieldTitle = fieldChart.titles.create();
  fieldTitle.text = 'Device Counts (Child Devices)';
  fieldTitle.fontSize = 20;
  fieldTitle.marginBottom = 0;
  fieldChart.legend = new am4charts.Legend();
};

const makeReaderTimezonesTable = data => {
  $('#readerTimezones').DataTable({
    data: data.rows,
    columns: data.columns.map(col => {
      return { title: col.name };
    })
  });
};
