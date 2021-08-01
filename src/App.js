import { Provider } from 'react-redux';
import './App.css';
import City from './components/City';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div id="app">
        <City />
      </div>
    </Provider>
  )
}

export default App;
