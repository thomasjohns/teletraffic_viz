import React, { Component } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import Radium from 'radium'
import Header from '../components/header'

const Link = Radium(ReactRouterLink)

const style = {
  screenList: {
    fontFamily: 'monospace',
    color: 'blue',
    position: 'absolute',
    fontSize: '40px',
    top: '16%',
    left: '37%',
    listStyleType: 'none'
  },
  screenListDescription: {
    position: 'relative',
    left: '7%',
    color: '#121F1F',
    fontSize: '20px'
  },
  linkText: {
    textDecoration: 'none'
  }
}

class Home extends Component {
  render () {
    return (
      <div className='Home'>
        <Header screenName={'Home'} />
        <ul style={style.screenList}>
          <li><Link style={style.linkText} to='/graph'>Graph</Link></li>
          <p style={style.screenListDescription}>
          View graphs of metrics.
          </p>
          <li><Link style={style.linkText} to='/table'>Table</Link></li>
          <p style={style.screenListDescription}>
          View table of metric data.
          </p>
          <li><Link style={style.linkText} to='/excel'>Excel</Link></li>
          <p style={style.screenListDescription}>
          Generate and download excel report.
          </p>
          <li><Link style={style.linkText} to='/upload'>Upload</Link></li>
          <p style={style.screenListDescription}>
          Upload metric data.
          </p>
          <li><Link style={style.linkText} to='/download'>Download</Link></li>
          <p style={style.screenListDescription}>
          Download metric data.
          </p>
        </ul>
      </div>
    )
  }
}

export default Radium(Home)
