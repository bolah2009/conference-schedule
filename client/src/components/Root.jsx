import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import '@material/react-text-field/dist/text-field.css';
import '../css/display.css';
import '../css/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Conferences from './Conferences';
import Conference from './Conference';
import Agendas from './Agendas';
import Account from './Account';
import Agenda from './Agenda';
import NotFound from './NotFound';
import SignUp from './SignUp';
import Login from './Login';
import UnderConstruction from './UnderConstruction';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/conferences" component={Conferences} />
        <Route exact path="/conferences/:conferenceID" component={Conference} />
        <Route exact path="/conferences/:conferenceID/agendas" component={Agendas} />
        <Route exact path="/conferences/:conferenceID/agendas/:agendaID" component={Agenda} />
        <Route path="/conferences/:conferenceID/*" component={UnderConstruction} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};

export default Root;
