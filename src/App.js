import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Header from './components/header';
import CreateFlight from './pages/flights/createFlights';
import CreatePassenger from './pages/passengers/createPassenger';
import CreateTicket from './pages/tickets/createTickets';
import ShowFlights from './pages/flights/showFlights';
import ShowPassengers from './pages/passengers/showPassengers';
import ShowTickets from './pages/tickets/showTickets';
import UpdateFlight from './pages/flights/updateFlight';
import UpdatePassenger from './pages/passengers/updatePassenger';
import UpdateTicket from './pages/tickets/updateTickets';

class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={ShowFlights} />
          <Route path="/flights/new" exact component={CreateFlight} />
          <Route path="/flights/update/:id" exact component={UpdateFlight} />
          
          <Route path="/passengers" exact component={ShowPassengers} />
          <Route path="/passengers/new" exact component={CreatePassenger} />
          <Route path="/passengers/update/:id" exact component={UpdatePassenger} />

          <Route path="/tickets" exact component={ShowTickets} />
          <Route path="/tickets/new" exact component={CreateTicket} />
          <Route path="/tickets/update/:id" exact component={UpdateTicket} />
        </Switch>
      </Router>
    );
  }
}

export default App;
