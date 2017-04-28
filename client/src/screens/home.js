import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Radium from 'radium'
import Header from '../components/header'

const style = {
  screenList: {
    fontFamily: 'monospace',
    color: 'blue',
    position: 'absolute',
    fontSize: '40px',
    top: '12%',
    left: '40%'
  },
  screenListDescription: {
    position: 'relative',
    left: '10%',
    color: '#121F1F',
    fontSize: '20px',
  }
}

class Home extends Component {
  render () {
    return (
      <div className='Home'>
        <Header screenName={'Home'} />
        <ul style={style.screenList}>
          <li><Link to='/graph'>Graph</Link></li>
          <p style={style.screenListDescription}>
          View graphs of metrics.
          </p>
          <li><Link to='/table'>Table</Link></li>
          <p style={style.screenListDescription}>
          View table of metric data.
          </p>
          <li><Link to='/excel'>Excel</Link></li>
          <p style={style.screenListDescription}>
          Generate and download excel report.
          </p>
          <li><Link to='/upload'>Upload</Link></li>
          <p style={style.screenListDescription}>
          Upload metric data.
          </p>
          <li><Link to='/download'>Download</Link></li>
          <p style={style.screenListDescription}>
          Download metric data.
          </p>
        </ul>
      </div>
    )
  }
}

export default Radium(Home)
