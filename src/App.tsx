import { Provider } from 'react-redux';
import Module from './modules';
import store from './store';
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Module />
    </Provider>
  );
}

export default App;
