
import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = () => {

const pageSize = 9;
const apiKey = process.env.REACT_APP_NEWS_API
    return (
      <div style={{backgroundColor: '#758694'}}>
         <Router>
       <NavBar/>
       <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} key={Math.random()} pageSize={pageSize} country="us" category="general"/>}/>
          <Route exact path="/business" element={<News apiKey={apiKey} key={Math.random()} pageSize={pageSize} country="us" category="business"/>}/>
          <Route exact path="/entertainment" element={<News apiKey={apiKey} key={Math.random()} pageSize={pageSize} country="us" category="entertainment"/>}/>
          <Route exact path="/health" element={<News apiKey={apiKey} key={Math.random()} pageSize={pageSize} country="us" category="health"/>}/>
          <Route exact path="/science" element={<News apiKey={apiKey} key={Math.random()} pageSize={pageSize} country="us" category="science"/>}/>
          <Route exact path="/sports" element={<News apiKey={apiKey} key={Math.random()} pageSize={pageSize} country="us" category="sports"/>}/>
          <Route exact path="/technology" element={<News apiKey={apiKey} key={Math.random()} pageSize={pageSize} country="us" category="technology"/>}/>
        </Routes>
       </Router>
      </div>
    )
  }

export default App