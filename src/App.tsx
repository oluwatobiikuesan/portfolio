import { Navigate, Route, Routes } from "react-router-dom";
import Assistant from "./page/Assistant";
import Home from "./page/Home";
import Layout from "./page/Layout";
import NotFound from "./page/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="ai" element={<Assistant />} />
        {/* Older links now point at sections on the home page */}
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="project" element={<Navigate to="/#work" replace />} />
        <Route path="contact" element={<Navigate to="/#contact" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
