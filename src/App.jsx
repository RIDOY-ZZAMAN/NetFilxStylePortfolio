import "./App.css";
import Browse from "./browse/browse";
import Layout from "./Layout";
import NetflixTitle from "./NetflixTitle";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./profilePage/profilePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<NetflixTitle></NetflixTitle>} />
      <Route path="/browse" element={<Browse></Browse>} />
      <Route
        path="/profile/:profileName"
        element={
          <Layout>
            <ProfilePage></ProfilePage>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
