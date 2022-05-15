import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import NewsItem from './components/NewsItem';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

const App = (props) => {
  const pageSize = 6;
  const [progress, setprogress] = useState(0)

  const apiKey = process.env.REACT_APP_API_KEY


  return (

    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='green'
          progress={progress}
        //onLoaderFinished={() => setProgress(0)}
        />
        <Routes>

          <Route exact path='/' element={<NewsItem setProgress={setprogress} apiKey={apiKey} key="general" pageSize={pageSize} country='in' category='general' />}></Route>
          <Route exact path='/home' element={<NewsItem setProgress={setprogress} apiKey={apiKey} key="general" pageSize={pageSize} country='in' category='general' />}></Route>
          <Route exact path='/business' element={<NewsItem setProgress={setprogress} apiKey={apiKey} key="business" pageSize={pageSize} country='in' category='business' />}></Route>
          <Route exact path='/entertainment' element={<NewsItem setProgress={setprogress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country='in' category='entertainment' />}></Route>
          <Route exact path='/health' element={<NewsItem setProgress={setprogress} apiKey={apiKey} key="health" pageSize={pageSize} country='in' category='health' />}></Route>
          <Route exact path='/science' element={<NewsItem setProgress={setprogress} apiKey={apiKey} key="science" pageSize={pageSize} country='in' category='science' />}></Route>
          <Route exact path='/sports' element={<NewsItem setProgress={setprogress} apiKey={apiKey} key="sports" pageSize={pageSize} country='in' category='sports' />}></Route>
          <Route exact path='/technology' element={<NewsItem setProgress={setprogress} apiKey={apiKey} key="technology" pageSize={pageSize} country='in' category='technology' />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App

//{/* api key - ed3a0b0ce4ad440e965ddf9046ab3693 */ }