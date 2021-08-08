import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './App.scss';
import City from './components/City';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div id="app">
          <nav>
            <ul>
              <li>
                <NavLink to="/home" activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">About</NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/home">
              <City />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

function About() {
  return <h2>About</h2>;
}

export default App;
