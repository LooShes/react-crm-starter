import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import NavBar from './components/NavBar'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'
import Clients from './components/Clients'
import Actions from './components/Actions'
import Analytics from './components/Analytics'

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContainer />
      <Footer />
      <Router>
          <div id='routes'>
              <Route path="/clients" exact render={() => <Clients />} />
              <Route path="/actions" exact render={() => <Actions />} />
              <Route path="/analytics" exact render={() => <Analytics />} />
          </div>
      </Router>
      
    </div>
  );
}

export default App;
