/*
eslint camelcase: "warn"
*/
// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { ResponsiveCalendar } from '@nivo/calendar';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
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
    this.dataTest = await this.testQuery.addConnVar();
    console.log(this.dataTest);

    const chart = am4core.create('chartdiv', am4charts.PieChart);
    const map = am4core.create('chartdiv2', am4maps.MapChart);
    map.geodata = am4geodata_worldLow;

    const series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = '  litres';
    series.dataFields.category = '  country';

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
  };

  MyResponsiveCalendar = ({ caldata /* see data tab */ }) => (
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
        <div id="chartdiv" style={{ width: '900px', height: '800px' }} />
        <div id="chartdiv2" style={{ width: '900px', height: '800px' }} />
      </div>
    );
  };
}

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
