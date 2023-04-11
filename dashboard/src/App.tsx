import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./containers";
import DefaultPage from "./pages/defaultPage";
import Users from "./pages/users";
import NotFound from "./pages/notFound";
import SignIn from "./pages/auth/singIn";
import SignUp from "./pages/auth/signUp";
import { useTypedSelector } from "./hooks/useTypedSelector";
import Profile from "./pages/profile";

import ConfirmEmail from "./pages/confirmEmail";
import EditUser from "./pages/editUser";




const App: React.FC = () => {
  const { isAuth, user } = useTypedSelector((store) => store.UserReducer);
  return (
    <Routes>
      {isAuth && (
        <>
          {user.role === "Administrators" && (
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DefaultPage />} />
              <Route path="users" element={<Users />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="profile" element={<Profile />} />
              <Route path="edituser" element={<EditUser />} />
            </Route>
          )}
          {user.role === "Users" && (
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DefaultPage />} />
              <Route path="users" element={<Users />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          )}
        </>
      )}
      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard/" element={<SignIn />} />
      <Route path="/confirmEmail/" element={<ConfirmEmail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
