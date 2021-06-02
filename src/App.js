import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';

function App() {
  return (
    <Provider store = { store }>
      <div className="App">
        <HookCakeContainer />
        <CakeContainer />
      </div>
    </Provider>
    
  );
}

export default App;
