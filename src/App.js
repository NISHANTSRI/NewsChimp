import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsItem from './components/NewsItem';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        {/* api key - ed3a0b0ce4ad440e965ddf9046ab3693 */}
        <NewsItem pageSize="9"/>
      </div>
    )
  }
}
