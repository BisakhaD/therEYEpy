import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";

import Help from "./component/Help";
import Home from "./component/Home";
import Information from "./component/Information";
import Navbar from "./component/Navbar";
import Therapy from "./component/Therapy";


function App() {
  return (
    <div className="App">      
      <Router>
      <Navbar />
        <Switch>
          <Route exact path = '/'><Home /></Route>
          <Route path = '/help'><Help /></Route>
          <Route path = '/information'><Information /></Route>
          <Route path = '/therapy'><Therapy /></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
