import { BrowserRouter, Switch, Route, Link  } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import GetBitcoinCash from './components/GetBitcoinCash';
import SupportACause from './components/SupportACause';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/getbitcoincash">
          <GetBitcoinCash />
        </Route>
        <Route path="/supportacause">
          <SupportACause />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
