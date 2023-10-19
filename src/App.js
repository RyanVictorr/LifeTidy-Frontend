import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  </Router>
  )

  }
export default App;
