import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './screens/login';
import Dashboard from './screens/Dashboard';
import AdminDashboard from './screens/admin/index'
import Jobs from './screens/Jobs'
import UserManagement from './screens/admin/userManagement'
import ViewUser from './screens/admin/ViewUsers'
import Adminjobs from './screens/admin/jobs'
import Assignjobs from './screens/admin/assignJobs'
import Createjobs from './screens/admin/createJobs'
import Trackjobs from './screens/admin/TrackJobs'

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
        <Route path="/adminDashboard" element={<AdminDashboard/>} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/admin-jobs" element={<Adminjobs />} />
        <Route path="/manage-user" element={<UserManagement />} />
        <Route path="/view-users" element={<ViewUser />} />
        <Route path="/assign-jobs" element={<Assignjobs />} />
        <Route path="/create-jobs" element={<Createjobs />} />
        <Route path="/track-jobs" element={<Trackjobs />} />
        {/* <Route path="/add-user" element={<AddUser />} />
        <Route path="/user-permissions" element={<UserPermissions />} />
        <Route path="/suspend-user" element={<SuspendUser />} />
        <Route path="/delete-user" element={<DeleteUserAccount />} />
        <Route path="/user-activities" element={<UserActivities />} /> */}
      </Routes>
    </Router>
  );
}
