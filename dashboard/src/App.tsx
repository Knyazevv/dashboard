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
import UserUpdare from "./pages/updateUser";
import ConfirmEmail from "./pages/auth/confirmEmail";


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
              <Route path="userUpdate" element={<UserUpdare />} />
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
      <Route path="*" element={<NotFound />} />
      <Route path="/confirmEmail/" element={<ConfirmEmail />} />
    </Routes>
  );
};

export default App;
