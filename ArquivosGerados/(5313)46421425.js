    // @flow&#xD;&#xA;    import {ActionType} from '../../types'&#xD;&#xA;    import 'isomorphic-fetch'&#xD;&#xA;    import * as api from '../../app/api'&#xD;&#xA;    import * as types from './forecastHourlyActionTypes'&#xD;&#xA;    const getForecastHourly:ActionType = (query:number):ActionType => ({&#xD;&#xA;      type: types.GET_FORECAST_HOURLY,&#xD;&#xA;      payload: new Promise((resolve, reject) => {&#xD;&#xA;        fetch(api.forecast(query)).then(response => {&#xD;&#xA;          resolve(response.json())&#xD;&#xA;        })&#xD;&#xA;      })&#xD;&#xA;    })&#xD;&#xA;    const setForecastHourlyActiveReportType:ActionType = (type:string):ActionType => ({&#xD;&#xA;      type: types.SET_FORECAST_HOURLY_ACTIVE_REPORT_TYPE,&#xD;&#xA;      payload: type&#xD;&#xA;    })&#xD;&#xA;    export { getForecastHourly, setForecastHourlyActiveReportType }