import React, { useState } from 'react';
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
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route
          path="/dashboard/*"
          element={loggedIn ? <Dashboard user={userData} onLogout={handleLogout} /> : <Navigate to="/signin" />}
        /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/dashboard/settings" element={<Settings user={userData} />}>
          <Route path="general" element={<GeneralSettings user={userData} />} />
          <Route path="account" element={<AccountSettings user={userData} />} />
        </Route>
        
        <Route path="/classroom-List" element={<ClassroomList />} />
        <Route path="/create-classroom" element={<CreateClassroom />} />
        <Route path="/assignments" element={<AssignmentList />} />
        <Route path="/create-assignment" element={<CreateAssignment />} /> */}

        {/* <Route path="/" element={<Navigate to="/signin" />} /> */}
      </Routes>
    </Router>
  );
}
