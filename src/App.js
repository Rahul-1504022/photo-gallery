import Main from './MainComponent/Main';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import myStore from './redux/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <div>
      <Provider store={myStore}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
