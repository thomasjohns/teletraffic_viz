import React, { Component } from 'react'
import Radium from 'radium'
import { VictoryArea, VictoryChart, VictoryTheme } from 'victory'

const style = {
  base: {
    width: '80%',
    height: '87%',
    position: 'absolute',
    margin: 0,
    padding: 0,
    top: '13%',
    left: '20%'
  }
}

class VitalsCharts extends Component {

  constructor () {
    super()
    this.state = {}
  }

  componentDidMount () {
    fetch('/api/timeseries/router_1')
      .then((response) => {
        return response.json()
      }).then((json) => {
        this.setState(json)
      })
  }

  render () {
    return (
      <div style={style.base}>
        <VictoryChart
          domainPadding={10}
          theme={VictoryTheme.grayscale}
        >
          <VictoryArea
          />
        </VictoryChart>
      </div>
    )
  }
}

export default Radium(VitalsCharts)
