import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePages/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLoyut from "./Loyutse/PageLoyut/PageLoyut";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { auth } from "./firebase/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [authUser] = useAuthState(auth);

  return (
    <PageLoyut>
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/auth" />}/>
        <Route path="/auth" element={!authUser ? <AuthPage /> : <Navigate to="/" />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLoyut>
  )
}
export default App
