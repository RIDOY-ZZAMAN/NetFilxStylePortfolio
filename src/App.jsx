import "./App.css";
import Browse from "./browse/browse";
import Layout from "./Layout";
import NetflixTitle from "./NetflixTitle";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./profilePage/profilePage";
import WorkPermit from "./pages/WorkPermit";
import Skills from "./pages/Skills";
import WorkExperience from "./pages/WorkExperience";
import Certifications from "./pages/Certifications";
import Recommendations from "./pages/Recommendations";
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
      <Route
        path="/work-experience"
        element={
          <Layout>
            <WorkExperience />
          </Layout>
        }
      />
      <Route
        path="/certifications"
        element={
          <Layout>
            <Certifications />
          </Layout>
        }
      />
      <Route
        path="/recommendations"
        element={
          <Layout>
            <Recommendations />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
