/*
eslint camelcase: "warn"
*/
// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { ResponsiveCalendar } from '@nivo/calendar';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
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
    // console.log(this.dataTest.rows);

    makeAlarmCountChart(this.dataTest);
    makeAlarmCountDay(this.dataTestDay);

    /*
    const chart = am4core.create('chartdiv', am4charts.PieChart);
    const map = am4core.create('chartdiv2', am4maps.MapChart);
    map.geodata = am4geodata_worldLow;

    const series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = '  litres';
    series.dataFields.category = '  country';
    */

    /*
    chart.data = [
      {
        '  country': 'SCV',
        '  litres': 315
      },
      {
        '  country': 'AMER',
        '  litres': 137
      },
      {
        '  country': 'EMEA',
        '  litres': 72
      },
      {
        '  country': 'APAC',
        '  litres': 104
      },
      {
        '  country': 'Apple Park',
        '  litres': 66
      },
      {
        '  country': 'Data Centers',
        '  litres': 61
      }
    ];

    chart.legend = new am4charts.Legend();

    const polygonSeries = new am4maps.MapPolygonSeries();
    polygonSeries.useGeodata = true;

    polygonSeries.data = [
      {
        id: 'US',
        name: 'United States',
        value: 100,
        fill: am4core.color('#F05C5C')
      },
      {
        id: 'FR',
        name: 'France',
        value: 50,
        fill: am4core.color('#5C5CFF')
      }
    ];
    polygonSeries.exclude = ['AQ'];
    map.series.push(polygonSeries);

    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = '{name}: {value}';
    polygonTemplate.fill = am4core.color('#74B266');

    const hs = polygonTemplate.states.create('hover');
    hs.properties.fill = am4core.color('#367B25');
    */
  };

  /*
  MyResponsiveCalendar = ({ caldata }) => (
    <ResponsiveCalendar
      data={caldata}
      from="2015-03-01"
      to="2016-07-12"
      emptyColor="#eeeeee"
      colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'row',
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: 'right-to-left'
        }
      ]}
    />
  );
  */

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
    return (
      <div id="charts">
        <div id="chartdiv" style={{ width: '900px', height: '800px' }} />
        <div id="chartdiv2" style={{ width: '900px', height: '800px' }} />
        <div id="chartdiv3" style={{ width: '900px', height: '800px' }} />
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
  series2.stroke = am4core.color('#CDA2AB');
  series2.strokeWidth = 3;
  series2.dataFields.valueY = 'Alarms3';
  series2.dataFields.dateX = 'Date';

  const series3 = alarmCountChart.series.push(new am4charts.LineSeries());
  series3.name = 'Priority 101';
  series3.stroke = am4core.color('#FF6B9A');
  series3.strokeWidth = 3;
  series3.dataFields.valueY = 'Alarms';
  series3.dataFields.dateX = 'Date';

  const series4 = alarmCountChart.series.push(new am4charts.LineSeries());
  series4.name = 'Priority 102';
  series4.stroke = am4core.color('#20A33C');
  series4.strokeWidth = 3;
  series4.dataFields.valueY = 'Alarms2';
  series4.dataFields.dateX = 'Date';

  const series5 = alarmCountChart.series.push(new am4charts.LineSeries());
  series5.name = 'No Priority';
  series5.stroke = am4core.color('#4853B8');
  series5.strokeWidth = 3;
  series5.dataFields.valueY = 'Alarms4';
  series5.dataFields.dateX = 'Date';
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
  series2.stroke = am4core.color('#F44336');
  series2.strokeWidth = 3;
  series2.dataFields.valueY = 'AlAct';
  series2.dataFields.dateX = 'Date';

  const series3 = alarmCountChart.series.push(new am4charts.LineSeries());
  series3.name = 'Communications Lost';
  series3.stroke = am4core.color('#E91E63');
  series3.strokeWidth = 3;
  series3.dataFields.valueY = 'CommLost';
  series3.dataFields.dateX = 'Date';

  const series4 = alarmCountChart.series.push(new am4charts.LineSeries());
  series4.name = 'Communications Restored';
  series4.stroke = am4core.color('#9C27b0');
  series4.strokeWidth = 3;
  series4.dataFields.valueY = 'CommRes';
  series4.dataFields.dateX = 'Date';

  const series5 = alarmCountChart.series.push(new am4charts.LineSeries());
  series5.name = 'Communications With Host Lost';
  series5.stroke = am4core.color('#673AB7');
  series5.strokeWidth = 3;
  series5.dataFields.valueY = 'CommHLost';
  series5.dataFields.dateX = 'Date';

  const series6 = alarmCountChart.series.push(new am4charts.LineSeries());
  series6.name = 'Communications With Host Restored';
  series6.stroke = am4core.color('#3F51B5');
  series6.strokeWidth = 3;
  series6.dataFields.valueY = 'CommHLRes';
  series6.dataFields.dateX = 'Date';

  const series7 = alarmCountChart.series.push(new am4charts.LineSeries());
  series7.name = 'Door Forced Open';
  series7.stroke = am4core.color('#2196F3');
  series7.strokeWidth = 3;
  series7.dataFields.valueY = 'DFO';
  series7.dataFields.dateX = 'Date';

  const series8 = alarmCountChart.series.push(new am4charts.LineSeries());
  series8.name = 'Door Held Open';
  series8.stroke = am4core.color('#03A9F4');
  series8.strokeWidth = 3;
  series8.dataFields.valueY = 'DHO';
  series8.dataFields.dateX = 'Date';

  const series9 = alarmCountChart.series.push(new am4charts.LineSeries());
  series9.name = 'Invalid Access Level';
  series9.stroke = am4core.color('#00BCD4');
  series9.strokeWidth = 3;
  series9.dataFields.valueY = 'IAL';
  series9.dataFields.dateX = 'Date';

  const series10 = alarmCountChart.series.push(new am4charts.LineSeries());
  series10.name = 'Invalid Badge';
  series10.stroke = am4core.color('#008856');
  series10.strokeWidth = 3;
  series10.dataFields.valueY = 'IB';
  series10.dataFields.dateX = 'Date';

  const series11 = alarmCountChart.series.push(new am4charts.LineSeries());
  series11.name = 'Other Alarm';
  series11.stroke = am4core.color('#F38400');
  series11.strokeWidth = 3;
  series11.dataFields.valueY = 'Other';
  series11.dataFields.dateX = 'Date';

  alarmCountChart.legend = new am4charts.Legend();

  const sixMonths = new Date();
  sixMonths.setMonth(sixMonths.getMonth() - 6);
  alarmDateAxis.min = sixMonths;
  alarmDateAxis.max = today;
};

/*
const nivoHTML = (
  <div className="dashboardChart">
    <ResponsiveCalendar
      data={caldata}
      from="2015-03-01"
      to="2016-07-12"
      emptyColor="#eeeeee"
      // eslint-disable-next-line prettier/prettier
      colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'row',
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: 'right-to-left'
        }
      ]}
    />
  </div>
);

const caldata = [
  {
    day: '2018-02-12',
    value: 44
  },
  {
    day: '2018-05-13',
    value: 166
  },
  {
    day: '2018-07-09',
    value: 2
  },
  {
    day: '2018-04-10',
    value: 21
  },
  {
    day: '2018-05-18',
    value: 170
  },
  {
    day: '2017-09-16',
    value: 107
  },
  {
    day: '2016-11-09',
    value: 45
  },
  {
    day: '2015-12-14',
    value: 24
  },
  {
    day: '2016-06-14',
    value: 115
  },
  {
    day: '2016-01-12',
    value: 7
  },
  {
    day: '2018-02-11',
    value: 310
  },
  {
    day: '2017-08-12',
    value: 179
  },
  {
    day: '2018-08-03',
    value: 291
  },
  {
    day: '2017-08-21',
    value: 212
  },
  {
    day: '2018-03-08',
    value: 270
  },
  {
    day: '2016-03-29',
    value: 254
  },
  {
    day: '2015-07-31',
    value: 364
  },
  {
    day: '2016-08-07',
    value: 362
  },
  {
    day: '2015-07-25',
    value: 281
  },
  {
    day: '2018-05-31',
    value: 325
  },
  {
    day: '2017-05-30',
    value: 350
  },
  {
    day: '2017-09-09',
    value: 22
  },
  {
    day: '2016-08-12',
    value: 107
  },
  {
    day: '2016-03-10',
    value: 258
  },
  {
    day: '2017-02-20',
    value: 171
  },
  {
    day: '2017-11-04',
    value: 373
  },
  {
    day: '2017-10-03',
    value: 202
  },
  {
    day: '2017-12-16',
    value: 177
  },
  {
    day: '2016-01-26',
    value: 78
  },
  {
    day: '2018-05-22',
    value: 181
  },
  {
    day: '2015-06-19',
    value: 372
  },
  {
    day: '2015-04-02',
    value: 14
  },
  {
    day: '2016-02-08',
    value: 243
  },
  {
    day: '2017-08-13',
    value: 163
  },
  {
    day: '2018-02-17',
    value: 188
  },
  {
    day: '2016-01-08',
    value: 328
  },
  {
    day: '2015-04-30',
    value: 70
  },
  {
    day: '2017-08-27',
    value: 86
  },
  {
    day: '2015-10-15',
    value: 278
  },
  {
    day: '2017-12-20',
    value: 217
  },
  {
    day: '2015-11-06',
    value: 185
  },
  {
    day: '2017-06-18',
    value: 268
  },
  {
    day: '2015-07-27',
    value: 316
  },
  {
    day: '2017-09-01',
    value: 252
  },
  {
    day: '2017-06-20',
    value: 294
  },
  {
    day: '2016-02-13',
    value: 19
  },
  {
    day: '2018-01-13',
    value: 325
  },
  {
    day: '2017-08-31',
    value: 176
  },
  {
    day: '2018-03-13',
    value: 303
  },
  {
    day: '2018-02-04',
    value: 82
  },
  {
    day: '2017-04-25',
    value: 263
  },
  {
    day: '2018-02-24',
    value: 166
  },
  {
    day: '2016-04-10',
    value: 355
  },
  {
    day: '2017-12-21',
    value: 266
  },
  {
    day: '2017-12-18',
    value: 184
  },
  {
    day: '2015-08-08',
    value: 156
  },
  {
    day: '2017-11-29',
    value: 168
  },
  {
    day: '2017-01-24',
    value: 184
  },
  {
    day: '2016-07-30',
    value: 115
  },
  {
    day: '2016-07-06',
    value: 215
  },
  {
    day: '2015-12-16',
    value: 38
  },
  {
    day: '2015-10-16',
    value: 81
  },
  {
    day: '2016-07-22',
    value: 316
  },
  {
    day: '2015-07-04',
    value: 35
  },
  {
    day: '2017-11-16',
    value: 197
  },
  {
    day: '2018-01-29',
    value: 196
  },
  {
    day: '2017-05-01',
    value: 336
  },
  {
    day: '2015-10-31',
    value: 238
  },
  {
    day: '2016-06-22',
    value: 189
  },
  {
    day: '2018-06-02',
    value: 145
  },
  {
    day: '2018-03-12',
    value: 376
  }
];
*/
