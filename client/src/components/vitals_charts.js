import React, { Component } from 'react'
import Radium from 'radium'
import { VictoryArea, VictoryContainer } from 'victory'

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

  constructor (props) {
    super(props)
    this.state = {
      timeseries: [],
      dataLoaded: false
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps.device)
    fetch(`/api/timeseries/${nextProps.device}`)
      .then(response => {
        return response.json()
      }).then(json => {
        this.setState({
          timeseries: json,
          dataLoaded: true
        })
      })
  }

  createCharts () {
    return (
      <div>
        <VictoryContainer
          width={1000}
          height={1000}
        >

          <VictoryArea
            data={this.state.timeseries}
            x={'dt'}
            y={'cpu'}
            width={400}
            height={400}
          />

          <VictoryArea
            data={this.state.timeseries}
            x={'dt'}
            y={'memory'}
            width={400}
            height={400}
          />

          <VictoryArea
            data={this.state.timeseries}
            x={'dt'}
            y={'disk'}
            width={400}
            height={400}
          />

          <VictoryArea
            data={this.state.timeseries}
            x={'dt'}
            y={'uptime'}
            width={400}
            height={400}
          />

        </VictoryContainer>
      </div>
    )
  }

  handlePlotArea () {
    if (this.state.dataLoaded === false) {
      if (!this.props.device) {
        return 'No device selected'
      } else {
        return 'Loading data ...'
      }
    } else {
      return this.createCharts()
    }
  }

  render () {
    return (
      <div style={style.base}>
        <h1>{this.props.device}</h1>
        <div>{this.handlePlotArea()}</div>
      </div>
    )
  }
}

export default Radium(VitalsCharts)
