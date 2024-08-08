import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './screens/login';
import Dashboard from './screens/Dashboard';
import Jobs from './screens/Jobs'

export default function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [userData, setUserData] = useState(null);

  // const handleLogin = (data) => {
  //   setLoggedIn(true);
  //   setUserData(data);
  // };

  // const handleLogout = () => {
  //   setLoggedIn(false);
  //   setUserData(null);
  // };

  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </Router>
  );
}
