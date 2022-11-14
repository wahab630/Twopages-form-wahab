import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.scss';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Base from './components/layouts/Base';
import Home from './pages/Home';
import Login from './components/elements/Login';
import Register from './components/elements/Register';
import app from './firebase'

function App() {
  return (
    <>
     <Router>
    <Base>
    <Routes>
      <Route index path='/home' element={ <Home/>} ></Route>
      <Route  path='/login' element={ <Login/>} ></Route>
      <Route  path='/register' element={ <Register/>} ></Route>
      
    </Routes>
    </Base>
    </Router>
    
    </>
  );
}

export default App;
