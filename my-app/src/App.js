import {GlobalStyle} from './style';
import { Provider } from 'react-redux';
import {
  Routes,
  Route
} from 'react-router-dom';
import Header from './common/header';
import store from './store';
import Detail from './pages/detail/loadable.js';
import Home from './pages/home';
import Login from './pages/login';
import Write from './pages/write';

function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle/>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/write" element={<Write/>}/>
          <Route exact path="/detail/:id" element={<Detail/>}/>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
