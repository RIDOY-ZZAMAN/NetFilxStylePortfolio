import "./App.css";
import Browse from "./browse/browse";
import Layout from "./Layout";
import NetflixTitle from "./NetflixTitle";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./profilePage/profilePage";
import WorkPermit from "./pages/WorkPermit";
import Skills from "./pages/Skills";
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
      <Route
        path="/work-permit"
        element={
          <Layout>
            <WorkPermit />
          </Layout>
        }
      />
      <Route
        path="/skills"
        element={
          <Layout>
            <Skills />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
