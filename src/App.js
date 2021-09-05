import { useCallback, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import './App.scss';
import City from './pages/City';
import About from './pages/About';
import Home from './pages/Home';
import { store } from './store/store';

function App() {
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
        setTipIndex(prevTipIndex => {
          if (prevTipIndex >= tips.length - 1) {
            return 0;
          } else {
            return prevTipIndex + 1;
          }
        });
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    }
  }, [hasError, tips])

  return (
    <Provider store={store}>
      <Router>
        <div id="app">
          <header>
            <div className="header-text">
              My React Project
            </div>

            <nav>
              <ul>
                <li>
                  <NavLink to="/home" activeClassName="active">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/city" activeClassName="active">City</NavLink>
                </li>
                <li>
                  <NavLink to="/about" activeClassName="active">About</NavLink>
                </li>
              </ul>
            </nav>

            <div className="tips header-text">
              {hasError ? "Mọi chuyện vẫn ổn cả chứ?" : tips[tipIndex]}
            </div>
          </header>

          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/city">
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

export default App;
