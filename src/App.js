import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Report from './components/Report';
import Header from './components/Header';

function App() {
  return (
    <div className="home-container">
      <Router>
      <Header /> 
     

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
        </Routes>


      </Router>
   

    </div>
  );
}

export default App;
