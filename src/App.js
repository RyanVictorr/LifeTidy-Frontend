import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import Inicio from './components/pages/Inicio';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Inicio}/>
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  </Router>
  )

  }
export default App;
