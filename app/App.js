import React, {Component} from "react";
import { Router, Route as DomRoute, Switch } from 'react-router-dom';
import Profile from './pages/profile/profile';
import { history } from './store';
const Route = ({ ...props }) => <div><DomRoute {...props} /></div>

import './styles/main.scss'

class App extends Component {
  render() {
    return <div>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Profile} />
        </Switch>
      </Router>
    </div>;
  }
}

export default App;
