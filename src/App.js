import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';

function App() {
  return(
    <Router>
      <div className='App'></div>
      <div className="Content">
        <Routes>
            <Route exact path="/News_Website" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
