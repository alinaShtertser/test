import React, {Component} from 'react';
import { Router, Route as DomRoute, Switch } from 'react-router-dom';
import Profile from './pages/profile/profileContainer';
import WorkerList from './pages/workerList/workerListContainer';
import { history } from './store';
import { HOME_PATH, PROFILE_PATH } from './utils/constants';

const Route = ({ ...props }) => <div><DomRoute {...props} /></div>

import './styles/main.scss'

class App extends Component {
  render() {
    return <div>
      <Router history={history}>
        <Switch>
          <Route exact path={HOME_PATH} component={WorkerList} />
          <Route path={PROFILE_PATH} component={Profile} />
        </Switch>
      </Router>
    </div>;
  }
}

export default App;
