import { useCallback, useEffect, useState } from 'react';
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
          <Header />

          <Switch>
            <Route exact path="/">
              <City />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

function Header() {
  const [hasError, setHasError] = useState(false);
  const [tips, setTips] = useState(["Xin chào!"]);
  const [tipIndex, setTipIndex] = useState(0);

  const fetchTips = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:3001/tips');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      setTips(data);
    } catch {
      setHasError(true);
    }
  }, []);

  useEffect(() => {
    fetchTips();
  }, [fetchTips])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hasError) {
        setTipIndex(revTipIndex => {
          if (revTipIndex >= tips.length - 1) {
            return 0;
          } else {
            return revTipIndex + 1;
          }
        });
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    }
  }, [hasError, tips])

  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>

        <div className="tips">
          {hasError ? "Mọi chuyện vẫn ổn cả chứ?" : tips[tipIndex]}
        </div>
      </ul>
    </nav>
  )
}

function About() {
  return <h2>About</h2>;
}

export default App;
