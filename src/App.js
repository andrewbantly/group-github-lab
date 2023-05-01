import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from "./components/Home"
import Header from "./partials/Header"
import Profile from "./components/Profile"

// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route 
            path="/"
            element={<Home />}
            />
          <Route 
          path='/profile/:id'
          element={<Profile />}
          />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
