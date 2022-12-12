import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import NavBar from './navbar';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className="Content">
          <Routes>
            <Route exact path="/News_Website" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
