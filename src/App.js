import './App.css';
import Home from './Home';
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import prd from './prd';
import phed from './phed';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/prd" component={prd}></Route>
          <Route path="/phed" component={phed}></Route>
          <Home path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
